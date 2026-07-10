import Site from '@/site/Site';
import { useSeo } from '@/site/lib/useSeo';

const Index = () => {
  useSeo({
    title: 'Pruthvi S — AI Engineer at DScribe | Agentic AI for Healthcare',
    description:
      'Pruthvi S is an AI Engineer at DScribe building agentic AI for healthcare — LLMs, RAG, multi-agent systems, voice AI and OCR. See his projects, experience, and writing.',
    path: '/',
    type: 'profile',
  });

  return (
    <div className="min-h-screen">
      <Site />
    </div>
  );
};

export default Index;
