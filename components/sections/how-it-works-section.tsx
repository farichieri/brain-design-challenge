import { LANDING_CONTENT } from '@/constants/landing';
import Icon from '@/components/ui/icon';

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 container">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-4">
          How It Works
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Get expert OUAF assistance in three simple steps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {LANDING_CONTENT.howItWorks.map((step, index) => (
          <div key={index} className="text-center relative">
            {/* Step number */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 mb-6">
              <span className="text-2xl font-bold text-primary">
                {step.step}
              </span>
            </div>

            {/* Icon */}
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                <Icon name={step.icon} className="w-6 h-6" />
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              {step.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {step.description}
            </p>

            {/* Connector line (except for last item) */}
            {index < LANDING_CONTENT.howItWorks.length - 1 && (
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform translate-x-8" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
