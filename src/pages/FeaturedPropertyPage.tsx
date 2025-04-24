import React, { useState } from 'react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { MapPin, Home, Maximize, Calendar, ArrowRight, Check, Phone, Mail, Share2, Heart, X } from 'lucide-react';

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
  description: `Welcome to this magnificent 5-bedroom, 4-bathroom residence offering an exceptional 3,667 square feet of thoughtfully designed living space. Built in 2014, this spacious family home combines modern construction with timeless elegance in Charlotte's desirable Hucks Landing neighborhood.

The moment you step inside, you'll appreciate the generous proportions and thoughtful layout that set this home apart. The grand entry foyer with soaring ceilings leads to an open-concept main living area perfect for entertaining. The gourmet kitchen features a breakfast bar and walk-in pantry, while the formal dining room provides space for elegant entertaining.

The main floor also includes a flexible space ideal for a home office or study. Upstairs, you'll find an expansive primary suite with a luxury en-suite bathroom, along with four additional bedrooms offering space for everyone. Multiple living areas provide room to spread out, and the versatile bonus room/loft offers additional living space.

Premium features throughout include elegant architectural details, abundant natural light from oversized windows, high ceilings, designer light fixtures, premium flooring, upgraded kitchen appliances, custom cabinetry, spacious walk-in closets, and energy-efficient systems.

The outdoor space provides the perfect setting for relaxation and entertainment with a professionally landscaped yard, extended patio perfect for outdoor dining, and a private backyard retreat with ample space for a garden, play area, or pool addition.

Situated in the highly desirable Hucks Landing neighborhood, this home offers a family-friendly community with sidewalks, excellent proximity to top-rated schools, quick access to I-485, I-77, and I-85, and is just minutes from shopping, dining, and entertainment with an easy commute to Uptown Charlotte and major employers.`,
  features: [
    "Grand entry foyer with soaring ceilings",
    "Open-concept main living area perfect for entertaining",
    "Gourmet kitchen with breakfast bar and walk-in pantry",
    "Formal dining room for elegant entertaining",
    "Main floor flex space ideal for home office or study",
    "Expansive primary suite with luxury en-suite bathroom",
    "Four additional bedrooms offering space for everyone",
    "Multiple living areas providing room to spread out",
    "Versatile bonus room/loft for additional living space",
    "Elegant architectural details",
    "Abundant natural light from oversized windows",
    "High ceilings throughout",
    "Designer light fixtures",
    "Premium flooring",
    "Upgraded kitchen appliances",
    "Custom cabinetry",
    "Spacious walk-in closets",
    "Energy-efficient systems",
    "Professionally landscaped yard",
    "Extended patio perfect for outdoor dining",
    "Private backyard retreat",
    "Ample space for garden, play area, or pool addition"
  ],
  location: {
    highlights: [
      "Family-friendly community with sidewalks",
      "Excellent proximity to top-rated schools",
      "Quick access to I-485, I-77, and I-85",
      "Minutes to shopping, dining, and entertainment",
      "Easy commute to Uptown Charlotte and major employers",
      "Close to parks and recreational facilities"
    ],
    schools: {
      elementary: "Croft Community Elementary",
      middle: "Ridge Road Middle",
      high: "Mallard Creek High"
    }
  },
  photos: [
    "/5146 Elementary View Dr, Charlotte/dji_fly_20250418_150150_298_1745003088636_photo_optimized.jpg",
    "/5146 Elementary View Dr, Charlotte/5146 Living and dining room.jpg",
    "/5146 Elementary View Dr, Charlotte/5146 primary bedroom.jpg",
    "/5146 Elementary View Dr, Charlotte/5146 theater loft room.jpg",
    "/5146 Elementary View Dr, Charlotte/5146 family and breakfast room.jpg",
    "/5146 Elementary View Dr, Charlotte/5146 patio grill area.jpg",
    "/5146 Elementary View Dr, Charlotte/dji_fly_20250418_150110_295_1745002979942_photo_optimized.jpg",
    "/5146 Elementary View Dr, Charlotte/dji_fly_20250418_150122_296_1745003088641_photo_optimized.jpg",
    "/5146 Elementary View Dr, Charlotte/dji_fly_20250418_150134_297_1745003088639_photo_optimized.jpg",
    "/5146 Elementary View Dr, Charlotte/dji_fly_20250418_150218_299_1745003088633_photo_optimized.jpg",
    "/5146 Elementary View Dr, Charlotte/dji_fly_20250418_150226_300_1745003088631_photo_optimized.jpg",
    "/5146 Elementary View Dr, Charlotte/dji_fly_20250418_150320_302_1745003237709_photo_optimized.jpg",
    "/5146 Elementary View Dr, Charlotte/dji_fly_20250418_150714_307_1745003320297_photo_optimized.jpg",
    "/5146 Elementary View Dr, Charlotte/IMG_8298.jpg",
    "/5146 Elementary View Dr, Charlotte/IMG_8304.jpg",
    "/5146 Elementary View Dr, Charlotte/IMG_8306.jpg"
  ],
  videoTour: "https://www.youtube.com/embed/exuK7JecayQ?si=IfuD1s1hwWV2XcJd",
  agent: {
    name: "Suzanne Croutch",
    phone: "(704) 819-0620",
    email: "suesellscarolinas@gmail.com",
    photo: "/suzanne-austin.jpg"
  }
};

