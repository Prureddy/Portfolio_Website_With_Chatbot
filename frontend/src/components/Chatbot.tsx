import { useEffect, useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './chatbot.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Pruthvi's AI assistant. Ask me about his skills, projects, or experience!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  // Dragging state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [position, setPosition] = useState(0);

  // Resizing state
  const [isResizing, setIsResizing] = useState(false);
  const [startResizeX, setStartResizeX] = useState(0);
  const [width, setWidth] = useState(384);

  useEffect(() => {
    const handler = () => { setIsOpen(true); setShowHint(false); };
    window.addEventListener('open-chatbot', handler);
    return () => window.removeEventListener('open-chatbot', handler);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('first_visit_hint_v1')) {
      setShowHint(true);
      localStorage.setItem('first_visit_hint_v1', '1');
      const t = window.setTimeout(() => setShowHint(false), 7000);
      return () => window.clearTimeout(t);
    }
  }, []);

  // Drag handlers
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX('touches' in e ? e.touches[0].clientX : e.clientX);
  };

  const handleDrag = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const dx = currentX - startX;
    
    const viewportWidth = window.innerWidth;
    const chatbotRightOffset = 24; // Corresponds to `right-6`
    const chatbotLeft = viewportWidth - (width + chatbotRightOffset);

    const maxPosition = 0;
    const minPosition = -chatbotLeft;

    const newPosition = position + dx;
    setPosition(Math.max(minPosition, Math.min(maxPosition, newPosition)));
    setStartX(currentX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setPosition(0);
  };

  // Resizing handlers
  const handleResizeStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    setStartResizeX('touches' in e ? e.touches[0].clientX : e.clientX);
  };

  const handleResize = (e: MouseEvent | TouchEvent) => {
    if (!isResizing) return;
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const dx = startResizeX - currentX;
    const newWidth = Math.max(250, Math.min(600, width + dx));
    setWidth(newWidth);
    setStartResizeX(currentX);
  };

  const handleResizeEnd = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', handleDragEnd);
      document.addEventListener('touchmove', handleDrag);
      document.addEventListener('touchend', handleDragEnd);
    } else {
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleDrag);
      document.removeEventListener('touchend', handleDragEnd);
    }
    if (isResizing) {
        document.addEventListener('mousemove', handleResize);
        document.addEventListener('mouseup', handleResizeEnd);
        document.addEventListener('touchmove', handleResize);
        document.addEventListener('touchend', handleResizeEnd);
    } else {
        document.removeEventListener('mousemove', handleResize);
        document.removeEventListener('mouseup', handleResizeEnd);
        document.removeEventListener('touchmove', handleResize);
        document.removeEventListener('touchend', handleResizeEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleDrag);
      document.removeEventListener('touchend', handleDragEnd);
      document.removeEventListener('mousemove', handleResize);
      document.removeEventListener('mouseup', handleResizeEnd);
      document.removeEventListener('touchmove', handleResize);
      document.removeEventListener('touchend', handleResizeEnd);
    };
  }, [isDragging, isResizing, position, startX, width]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true); // Start loading

    try {
      const response = await fetch('https://portfolio-website-with-chatbot.onrender.com/ask/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_question: userMessage.text }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.answer,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Failed to fetch from backend:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm unable to connect to the assistant right now. Please try again later.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        onClick={() => { setIsOpen(!isOpen); setShowHint(false); }}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-electric shadow-glow hover:shadow-electric transition-all duration-300 group z-50 animate-float animate-glow-pulse ring-2 ring-primary/40 hover:ring-primary/60"
        size="icon"
      >
        {isOpen ? (
          <X size={24} className="text-primary-foreground" />
        ) : (
          <MessageCircle size={24} className="text-primary-foreground group-hover:animate-bounce" />
        )}
      </Button>

      {/* First-time hint bubble */}
      {!isOpen && showHint && (
        <div className="fixed bottom-24 right-6 z-50 bg-card text-card-foreground border border-card-border shadow-glow rounded-full px-3 py-2 text-xs animate-fade-in">
          Tap to chat with the AI Assistant
        </div>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 h-[70vh] max-h-[28rem] glass rounded-2xl shadow-2xl border border-card-border z-40 overflow-hidden animate-enter transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${position}px)`,
            width: `${width}px`
          }}
        >
          {/* Resizing handle on the left */}
          <div
            className="absolute top-0 bottom-0 left-[-5px] w-2 cursor-col-resize z-50"
            onMouseDown={handleResizeStart}
            onTouchStart={handleResizeStart}
          />
          
          {/* Header */}
          <div
            className="bg-gradient-electric p-4 text-white cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={16} />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs opacity-90">Ask me about Pruthvi</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto h-64 bg-background/95 backdrop-blur-sm">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot size={12} className="text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[70%] p-3 rounded-lg text-sm ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground ml-auto'
                      : 'bg-card border border-card-border text-foreground'
                  }`}
                >
                  {message.sender === 'user' ? (
                    message.text
                  ) : (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {message.text}
                    </ReactMarkdown>
                  )}
                </div>
                {message.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <User size={12} className="text-secondary-foreground" />
                  </div>
                )}
              </div>
            ))}
            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-2 justify-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot size={12} className="text-primary" />
                </div>
                <div className="max-w-[70%] p-3 rounded-lg text-sm bg-card border border-card-border text-foreground">
                  <span className="dot-flashing"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-card-border bg-background/95 backdrop-blur-sm">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about skills, projects..."
                className="flex-1 text-sm border-card-border"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-primary hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="loader-container">
                    <div className="loader-dot"></div>
                    <div className="loader-dot" style={{ animationDelay: '0.2s' }}></div>
                    <div className="loader-dot" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                ) : (
                  <Send size={16} />
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;