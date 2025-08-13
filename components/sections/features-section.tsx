import FeatureCard from '../features/feature-card';
import { LANDING_CONTENT } from '@/constants/landing';

export default function FeaturesSection() {
  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
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
  );
}
