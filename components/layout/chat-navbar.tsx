'use client';

import Link from 'next/link';
import ThemeToggle from '../ui/theme-toggle';
import { ArrowLeft, RotateCcw, Trash2, Settings } from 'lucide-react';

interface ChatNavbarProps {
  onClearChat?: () => void;
  showClearButton?: boolean;
  onRetry?: () => void;
  showRetryButton?: boolean;
}

export default function ChatNavbar({
  onClearChat,
  showClearButton = false,
  onRetry,
  showRetryButton = false,
}: ChatNavbarProps) {
  return (
    <div className="relative z-50 w-full">
      <div className="backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Left section - Back and Brand */}
            <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
              <Link
                href="/"
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
              >
                <div className="w-8 h-8 rounded-lg bg-muted/50 group-hover:bg-muted flex items-center justify-center transition-colors">
                  <ArrowLeft size={16} />
                </div>
                <span className="hidden md:block text-sm font-medium">
                  Back to Home
                </span>
              </Link>

              <div className="hidden sm:block h-6 w-px bg-border/50" />

              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-sm sm:text-lg font-bold">
                    AI
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h1 className="text-sm sm:text-lg font-semibold text-foreground truncate">
                    OUAF Assistant
                  </h1>
                  <p className="text-xs text-muted-foreground truncate hidden sm:block">
                    Oracle Utilities Application Framework
                  </p>
                  <p className="text-xs text-muted-foreground truncate sm:hidden">
                    Oracle Utilities
                  </p>
                </div>
              </div>
            </div>

            {/* Right section - Actions */}
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              {showRetryButton && onRetry && (
                <button
                  onClick={onRetry}
                  className="group flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 text-sm bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-lg transition-all duration-200 hover:scale-105"
                  aria-label="Retry last message"
                >
                  <RotateCcw
                    size={14}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                  <span className="hidden md:block">Retry</span>
                </button>
              )}

              {showClearButton && onClearChat && (
                <button
                  onClick={onClearChat}
                  className="group flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 text-sm bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg transition-all duration-200 hover:scale-105"
                  aria-label="Clear all messages"
                >
                  <Trash2
                    size={14}
                    className="group-hover:scale-110 transition-transform duration-200"
                  />
                  <span className="hidden md:block">Clear</span>
                </button>
              )}

              <div className="hidden sm:block h-6 w-px bg-border/50" />

              <ThemeToggle />

              <button className="hidden sm:flex w-8 h-8 rounded-lg bg-muted/50 hover:bg-muted items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                <Settings size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
