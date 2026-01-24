import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Hornchurch, Essex',
    project: 'Full House Renovation',
    rating: 5,
    text: 'We bought a 1970s property that needed complete modernisation. Grand Home Construction handled everything from rewiring to new plumbing, kitchen, and bathrooms. The project manager kept us updated weekly, and they finished two weeks early. The quality is outstanding - our friends can\'t believe it\'s the same house. We\'re already planning to use them for our garden office next year.',
  },
  {
    name: 'James Thompson',
    location: 'Romford, Essex',
    project: 'Loft Conversion',
    rating: 5,
    text: 'We needed extra space for our growing family but didn\'t want to move. The loft conversion added a master bedroom and ensuite, and they handled all the planning permission paperwork which was a huge relief. The team worked around our schedule, and the finish is beautiful. The Velux windows they recommended flood the room with light. Best investment we\'ve made in the house.',
  },
  {
    name: 'Priya Patel',
    location: 'Upminster, Essex',
    project: 'Kitchen Extension',
    rating: 5,
    text: 'Our old kitchen was tiny and dark. We wanted a modern open-plan space with bi-fold doors to the garden. Grand Home Construction suggested some design improvements we hadn\'t considered, and the result is stunning. The project ran smoothly, and they cleaned up every day. We were able to use a temporary kitchen setup they created, so we weren\'t without cooking facilities. Highly professional team.',
  },
  {
    name: 'Michael Chen',
    location: 'Brentwood, Essex',
    project: 'Bathroom Renovation',
    rating: 5,
    text: 'We had three bathrooms that were all dated and leaking. Grand Home Construction renovated all three, and the transformation is incredible. They found some hidden water damage behind the walls which they fixed properly. The tiling work is perfect, and they even helped us choose fixtures that matched our style. The ensuite now feels like a spa. Worth every penny, and the quote was accurate with no surprise costs.',
  },
  {
    name: 'Emma Williams',
    location: 'Ilford, Essex',
    project: 'Two-Storey Extension',
    rating: 5,
    text: 'Adding a two-storey extension was daunting, but the team made it feel manageable. They explained every stage, and the structural engineer they work with was excellent. The new space gives us a large family room downstairs and two bedrooms upstairs. They stayed within our budget and finished on time despite some bad weather delays. The attention to detail, especially around the joinery, is impressive. Our neighbours have already asked for their number.',
  },
  {
    name: 'David O\'Brien',
    location: 'Dagenham, Essex',
    project: 'Roof Replacement',
    rating: 5,
    text: 'Our roof was leaking in multiple places and needed complete replacement. Grand Home Construction did a thorough inspection first and found issues we weren\'t aware of. They replaced the entire roof, including new guttering and fascias. The scaffolding was up for three weeks, but they worked efficiently and kept the site tidy. No leaks since, and the house looks much better. Professional service from start to finish.',
  },
  {
    name: 'Rachel Green',
    location: 'Rainham, Essex',
    project: 'Single-Storey Extension',
    rating: 5,
    text: 'We wanted to extend our kitchen into a larger family space. The team was brilliant at working with the planning department and got approval quickly. The build quality is excellent, and they matched the existing brickwork perfectly. The new space has transformed how we use our home - we spend so much more time together as a family. The project was completed on budget, and they were respectful of our neighbours throughout.',
  },
  {
    name: 'Mark Stevens',
    location: 'Harold Hill, Essex',
    project: 'Bathroom & Ensuite Installation',
    rating: 5,
    text: 'We had two bathrooms installed - a family bathroom and a new ensuite. The team was punctual every day and worked efficiently. They protected our carpets and furniture throughout, and the cleanup was thorough. The plumbing work is neat, and the finish is exactly what we wanted. The project manager was always available to answer questions. Great value for money and excellent craftsmanship.',
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

        {/* Testimonials Scrollable Container */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 scroll-smooth">
            <div className="flex gap-6 min-w-max">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="bg-card rounded-xl p-8 card-hover relative flex-shrink-0 w-[90vw] sm:w-[500px] md:w-[550px]"
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
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
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
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="hidden sm:inline">←</span>
              <span>Swipe or scroll to see more reviews</span>
              <span className="hidden sm:inline">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
