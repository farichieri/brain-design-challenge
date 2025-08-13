import Icon from '../ui/icon';
import type { IconName } from '@/constants/landing';

interface IntentCardProps {
  title: string;
  description: string;
  icon: IconName;
  onClick: () => void;
  disabled?: boolean;
}

export default function IntentCard({
  title,
  description,
  icon,
  onClick,
  disabled = false,
}: IntentCardProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="group p-6 bg-card border border-border/50 rounded-lg hover:border-primary/20 hover:shadow-md transition-all duration-300 cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label={`Start chat with intent: ${title}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon name={icon} className="w-5 h-5 text-secondary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}
