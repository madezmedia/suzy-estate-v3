import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  return (
    <div 
      className={`
        fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-12">
          <img 
            src="/logo.svg" 
            alt="Suzanne Austin" 
            className="h-12 w-auto" 
          />
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Close menu"
          >
            <X className="w-8 h-8 text-gray-600" />
          </button>
        </div>

        <nav className="space-y-6">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={onClose}
              className="block text-2xl font-semibold text-gray-800 hover:text-primary-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-12">
          <a 
            href="tel:7048190620"
            className="block text-center bg-primary-500 text-white py-4 rounded-lg text-xl hover:bg-primary-600 transition-colors"
          >
            Call (704) 819-0620
          </a>
        </div>
      </div>
    </div>
  );
}
