import React from 'react';
import { Container } from './layout/Container';
import { Button } from './ui/Button';
import heroImage from '/public/hero.jpg';

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
}

export function Hero({
  title = 'Simplifying Your Senior Living Journey in Fort Mill, SC',
  subtitle = 'Comprehensive Real Estate & Estate Planning Services Tailored for Retirees',
  backgroundImage = heroImage,
  ctaText = 'Get Started Today'
}: HeroProps) {
  return (
    <div 
      className="relative h-[600px] flex items-center"
      aria-label="Hero Section: Real Estate Services"
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        role="img"
        aria-label="Background image of real estate landscape"
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <Container className="relative z-10">
        <div 
          className="max-w-2xl text-white"
          data-testid="hero-content"
        >
          <h1 
            className="text-5xl font-bold mb-6"
            data-testid="hero-title"
          >
            {title}
          </h1>
          <p 
            className="text-xl mb-8"
            data-testid="hero-subtitle"
          >
            {subtitle}
          </p>
          <Button 
            showArrow
            data-testid="hero-cta"
          >
            {ctaText}
          </Button>
        </div>
      </Container>
    </div>
  );
}
