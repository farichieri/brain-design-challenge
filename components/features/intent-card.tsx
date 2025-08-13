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
      className="group p-6 rounded-2xl border border-border/30 bg-card/50 hover:bg-card/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer text-left w-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label={`Start chat with intent: ${title}`}
    >
      {/* Icon */}
      <div className="mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
          <Icon name={icon} className="w-6 h-6" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>

      {/* Hover arrow indicator */}
      <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-sm text-primary font-medium">Start chat</span>
        <svg
          className="w-4 h-4 text-primary transform group-hover:translate-x-1 transition-transform duration-300"
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
    </button>
  );
}
