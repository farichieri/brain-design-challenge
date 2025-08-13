import HeroSection from '@/components/layout/hero-section';
import IntentCardsSection from '@/components/sections/intent-cards-section';
import FeaturesSection from '@/components/sections/features-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import FinalCtaSection from '@/components/sections/final-cta-section';
import Navbar from '@/components/layout/navbar';
import BackgroundBlur from '@/components/ui/background-blur';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 relative">
      <BackgroundBlur />

      <Navbar />
      <HeroSection />

      <main className="w-full mx-auto flex-1">
        <IntentCardsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
