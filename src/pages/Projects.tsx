import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const categories = ['All', 'Renovation', 'Bathroom', 'Extension', 'Roofing'];

const projects = [
  {
    id: 0,
    title: 'Luxury Home Transformation',
    category: 'Renovation',
    type: 'video',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop',
  },
  {
    id: 1,
    title: 'Modern Kitchen Extension',
    category: 'Extension',
    type: 'image',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Complete Bathroom Renovation',
    category: 'Bathroom',
    location: 'Romford, Essex',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Victorian Home Renovation',
    category: 'Renovation',
    location: 'Upminster, Essex',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Slate Roof Replacement',
    category: 'Roofing',
    location: 'Brentwood, Essex',
    image: 'https://images.unsplash.com/photo-1632759145351-1d592b70e4e2?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Two-Storey Extension',
    category: 'Extension',
    location: 'Ilford, Essex',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Luxury Ensuite Installation',
    category: 'Bathroom',
    location: 'Hornchurch, Essex',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop',
  },
  {
    id: 7,
    title: 'Full House Refurbishment',
    category: 'Renovation',
    location: 'Dagenham, Essex',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&h=400&fit=crop',
  },
  {
    id: 8,
    title: 'Flat to Pitched Roof Conversion',
    category: 'Roofing',
    location: 'Rainham, Essex',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    id: 9,
    title: 'Open Plan Living Renovation',
    category: 'Renovation',
    location: 'Harold Hill, Essex',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
                Our Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
                Featured{' '}
                <span className="text-accent">Projects</span>
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Explore our portfolio of completed construction projects across Essex and beyond.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-auto aspect-video object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=675&fit=crop"
              >
                <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'accent' : 'outline'}
                size="lg"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer card-hover"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  {project.type === 'video' ? (
                    <>
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-accent/80 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.344-5.89a1.5 1.5 0 000-2.54L6.3 2.84z"/>
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-display font-bold text-primary-foreground mb-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-6 text-primary-foreground hover:text-accent transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div className="max-w-5xl max-h-[80vh] mx-4">
            {filteredProjects[currentImageIndex]?.type === 'video' ? (
              <video
                controls
                className="max-w-full max-h-[70vh] rounded-lg"
                src={filteredProjects[currentImageIndex]?.videoUrl}
                poster={filteredProjects[currentImageIndex]?.thumbnail}
              />
            ) : (
              <img
                src={filteredProjects[currentImageIndex]?.image}
                alt={filteredProjects[currentImageIndex]?.title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
            )}
            <div className="text-center mt-6">
              <h3 className="text-2xl font-display font-bold text-primary-foreground mb-2">
                {filteredProjects[currentImageIndex]?.title}
              </h3>
            </div>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-6 text-primary-foreground hover:text-accent transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </Layout>
  );
}
