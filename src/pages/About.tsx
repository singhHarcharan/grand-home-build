import { Layout } from '@/components/layout/Layout';
import { Shield, Target, Eye, Users, BadgeCheck, Building2 } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description: 'We never compromise on quality. Every material, every technique, every finish meets our exacting standards.',
  },
  {
    icon: Target,
    title: 'Transparency',
    description: 'Clear communication, honest pricing, and no hidden surprises. You always know what to expect.',
  },
  {
    icon: Eye,
    title: 'Attention to Detail',
    description: 'From the foundation to the final coat of paint, we focus on every detail that makes a difference.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We work alongside you, not just for you. Your input shapes every decision we make.',
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              About Grand Home
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Building Dreams,{' '}
              <span className="text-accent">Delivering Excellence</span>
            </h1>
            <p className="text-xl text-primary-foreground/80">
              A trusted name in domestic construction across the UK, committed to transforming houses into homes.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                A Legacy of Trust & Craftsmanship
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Grand Home Construction Ltd was founded with a simple yet powerful vision: to deliver construction excellence that homeowners can trust. Based in Hornchurch, Essex, we've built our reputation on quality workmanship, transparent practices, and genuine care for our clients.
                </p>
                <p>
                  Under the leadership of Director Jugpreet Singh, our team brings together skilled craftsmen, experienced project managers, and dedicated support staff who share a common commitment to excellence.
                </p>
                <p>
                  From full house renovations to specialized projects like loft conversions and extensions, we approach every project—regardless of size—with the same level of professionalism and attention to detail.
                </p>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-3">
                <BadgeCheck className="w-6 h-6 text-accent" />
                Official Company Details
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Building2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Company Name</p>
                    <p className="font-medium text-foreground">GRAND HOME CONSTRUCTION LTD</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BadgeCheck className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Company Number</p>
                    <p className="font-medium text-foreground">16616339</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Director</p>
                    <p className="font-medium text-foreground">Jugpreet Singh</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Nature of Business</p>
                    <p className="font-medium text-foreground">Construction of domestic buildings (SIC 41202)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Registered Address</p>
                    <p className="font-medium text-foreground">21 Upper Rainham Road, Hornchurch, England, RM12 4BE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              What Drives Us Every Day
            </h2>
            <p className="text-muted-foreground text-lg">
              These core principles guide every project we undertake and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-6 card-hover text-center"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
            "To deliver exceptional construction services that transform houses into homes, building lasting relationships with our clients through quality craftsmanship, transparent communication, and unwavering commitment to their vision."
          </p>
        </div>
      </section>
    </Layout>
  );
}