export function FeaturedPropertyPage() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const openGallery = (index: number) => {
    setActivePhotoIndex(index);
    setShowGallery(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setShowGallery(false);
    document.body.style.overflow = 'auto';
  };

  const nextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % propertyDetails.photos.length);
  };

  const prevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + propertyDetails.photos.length) % propertyDetails.photos.length);
  };

  return (
    <>
      <div className="bg-primary-50 py-8">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{propertyDetails.title}</h1>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span>
                  {propertyDetails.address.street}, {propertyDetails.address.city}, {propertyDetails.address.state} {propertyDetails.address.zip}
                </span>
              </div>
            </div>
            <div className="text-3xl font-bold text-primary-600">
              ${propertyDetails.price.toLocaleString()}
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-8">
        {/* Property Gallery */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 h-[400px] md:h-[500px] rounded-lg overflow-hidden cursor-pointer" onClick={() => openGallery(0)}>
              <img 
                src={propertyDetails.photos[0]} 
                alt={propertyDetails.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {propertyDetails.photos.slice(1, 5).map((photo, index) => (
                <div 
                  key={index} 
                  className="h-[190px] md:h-[242px] rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openGallery(index + 1)}
                >
                  <img 
                    src={photo} 
                    alt={`Property view ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button 
              onClick={() => openGallery(0)}
              className="flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <span>View All Photos ({propertyDetails.photos.length})</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Overview */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Overview</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center text-primary-600 mb-1">
                    <Home className="w-6 h-6" />
                  </div>
                  <div className="font-semibold text-xl text-gray-900">{propertyDetails.beds}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-primary-600 mb-1">
                    <Home className="w-6 h-6" />
                  </div>
                  <div className="font-semibold text-xl text-gray-900">{propertyDetails.baths}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-primary-600 mb-1">
                    <Maximize className="w-6 h-6" />
                  </div>
                  <div className="font-semibold text-xl text-gray-900">{propertyDetails.sqft.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Square Feet</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-primary-600 mb-1">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div className="font-semibold text-xl text-gray-900">{propertyDetails.yearBuilt}</div>
                  <div className="text-sm text-gray-600">Year Built</div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                <div className="text-gray-700 space-y-4">
                  {propertyDetails.description.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Property Type</h3>
                <p className="text-gray-700">{propertyDetails.propertyType}</p>
              </div>
            </div>
            
            {/* Features & Amenities */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Features & Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {propertyDetails.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0">
                      <Check className="w-5 h-5 text-primary-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Location & Neighborhood */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Location & Neighborhood</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Neighborhood Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {propertyDetails.location.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-3 flex-shrink-0">
                        <Check className="w-5 h-5 text-primary-600" />
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Schools</h3>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-gray-900">Elementary School</div>
                    <div className="text-gray-700">{propertyDetails.location.schools.elementary}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Middle School</div>
                    <div className="text-gray-700">{propertyDetails.location.schools.middle}</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">High School</div>
                    <div className="text-gray-700">{propertyDetails.location.schools.high}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video Tour */}
            {propertyDetails.videoTour && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Video Tour</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden h-[500px]">
                  <iframe 
                    className="w-full h-full"
                    src={propertyDetails.videoTour}
                    title="YouTube video player for 5146 Elementary View Dr"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Contact Agent */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Agent</h2>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={propertyDetails.agent.photo} 
                    alt={propertyDetails.agent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{propertyDetails.agent.name}</div>
                  <div className="text-sm text-gray-600">Listing Agent</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <a 
                  href={`tel:${propertyDetails.agent.phone}`}
                  className="flex items-center text-gray-700 hover:text-primary-600"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <span>{propertyDetails.agent.phone}</span>
                </a>
                <a 
                  href={`mailto:${propertyDetails.agent.email}`}
                  className="flex items-center text-gray-700 hover:text-primary-600"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  <span>{propertyDetails.agent.email}</span>
                </a>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="I'm interested in this property..."
                    defaultValue="I'm interested in scheduling a viewing for 5146 Elementary View Dr."
                  ></textarea>
                </div>
                <Button className="w-full justify-center">
                  Request Information
                </Button>
              </form>
            </div>
            
            {/* Share & Save */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  className="flex-1 justify-center"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 justify-center"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Save
                </Button>
              </div>
            </div>
            
            {/* Market Analysis */}
            <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Market Analysis</h3>
              <p className="text-gray-700 mb-4">
                The Hucks Landing neighborhood is highly desirable with homes typically priced between $400,000-$550,000.
                The market in the 28269 zip code is currently somewhat competitive, with homes selling for approximately 1-2% below list price.
              </p>
              <div className="text-sm text-gray-600">
                <div className="flex justify-between mb-1">
                  <span>Average Days on Market:</span>
                  <span className="font-medium">43-48 days</span>
                </div>
                <div className="flex justify-between">
                  <span>Hot Homes Sell Within:</span>
                  <span className="font-medium">12-25 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Full Screen Gallery */}
      {showGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 text-white">
            <div className="text-lg font-medium">
              {activePhotoIndex + 1} / {propertyDetails.photos.length}
            </div>
            <button 
              onClick={closeGallery}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl mx-auto">
              <img 
                src={propertyDetails.photos[activePhotoIndex]} 
                alt={`Property view ${activePhotoIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <button 
                onClick={prevPhoto}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-r-lg"
                aria-label="Previous photo"
              >
                <ArrowRight className="w-6 h-6 transform rotate-180" />
              </button>
              
              <button 
                onClick={nextPhoto}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-l-lg"
                aria-label="Next photo"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="p-4 overflow-x-auto">
            <div className="flex gap-2">
              {propertyDetails.photos.map((photo, index) => (
                <div 
                  key={index}
                  className={`w-20 h-20 flex-shrink-0 rounded-md overflow-hidden cursor-pointer border-2 ${
                    index === activePhotoIndex ? 'border-primary-500' : 'border-transparent'
                  }`}
                  onClick={() => setActivePhotoIndex(index)}
                  aria-label={`View photo ${index + 1}`}
                >
                  <img 
                    src={photo} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
