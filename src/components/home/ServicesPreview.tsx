import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Zap,
  Droplets,
  Paintbrush,
  Hammer,
  Bath,
  Home,
  Building2,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Electrical Work',
    description: 'Complete electrical installations, rewiring, and safety upgrades for your home.',
  },
  {
    icon: Droplets,
    title: 'Plumbing',
    description: 'Expert plumbing services from repairs to full bathroom installations.',
  },
  {
    icon: Paintbrush,
    title: 'Decorating',
    description: 'Professional interior and exterior painting and finishing services.',
  },
  {
    icon: Hammer,
    title: 'Carpentry',
    description: 'Bespoke carpentry work including fitted furniture and structural work.',
  },
  {
    icon: Bath,
    title: 'Bathroom Installation',
    description: 'Complete bathroom renovations from design to installation.',
  },
  {
    icon: Home,
    title: 'Full Renovation',
    description: 'Transform your entire home with our comprehensive renovation service.',
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Comprehensive Construction{' '}
            <span className="text-accent">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From small repairs to complete home transformations, we offer a full range of
            professional construction and renovation services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 card-hover cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-accent font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button variant="default" size="lg" className="group">
              View All Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
