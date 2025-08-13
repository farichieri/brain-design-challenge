'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ChatInput from '../features/chat-input';
import { LANDING_CONTENT } from '@/constants/landing';

export default function ConversationSection() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleSendMessage = (message: string) => {
    setIsNavigating(true);
    router.push(`/chat?message=${encodeURIComponent(message)}`);
  };

  return (
    <div className="bg-gradient-to-br from-card to-muted/50 rounded-2xl p-8 px-4 md:p-12 mb-16 md:mb-20 border border-border/20 shadow-sm">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {LANDING_CONTENT.sections.conversation.title}
        </h3>
        <p className="text-lg text-muted-foreground max-w-lg mx-auto">
          {LANDING_CONTENT.sections.conversation.subtitle}
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <ChatInput
          onSendMessage={handleSendMessage}
          disabled={isNavigating}
          placeholder={LANDING_CONTENT.sections.conversation.placeholder}
        />
      </div>
    </div>
  );
}
