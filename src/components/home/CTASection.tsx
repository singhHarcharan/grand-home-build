import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-accent-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-accent-foreground/80 text-lg max-w-xl">
              Get a free, no-obligation quote today. Our team is ready to bring your vision to life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button
                size="xl"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="tel:+441oval">
              <Button
                size="xl"
                variant="outline"
                className="border-2 border-accent-foreground/30 bg-transparent text-accent-foreground hover:bg-accent-foreground/10 font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
