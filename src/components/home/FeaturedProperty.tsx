import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { MapPin, Home, Maximize, Calendar, ArrowRight, Check } from 'lucide-react';

// Property details
const propertyDetails = {
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
  propertyType: "Single-Family Home",
  description: `Welcome to this magnificent 5-bedroom, 4-bathroom residence offering an exceptional 3,667 square feet of thoughtfully designed living space. Built in 2014, this spacious family home combines modern construction with timeless elegance in Charlotte's desirable Hucks Landing neighborhood.`,
  features: [
    "Grand entry foyer with soaring ceilings",
    "Open-concept main living area",
    "Gourmet kitchen with breakfast bar",
    "Theater/loft bonus room",
    "Extended outdoor patio"
  ],
  photos: [
    "/5146 Elementary View Dr, Charlotte/dji_fly_20250418_150150_298_1745003088636_photo_optimized.jpg",
    "/5146 Elementary View Dr, Charlotte/5146 Living and dining room.jpg",
    "/5146 Elementary View Dr, Charlotte/5146 primary bedroom.jpg",
    "/5146 Elementary View Dr, Charlotte/5146 theater loft room.jpg"
  ],
  link: "/property/5146-elementary-view-dr"
};

export function FeaturedProperty() {
  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
      <Container>
        <SectionTitle
          subtitle="Discover our exclusive featured property in Charlotte"
        >
          Featured Property
        </SectionTitle>

        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-warmer border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Property Images */}
              <div className="relative">
                <div className="h-full">
                  <img 
                    src={propertyDetails.photos[0]} 
                    alt={propertyDetails.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-primary-600 px-4 py-2 rounded-lg text-white font-semibold shadow-lg">
                  Featured
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  {propertyDetails.photos.slice(1, 4).map((photo, index) => (
                    <div key={index} className="w-1/3 h-20 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                      <img 
                        src={photo} 
                        alt={`Property view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{propertyDetails.title}</h3>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>
                      {propertyDetails.address.street}, {propertyDetails.address.city}, {propertyDetails.address.state} {propertyDetails.address.zip}
                    </span>
                  </div>
                </div>

                <div className="text-2xl font-bold text-primary-600 mb-6">
                  ${propertyDetails.price.toLocaleString()}
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center text-gray-600 mb-1">
                      <Home className="w-5 h-5" />
                    </div>
                    <div className="font-semibold text-gray-900">{propertyDetails.beds}</div>
                    <div className="text-sm text-gray-600">Beds</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-gray-600 mb-1">
                      <Home className="w-5 h-5" />
                    </div>
                    <div className="font-semibold text-gray-900">{propertyDetails.baths}</div>
                    <div className="text-sm text-gray-600">Baths</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-gray-600 mb-1">
                      <Maximize className="w-5 h-5" />
                    </div>
                    <div className="font-semibold text-gray-900">{propertyDetails.sqft.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Sq.Ft.</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-gray-600 mb-1">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="font-semibold text-gray-900">{propertyDetails.yearBuilt}</div>
                    <div className="text-sm text-gray-600">Year Built</div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700">{propertyDetails.description}</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {propertyDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mt-1 mr-2 flex-shrink-0">
                          <Check className="w-4 h-4 text-primary-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={propertyDetails.link}>
                    <Button 
                      size="lg" 
                      showArrow 
                      className="justify-center"
                    >
                      View Property Details
                    </Button>
                  </a>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="justify-center"
                  >
                    Schedule Viewing
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Market Analysis Callout */}
          <div className="mt-8 bg-primary-50 rounded-xl p-6 border border-primary-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Market Analysis</h3>
                <p className="text-gray-700">
                  The Hucks Landing neighborhood is highly desirable with homes typically priced between $400,000-$550,000.
                  This property offers exceptional value with its spacious layout and premium features.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button 
                  variant="outline" 
                  className="whitespace-nowrap group"
                >
                  View All Listings
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
