import React, { useState, useEffect } from 'react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Loader2, Home, Map, Clock } from 'lucide-react';

export function ListingsPage() {
  const [isListingsLoading, setIsListingsLoading] = useState(true);
  const [isMapLoading, setIsMapLoading] = useState(true);
  const [isComingSoonLoading, setIsComingSoonLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'listings' | 'map' | 'comingSoon'>('listings');

  useEffect(() => {
    // Reset loading states when component mounts
    setIsListingsLoading(true);
    setIsMapLoading(true);
    setIsComingSoonLoading(true);
  }, []);

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <Container>
        <div className="text-center mb-8">
          <SectionTitle>Available Properties</SectionTitle>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Browse our current listings and search properties on the map.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap border-b border-gray-200 mb-6">
          <button
            className={`flex items-center px-6 py-3 font-medium text-sm rounded-t-lg mr-2 mb-2 ${
              activeTab === 'listings'
                ? 'bg-primary-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('listings')}
          >
            <Home className="w-4 h-4 mr-2" />
            Property Listings
          </button>
          <button
            className={`flex items-center px-6 py-3 font-medium text-sm rounded-t-lg mr-2 mb-2 ${
              activeTab === 'map'
                ? 'bg-primary-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('map')}
          >
            <Map className="w-4 h-4 mr-2" />
            Map Search
          </button>
          <button
            className={`flex items-center px-6 py-3 font-medium text-sm rounded-t-lg mb-2 ${
              activeTab === 'comingSoon'
                ? 'bg-primary-500 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('comingSoon')}
          >
            <Clock className="w-4 h-4 mr-2" />
            Coming Soon
          </button>
        </div>

        {/* Property Listings */}
        {activeTab === 'listings' && (
          <div className="w-full rounded-lg overflow-hidden shadow-warmer mb-16 border border-primary-100">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-6 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Suzanne Croutch - Property Listings</h3>
              <div className="text-sm">Specialized in Senior Living Solutions</div>
            </div>
            
            <div className="relative w-full" style={{ minHeight: '500px', height: 'calc(100vh - 250px)' }}>
              {isListingsLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
                  <div className="flex flex-col items-center">
                    <Loader2 className="w-12 h-12 text-primary-500 animate-spin mb-4" />
                    <p className="text-primary-700 font-medium">Loading property listings...</p>
                  </div>
                </div>
              )}
              
              <iframe 
                src="https://matrix.canopymls.com/Matrix/public/IDX.aspx?idx=a26135bd" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                title="Property Listings"
                className="w-full h-full bg-white absolute top-0 left-0 right-0 bottom-0"
                style={{ margin: 0 }}
                onLoad={() => setIsListingsLoading(false)}
              ></iframe>
            </div>
          </div>
        )}

        {/* Map Search */}
        {activeTab === 'map' && (
          <div className="w-full rounded-lg overflow-hidden shadow-warmer mb-16 border border-primary-100">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-6 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Suzanne Croutch - Map Search</h3>
              <div className="text-sm">Find Properties by Location</div>
            </div>
            
            <div className="relative w-full" style={{ minHeight: '500px', height: 'calc(100vh - 250px)' }}>
              {isMapLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
                  <div className="flex flex-col items-center">
                    <Loader2 className="w-12 h-12 text-primary-500 animate-spin mb-4" />
                    <p className="text-primary-700 font-medium">Loading map search...</p>
                  </div>
                </div>
              )}
              
              <iframe 
                src="https://matrix.canopymls.com/Matrix/public/IDX.aspx?idx=def135be" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                title="Map Search"
                className="w-full h-full bg-white absolute top-0 left-0 right-0 bottom-0"
                style={{ margin: 0 }}
                onLoad={() => setIsMapLoading(false)}
              ></iframe>
            </div>
          </div>
        )}

        {/* Coming Soon Listings */}
        {activeTab === 'comingSoon' && (
          <div className="w-full rounded-lg overflow-hidden shadow-warmer mb-16 border border-primary-100">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-6 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Suzanne Croutch - Coming Soon</h3>
              <div className="text-sm">Preview Properties Before They Hit the Market</div>
            </div>
            
            <div className="relative w-full" style={{ minHeight: '500px', height: 'calc(100vh - 250px)' }}>
              {isComingSoonLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
                  <div className="flex flex-col items-center">
                    <Loader2 className="w-12 h-12 text-primary-500 animate-spin mb-4" />
                    <p className="text-primary-700 font-medium">Loading coming soon listings...</p>
                  </div>
                </div>
              )}
              
              <iframe 
                src="https://matrix.canopymls.com/Matrix/public/IDX.aspx?idx=dbad35bf" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                title="Coming Soon Listings"
                className="w-full h-full bg-white absolute top-0 left-0 right-0 bottom-0"
                style={{ margin: 0 }}
                onLoad={() => setIsComingSoonLoading(false)}
              ></iframe>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
