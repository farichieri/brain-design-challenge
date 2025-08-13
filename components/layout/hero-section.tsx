import { LANDING_CONTENT } from '@/constants/landing';

export default function HeroSection() {
  return (
    <header className="relative py-16 md:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
          <span className="text-primary-foreground text-2xl md:text-3xl font-bold">
            AI
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
          {LANDING_CONTENT.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
          {LANDING_CONTENT.hero.subtitle}
        </p>
        <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto">
          {LANDING_CONTENT.hero.description}
        </p>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
    </header>
  );
}
