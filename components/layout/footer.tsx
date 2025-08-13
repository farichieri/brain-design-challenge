'use client';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname !== '/') {
    return null;
  }

  return (
    <footer className="border-t border-border/30 backdrop-blur-sm">
      <div className="container py-6 md:py-12 lg:py-16">
        <div className="space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-xs md:text-sm">
                  AI
                </span>
              </div>
              <span className="text-lg md:text-xl font-bold text-foreground">
                OUAF Assistant
              </span>
            </div>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
              Your intelligent companion for Oracle Utilities Application
              Framework.
            </p>
          </div>

          <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Code Examples
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Best Practices
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Architecture Guide
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Oracle Utilities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    OUAF Framework
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Developer Tools
                  </a>
                </li>
                <li>
                  <span className="text-muted-foreground text-sm">
                    Powered by AWS Bedrock
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:hidden">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Documentation
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Code Examples
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Best Practices
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Oracle Utilities
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 md:pt-8 border-t border-border/30 mt-6 md:mt-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
            <div className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
              © 2025 OUAF Assistant. Built for OUAF developers.
            </div>
            <div className="flex items-center justify-center md:justify-end gap-4 text-xs md:text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Terms
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
