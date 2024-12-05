import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  ctaText: string;
  onClick: () => void;
}

export function ServiceCard({ title, description, Icon, ctaText, onClick }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-xl p-8 shadow-warm hover:shadow-warmer transition-all duration-300 hover:transform hover:translate-y-[-4px] border border-gray-100">
      <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
        <Icon className="w-7 h-7 text-primary-600" />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <button
        onClick={onClick}
        className="text-primary-600 font-medium flex items-center gap-2 group-hover:text-primary-700 transition-colors"
      >
        {ctaText}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}