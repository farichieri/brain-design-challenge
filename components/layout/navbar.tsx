'use client';

import Link from 'next/link';
import ThemeToggle from '../ui/theme-toggle';

interface NavbarProps {
  onClearChat?: () => void;
  showClearButton?: boolean;
  onRetry?: () => void;
  showRetryButton?: boolean;
}

export default function Navbar({
  onClearChat,
  showClearButton = false,
  onRetry,
  showRetryButton = false,
}: NavbarProps) {
  return (
    <div className="relative z-50 w-full pt-4 px-4">
      <div className="mx-auto border shadow-sm bg-card border-border/30 rounded-full flex max-w-3xl items-center justify-between px-4 py-1.5">
        <Link
          href="/"
          className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity min-w-0"
        >
          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <span className="text-secondary-foreground text-sm font-medium">
              AI
            </span>
          </div>
          <div className="min-w-0">
            <h1 className="text-base md:text-lg font-semibold text-foreground truncate">
              OUAF Assistant
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground truncate">
              Oracle Utilities Application Framework
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
          {showRetryButton && onRetry && (
            <button
              onClick={onRetry}
              className="px-2 md:px-3 py-1 text-xs md:text-sm bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors"
              aria-label="Retry last message"
            >
              Retry
            </button>
          )}
          {showClearButton && onClearChat && (
            <button
              onClick={onClearChat}
              className="px-2 md:px-3 py-2 text-xs md:text-sm text-background/50 bg-foreground/50 hover:bg-foreground/70 active:bg-foreground/30 rounded-3xl cursor-pointer transition-colors"
              aria-label="Clear all messages"
            >
              Clear
            </button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
