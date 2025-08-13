'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import IntentCard from '../features/intent-card';
import { LANDING_CONTENT } from '@/constants/landing';

export default function IntentCardsSection() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleCardClick = (message: string) => {
    setIsNavigating(true);
    router.push(`/chat?message=${encodeURIComponent(message)}`);
  };

  return (
    <div className="mb-16 md:mb-20">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {LANDING_CONTENT.sections.explore.title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {LANDING_CONTENT.sections.explore.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {LANDING_CONTENT.intentCards.map((card, index) => (
          <IntentCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            onClick={() => handleCardClick(card.message)}
            disabled={isNavigating}
          />
        ))}
      </div>
    </div>
  );
}
