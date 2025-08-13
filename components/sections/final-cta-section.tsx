'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LANDING_CONTENT } from '@/constants/landing';

export default function FinalCtaSection() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleStartChat = () => {
    setIsNavigating(true);
    router.push('/chat');
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 container">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-card to-muted/50 rounded-3xl p-8 md:p-12 border border-border/20 shadow-sm">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {LANDING_CONTENT.finalCta.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10">
            {LANDING_CONTENT.finalCta.subtitle}
          </p>

          <button
            onClick={handleStartChat}
            disabled={isNavigating}
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 md:px-10 rounded-2xl text-lg md:text-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            {LANDING_CONTENT.finalCta.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
