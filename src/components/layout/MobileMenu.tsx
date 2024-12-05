import React from 'react';
import { X, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { useScrollLock } from '../../hooks/useScrollLock';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ href: string; label: string; }>;
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  useScrollLock(isOpen);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-[280px] bg-white p-6 shadow-xl">
        <div className="flex justify-end mb-8">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="space-y-4">
          {links.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="block text-lg text-gray-600 hover:text-primary-600 transition-colors"
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-8">
          <Button className="w-full justify-center">
            <Phone className="w-4 h-4 mr-2" />
            (704) 819-0620
          </Button>
        </div>
      </div>
    </div>
  );
}