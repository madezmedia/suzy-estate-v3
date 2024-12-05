import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Filter, 
  Ruler, 
  Bath, 
  Bed, 
  DollarSign, 
  Heart 
} from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';

const mockListings = [
  {
    id: 1,
    title: 'Serene Retirement Cottage',
    address: '123 Peaceful Lane, Fort Mill, SC',
    price: 425000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1500,
    features: ['Single-level', 'Open floor plan', 'Low maintenance'],
    imageUrl: '/public/hero.jpg'
  },
  {
    id: 2,
    title: 'Luxury Senior Community Condo',
    address: '456 Retirement Blvd, Charlotte, NC',
    price: 589000,
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 2200,
    features: ['Elevator access', 'Community center', 'Walking trails'],
    imageUrl: '/public/suzanne-austin.jpg'
  },
  {
    id: 3,
    title: 'Accessible Garden Home',
    address: '789 Comfort Street, Rock Hill, SC',
    price: 375000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1800,
    features: ['Wide doorways', 'Roll-in shower', 'Attached garage'],
    imageUrl: '/public/og-image.jpg'
  }
];

export function ListingsPage() {
  const [priceRange, setPriceRange] = useState([300000, 600000]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const filteredListings = useMemo(() => {
    return mockListings.filter(listing => 
      listing.price >= priceRange[0] && 
      listing.price <= priceRange[1] &&
      (selectedFeatures.length === 0 || 
       selectedFeatures.every(feature => 
         listing.features.includes(feature)
       ))
    );
  }, [priceRange, selectedFeatures]);

  const featureOptions = [
    'Single-level', 
    'Open floor plan', 
    'Elevator access', 
    'Wide doorways', 
    'Community center'
  ];

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <SectionTitle>Discover Your Ideal Senior Living Space</SectionTitle>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Carefully curated properties designed for comfort, accessibility, and quality of life.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Filter className="w-6 h-6 mr-3 text-primary-500" />
              Filter Properties
            </h3>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <div className="flex items-center space-x-4">
                <DollarSign className="w-5 h-5 text-gray-400" />
                <input 
                  type="range" 
                  min={300000} 
                  max={600000} 
                  step={10000}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>${priceRange[0].toLocaleString()}</span>
                <span>${priceRange[1].toLocaleString()}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Features
              </label>
              <div className="space-y-2">
                {featureOptions.map(feature => (
                  <label key={feature} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedFeatures.includes(feature)}
                      onChange={() => 
                        setSelectedFeatures(prev => 
                          prev.includes(feature) 
                            ? prev.filter(f => f !== feature)
                            : [...prev, feature]
                        )
                      }
                      className="mr-2"
                    />
                    {feature}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3 grid md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredListings.map(listing => (
                <motion.div
                  key={listing.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div 
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${listing.imageUrl})` }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 mr-2 text-primary-500" />
                      {listing.address}
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center">
                        <Bed className="w-5 h-5 mr-2 text-primary-500" />
                        {listing.bedrooms} BD
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-5 h-5 mr-2 text-primary-500" />
                        {listing.bathrooms} BA
                      </div>
                      <div className="flex items-center">
                        <Ruler className="w-5 h-5 mr-2 text-primary-500" />
                        {listing.squareFeet} sqft
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-2xl font-bold text-primary-600">
                        ${listing.price.toLocaleString()}
                      </div>
                      <div className="flex space-x-2">
                        <Button className="flex items-center">
                          Learn More
                        </Button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <Heart className="w-6 h-6 text-gray-500 hover:text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </div>
  );
}
