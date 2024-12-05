import React from 'react';
import { Container } from './layout/Container';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Simplifying Your Senior Living Journey in Fort Mill, SC
          </h1>
          <p className="text-xl mb-8">
            Comprehensive Real Estate & Estate Planning Services Tailored for Retirees
          </p>
          <Button showArrow>
            Get Started Today
          </Button>
        </div>
      </Container>
    </div>
  );
}