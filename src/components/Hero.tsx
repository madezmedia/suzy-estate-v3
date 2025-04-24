import React from 'react';
import { Container } from './layout/Container';
import { Button } from './ui/Button';
import { MapPin, Home, Maximize, Calendar } from 'lucide-react';
import heroImage from '/public/hero.jpg';

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  showFeaturedProperty?: boolean;
}

// Featured property details
const featuredProperty = {
  id: "5146-elementary",
  title: "Expansive Family Haven in Sought-After Hucks Landing",
  address: {
    street: "5146 Elementary View Dr",
    city: "Charlotte",
    state: "NC",
    zip: "28269",
    neighborhood: "Hucks Landing"
  },
  price: 558000,
  beds: 5,
  baths: 4,
  sqft: 3667,
  yearBuilt: 2014,
  description: "Welcome to this magnificent 5-bedroom, 4-bathroom residence offering an exceptional 3,667 square feet of thoughtfully designed living space.",
  image: "/5146 Elementary View Dr, Charlotte/dji_fly_20250418_150150_298_1745003088636_photo_optimized.jpg",
  link: "/property/5146-elementary-view-dr"
};

export function Hero({
  title = 'Simplifying Your Senior Living Journey in Fort Mill, SC',
  subtitle = 'Comprehensive Real Estate & Estate Planning Services Tailored for Retirees',
  backgroundImage = heroImage,
  ctaText = 'Get Started Today',
  ctaLink = '/',
  showFeaturedProperty = false
}: HeroProps) {
  
  // Use featured property image as background if showFeaturedProperty is true
  const bgImage = showFeaturedProperty ? featuredProperty.image : backgroundImage;
  
  return (
    <div 
      className="relative h-[600px] flex items-center"
      aria-label="Hero Section: Real Estate Services"
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        role="img"
        aria-label={showFeaturedProperty ? "Featured property image" : "Background image of real estate landscape"}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <Container className="relative z-10">
        {showFeaturedProperty ? (
          <div 
            className="max-w-3xl bg-black/60 backdrop-blur-sm p-8 rounded-xl text-white"
            data-testid="hero-content"
          >
            <div className="inline-block bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Featured Property
            </div>
            
            <h1 
              className="text-4xl md:text-5xl font-bold mb-3"
              data-testid="hero-title"
            >
              {featuredProperty.title}
            </h1>
            
            <div className="flex items-center text-white/90 mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span>
                {featuredProperty.address.street}, {featuredProperty.address.city}, {featuredProperty.address.state} {featuredProperty.address.zip}
              </span>
            </div>
            
            <div className="text-3xl font-bold text-primary-400 mb-4">
              ${featuredProperty.price.toLocaleString()}
            </div>
            
            <div className="grid grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <div className="flex items-center justify-center text-primary-400 mb-1">
                  <Home className="w-5 h-5" />
                </div>
                <div className="font-semibold">{featuredProperty.beds}</div>
                <div className="text-sm text-white/80">Beds</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center text-primary-400 mb-1">
                  <Home className="w-5 h-5" />
                </div>
                <div className="font-semibold">{featuredProperty.baths}</div>
                <div className="text-sm text-white/80">Baths</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center text-primary-400 mb-1">
                  <Maximize className="w-5 h-5" />
                </div>
                <div className="font-semibold">{featuredProperty.sqft.toLocaleString()}</div>
                <div className="text-sm text-white/80">Sq.Ft.</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center text-primary-400 mb-1">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="font-semibold">{featuredProperty.yearBuilt}</div>
                <div className="text-sm text-white/80">Year Built</div>
              </div>
            </div>
            
            <p className="mb-6 text-white/90">
              {featuredProperty.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={featuredProperty.link}>
                <Button 
                  showArrow
                  data-testid="hero-cta"
                >
                  View Property Details
                </Button>
              </a>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Schedule Viewing
              </Button>
            </div>
          </div>
        ) : (
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
            <a href={ctaLink}>
              <Button 
                showArrow
                data-testid="hero-cta"
              >
                {ctaText}
              </Button>
            </a>
          </div>
        )}
      </Container>
    </div>
  );
}
