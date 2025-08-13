import Icon from '../ui/icon';
import type { IconName } from '@/constants/landing';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconName;
  gradient: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
  gradient,
}: FeatureCardProps) {
  return (
    <div className="group text-center">
      {/* Icon container with circular design */}
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-card/50 border border-border/30 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm group-hover:border-primary/30 transition-all duration-300">
          <div
            className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center shadow-lg`}
          >
            <Icon name={icon} className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}
