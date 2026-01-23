import { Link } from 'react-router-dom';
import { Mail as MailIcon, Phone as PhoneIcon } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl font-display">G</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg">GRAND HOME</span>
                <span className="text-primary-foreground/70 text-xs block -mt-1">
                  CONSTRUCTION LTD
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Your trusted partner for domestic construction, renovations, and home improvements across the UK.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:grandhomeconstructionltd@gmail.com"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <MailIcon className="w-4 h-4 text-accent flex-shrink-0" />
                grandhomeconstructionltd@gmail.com
              </a>
              <a
                href="tel:+441onal"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <PhoneIcon className="w-4 h-4 text-accent flex-shrink-0" />
                Contact Us Today
              </a>
              {/* <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>21 Upper Rainham Road, Hornchurch, England, RM12 4BE</span>
              </div> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Our Services' },
                { href: '/projects', label: 'Projects' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Full House Renovation',
                'Home Extensions',
                'Loft Conversions',
                'New Bathroom Installation',
                'Roofing & Guttering',
                'Electrical Work',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Company Details</h4>
            <div className="bg-primary-foreground/5 rounded-lg p-4 space-y-3">
              <div>
                <span className="text-xs text-primary-foreground/50 uppercase tracking-wider">
                  Company Name
                </span>
                <p className="text-sm font-medium">GRAND HOME CONSTRUCTION LTD</p>
              </div>
              <div>
                <span className="text-xs text-primary-foreground/50 uppercase tracking-wider">
                  Company Number
                </span>
                <p className="text-sm font-medium">16616339</p>
              </div>
              <div>
                <span className="text-xs text-primary-foreground/50 uppercase tracking-wider">
                  Director
                </span>
                <p className="text-sm font-medium">Jugpreet Singh</p>
              </div>
              <div>
                <span className="text-xs text-primary-foreground/50 uppercase tracking-wider">
                  SIC Code
                </span>
                <p className="text-sm font-medium">41202 - Domestic Buildings</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {currentYear} Grand Home Construction Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
