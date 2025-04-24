import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' }
];

const quickLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Listings', href: '/listings' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <Container>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img 
              src="/logo.svg" 
              alt="Suzanne Croutch" 
              className="h-16 mb-6" 
            />
            <p className="text-gray-400 mb-6">
              Comprehensive real estate and estate planning services tailored for seniors in Fort Mill and Charlotte regions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <nav className="space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary-500" />
                <span>(704) 819-0620</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary-500" />
                <span>suesellscarolinas@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-primary-500" />
                <span>16 Biltmore Ave, Asheville, NC 28801</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Suzanne Croutch Real Estate. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
