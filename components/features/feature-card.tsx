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
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-50 transition-all duration-700"></div>
          <div className="relative w-20 h-20 bg-card/50 border border-border/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:border-primary/30 transition-all duration-300">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
              <div
                className={`relative w-12 h-12 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center shadow-lg`}
              >
                <Icon name={icon} className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
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
