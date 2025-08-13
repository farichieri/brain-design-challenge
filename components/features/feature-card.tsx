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
    <div className="group p-6 md:p-8 text-center hover:bg-card/50 rounded-2xl transition-all duration-300">
      <div
        className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon name={icon} className="w-8 h-8 text-primary-foreground" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
