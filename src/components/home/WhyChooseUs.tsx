import { Shield, Clock, Award, Users, BadgeCheck, Wallet } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'We use only the finest materials and employ skilled craftsmen to ensure lasting results.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your time. Projects are completed within agreed timelines, every time.',
  },
  {
    icon: Award,
    title: 'Expert Craftsmanship',
    description: 'Our team brings years of experience and attention to detail to every project.',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your vision is our priority. We work closely with you throughout the entire process.',
  },
  {
    icon: Wallet,
    title: 'Transparent Pricing',
    description: 'No hidden costs or surprises. Get detailed quotes upfront with clear breakdowns.',
  },
  {
    icon: BadgeCheck,
    title: 'Fully Registered',
    description: 'A UK registered company (No. 16616339) you can trust for your home projects.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
            Why Grand Home
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Building Trust Through{' '}
            <span className="text-accent">Excellence</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Choose a construction partner that values quality, transparency, and your complete satisfaction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 border border-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
