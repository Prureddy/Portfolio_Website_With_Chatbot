import { useEffect, useState } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user', // Corrected: Explicitly set to 'user'
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    try {
      const response = await fetch('http://127.0.0.1:8000/ask/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_question: userMessage.text }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.answer,
        sender: 'bot', // Corrected: Explicitly set to 'bot'
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Failed to fetch from backend:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm unable to connect to the assistant right now. Please try again later.",
        sender: 'bot', // Corrected: Explicitly set to 'bot'
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
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
        <div className="fixed bottom-24 right-6 w-[90vw] max-w-sm sm:max-w-md md:w-96 h-[70vh] max-h-[28rem] glass rounded-2xl shadow-2xl border border-card-border z-40 overflow-hidden animate-enter">
          {/* Header */}
          <div className="bg-gradient-electric p-4 text-white">
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
                  {message.text}
                </div>
                {message.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <User size={12} className="text-secondary-foreground" />
                  </div>
                )}
              </div>
            ))}
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
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-primary hover:bg-primary/90"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;