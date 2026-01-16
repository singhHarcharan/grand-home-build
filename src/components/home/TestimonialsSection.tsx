import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Hornchurch, Essex',
    project: 'Full House Renovation',
    rating: 5,
    text: 'Grand Home Construction transformed our dated 1970s house into a modern family home. The team was professional, transparent with costs, and delivered on time. Highly recommended!',
  },
  {
    name: 'James Thompson',
    location: 'Romford, Essex',
    project: 'Loft Conversion',
    rating: 5,
    text: 'Exceptional work on our loft conversion. They maximized the space beautifully and handled all the planning permissions. The attention to detail was impressive.',
  },
  {
    name: 'Priya Patel',
    location: 'Upminster, Essex',
    project: 'Kitchen Extension',
    rating: 5,
    text: 'From the initial consultation to the final finish, the experience was seamless. Our new kitchen extension has completely changed how we live. Thank you, Grand Home!',
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            What Our Clients{' '}
            <span className="text-accent">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from real homeowners who trusted us with their construction projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-xl p-8 card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-10 h-10 text-accent/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                <p className="text-xs text-accent mt-1">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
