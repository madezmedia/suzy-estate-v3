import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { MapPin, Home, DollarSign, Maximize, ArrowRight, Tag, Clock } from 'lucide-react';

const listings = [
  {
    id: "5146-elementary",
    title: "Expansive Family Haven",
    address: {
      street: "5146 Elementary View Dr",
      city: "Charlotte",
      state: "NC",
      zip: "28269"
    },
    price: 558000,
    beds: 5,
    baths: 4,
    sqft: 3667,
    lotSize: "0.3 acres",
    listDate: "2025-04-18",
    type: "single_family",
    status: "for_sale",
    features: ["Built 2014", "Theater Room", "Open Floor Plan"],
    photos: [
      "/5146 Elementary View Dr, Charlotte/dji_fly_20250418_150150_298_1745003088636_photo_optimized.jpg",
      "/5146 Elementary View Dr, Charlotte/5146 Living and dining room.jpg"
    ],
    featured: true,
    link: "/property/5146-elementary-view-dr"
  },
  {
    id: "2975784468",
    title: "Elegant Family Home",
    address: {
      street: "8140 Haviland Ln",
      city: "Fort Mill",
      state: "SC",
      zip: "29707"
    },
    price: 365000,
    beds: 3,
    baths: 2,
    sqft: 2200,
    lotSize: "0.25 acres",
    listDate: "2024-12-04",
    type: "single_family",
    status: "for_sale",
    features: ["New Construction", "Community Pool", "Single Story"],
    photos: [
      "https://ap.rdcpix.com/dfdc013b9364a4cfddf8034e082ff488l-m2252864673s.jpg",
      "https://ap.rdcpix.com/dfdc013b9364a4cfddf8034e082ff488l-m3534923279s.jpg"
    ]
  },
  {
    id: "2975784225",
    title: "Luxury Senior Living",
    address: {
      street: "2667 Grantham Place Dr",
      city: "Fort Mill",
      state: "SC",
      zip: "29715"
    },
    price: 415000,
    beds: 4,
    baths: 3,
    sqft: 2800,
    lotSize: "0.3 acres",
    listDate: "2024-12-04",
    type: "single_family",
    status: "for_sale",
    features: ["Gated Community", "First Floor Master", "Golf Course View"],
    photos: [
      "https://ap.rdcpix.com/03a315c98e6cfc41d61383280a938f93l-m2764515624s.jpg"
    ]
  },
  {
    id: "2975782188",
    title: "Spacious Ranch Home",
    address: {
      street: "946 Emory Ln",
      city: "Fort Mill",
      state: "SC",
      zip: "29708"
    },
    price: 735000,
    beds: 5,
    baths: 4,
    sqft: 3257,
    lotSize: "0.11 acres",
    listDate: "2024-12-04",
    type: "single_family",
    status: "for_sale",
    features: ["Open Floor Plan", "Smart Home", "Premium Finishes"],
    photos: [
      "https://ap.rdcpix.com/03a315c98e6cfc41d61383280a938f93l-m2764515624s.jpg",
      "https://ap.rdcpix.com/03a315c98e6cfc41d61383280a938f93l-m3834638572s.jpg"
    ]
  }
];

const marketStats = {
  medianPrice: "$3,847,500",
  daysOnMarket: 70,
  pricePerSqft: "$1,442",
  totalListings: 38
};

export function FeaturedListings() {
  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
      <Container>
        <SectionTitle
          subtitle="Discover our handpicked selection of senior-friendly homes in Fort Mill"
        >
          Featured Listings
        </SectionTitle>

        {/* Market Overview */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-warmer border border-gray-100 p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-primary-600" />
                </div>
                <div className="font-semibold text-gray-900">{marketStats.medianPrice}</div>
                <div className="text-sm text-gray-600">Median Price</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div className="font-semibold text-gray-900">{marketStats.daysOnMarket} Days</div>
                <div className="text-sm text-gray-600">Avg. Time on Market</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-3">
                  <Maximize className="w-6 h-6 text-primary-600" />
                </div>
                <div className="font-semibold text-gray-900">{marketStats.pricePerSqft}</div>
                <div className="text-sm text-gray-600">Price per Sq.Ft.</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-3">
                  <Home className="w-6 h-6 text-primary-600" />
                </div>
                <div className="font-semibold text-gray-900">{marketStats.totalListings}</div>
                <div className="text-sm text-gray-600">Active Listings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {listings.map((listing) => (
            <div 
              key={listing.id} 
              className="bg-white rounded-xl shadow-warm hover:shadow-warmer transition-all duration-300 hover:transform hover:translate-y-[-4px] overflow-hidden border border-gray-100 group"
            >
              <div className="relative h-64">
                <img 
                  src={listing.photos[0]} 
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-primary-600 shadow-lg">
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    New Listing
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{listing.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {listing.address.street}, {listing.address.city}
                    </div>
                  </div>
                  <div className="text-xl font-bold text-primary-600">
                    ${listing.price.toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-gray-900 font-semibold">{listing.beds}</div>
                    <div className="text-sm text-gray-600">Beds</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-900 font-semibold">{listing.baths}</div>
                    <div className="text-sm text-gray-600">Baths</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-900 font-semibold">{listing.sqft.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Sq.Ft.</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {listing.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-primary-50 text-primary-700 text-sm px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {listing.link ? (
                  <a 
                    href={listing.link}
                    className="inline-block w-full text-center rounded-lg font-semibold px-6 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 shadow-warm hover:shadow-warmer hover:transform hover:translate-y-[-2px] transition-all duration-200 group"
                  >
                    View Details
                    <ArrowRight className="inline-block w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                ) : (
                  <Button 
                    variant="outline" 
                    className="w-full justify-center group"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white p-8 rounded-xl shadow-warmer border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Find Your Perfect Home</h3>
            <p className="text-gray-600 mb-8">
              Browse our complete selection of senior-friendly homes in Fort Mill and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" showArrow>
                View All Listings
              </Button>
              <Button variant="outline" size="lg">
                Schedule Viewing
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
