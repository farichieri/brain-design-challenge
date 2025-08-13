import HeroSection from '@/components/layout/hero-section';
import IntentCardsSection from '@/components/sections/intent-cards-section';
import ConversationSection from '@/components/sections/conversation-section';
import FeaturesSection from '@/components/sections/features-section';
import Navbar from '@/components/layout/navbar';

export default function Home() {
  return (
    <div className="bg-background flex flex-col flex-1">
      <Navbar />
      <HeroSection />

      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <IntentCardsSection />
        <ConversationSection />
        <FeaturesSection />
      </main>
    </div>
  );
}
