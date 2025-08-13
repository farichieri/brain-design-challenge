'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ChatInput from '../features/chat-input';
import { LANDING_CONTENT } from '@/constants/landing';

export default function HeroSection() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleSendMessage = (message: string) => {
    setIsNavigating(true);
    router.push(`/chat?message=${encodeURIComponent(message)}`);
  };

  return (
    <header className="relative min-h-screen py-16 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="relative container text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
          <div className="w-4 h-4 text-primary">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-primary">
            AI-Powered OUAF Guidance
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-none">
          <span className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent">
            Master OUAF Instantly.
          </span>
          <br />
          <span className="bg-gradient-to-r from-muted-foreground to-muted-foreground/60 bg-clip-text text-transparent">
            Just Ask.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          OUAF Assistant turns your questions into real, working solutions.
          Simply describe what you need and we'll handle the rest.
        </p>

        {/* Chat Input */}
        <div className="max-w-3xl mx-auto">
          <ChatInput
            onSendMessage={handleSendMessage}
            disabled={isNavigating}
            placeholder={LANDING_CONTENT.sections.conversation.placeholder}
          />
        </div>
      </div>
    </header>
  );
}
