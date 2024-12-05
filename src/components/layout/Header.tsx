import React, { useState } from 'react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { Menu, Phone } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#listings", label: "Listings" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#resources", label: "Resources" },
  { href: "#contact", label: "Contact" }
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 bg-white shadow-sm fixed w-full top-0 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/logo.svg" alt="Suzanne Austin" className="h-12 w-auto" />
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button className="hidden md:flex">
            <Phone className="w-4 h-4 mr-2" />
            (704) 819-0620
          </Button>

          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </Container>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </header>
  );
}