import FeatureCard from '../features/feature-card';
import { LANDING_CONTENT } from '@/constants/landing';

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-card/50">
      <div className="container">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Why Choose OUAF Assistant?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to accelerate your OUAF development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-8">
          {LANDING_CONTENT.features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              gradient={feature.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
