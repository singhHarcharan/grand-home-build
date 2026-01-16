import { Layout } from '@/components/layout/Layout';
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
  Wrench,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Electrical Work',
    description: 'Complete electrical installations, rewiring, and safety upgrades. We handle everything from new wiring systems to smart home integrations.',
    features: ['Full rewiring', 'Consumer unit upgrades', 'Lighting installation', 'Safety inspections'],
  },
  {
    icon: Droplets,
    title: 'Plumbing',
    description: 'Expert plumbing services from repairs to complete system installations. We ensure your water and heating systems work flawlessly.',
    features: ['Pipe installation', 'Boiler services', 'Heating systems', 'Emergency repairs'],
  },
  {
    icon: Paintbrush,
    title: 'Decorating',
    description: 'Professional interior and exterior painting and finishing. Transform your space with expert color consultation and flawless execution.',
    features: ['Interior painting', 'Exterior painting', 'Wallpaper installation', 'Wood finishing'],
  },
  {
    icon: Hammer,
    title: 'Carpentry',
    description: 'Bespoke carpentry work including fitted furniture, structural work, and custom woodwork that adds character to your home.',
    features: ['Custom furniture', 'Fitted wardrobes', 'Structural timber', 'Flooring installation'],
  },
  {
    icon: Bath,
    title: 'Bathroom Installation',
    description: 'Complete bathroom renovations from design to installation. Create your perfect bathroom with our end-to-end service.',
    features: ['Full bathroom design', 'Suite installation', 'Tiling', 'Underfloor heating'],
  },
  {
    icon: Home,
    title: 'Full House Renovation',
    description: 'Transform your entire home with our comprehensive renovation service. We handle every aspect from planning to completion.',
    features: ['Project management', 'All trades coordination', 'Timeline planning', 'Quality assurance'],
  },
  {
    icon: Building2,
    title: 'Roofing & Guttering',
    description: 'Protect your home with professional roofing services. From repairs to full replacements, we keep your property secure.',
    features: ['Roof repairs', 'Full re-roofing', 'Gutter cleaning', 'Fascias & soffits'],
  },
  {
    icon: ArrowUpRight,
    title: 'Loft Conversions',
    description: 'Maximize your living space with a professionally designed loft conversion. Add bedrooms, offices, or living areas.',
    features: ['Planning assistance', 'Structural work', 'Dormers & velux', 'Full fit-out'],
  },
  {
    icon: Wrench,
    title: 'Home Extensions',
    description: 'Extend your living space with expertly built extensions. From single-storey to multi-storey, we deliver your vision.',
    features: ['Design consultation', 'Planning applications', 'Ground works', 'Complete builds'],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Comprehensive{' '}
              <span className="text-accent">Construction Services</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              From small repairs to complete home transformations, we offer a full range of professional construction and renovation services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-8 card-hover grid md:grid-cols-3 gap-8 items-center"
              >
                <div className="md:col-span-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                      <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold text-foreground group-hover:text-accent transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mt-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h4 className="text-sm font-medium text-muted-foreground mb-4">What we offer:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="container-wide text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-accent-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-accent-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Every project is unique. Contact us to discuss your specific requirements and get a tailored quote.
          </p>
          <Link to="/contact">
            <Button
              size="xl"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
