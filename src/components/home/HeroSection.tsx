import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Clock, Users } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';

const stats = [
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Clock, value: '100%', label: 'On-Time Delivery' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Trusted Construction Experts in the UK
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Reliable Home{' '}
            <span className="text-accent">Construction</span> &{' '}
            <span className="text-accent">Renovation</span> Experts
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up delay-100">
            Transform your vision into reality with Grand Home Construction. From complete renovations to stunning extensions, we deliver exceptional craftsmanship with transparent pricing and timely delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up delay-200">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="heroOutline" size="xl">
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 animate-slide-up delay-300">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center sm:text-left"
              >
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <stat.icon className="w-5 h-5 text-accent hidden sm:block" />
                  <span className="text-2xl sm:text-3xl font-bold text-primary-foreground">
                    {stat.value}
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-primary-foreground/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
