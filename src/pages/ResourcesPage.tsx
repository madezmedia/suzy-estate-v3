import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Video, 
  Download, 
  Search, 
  BookOpen, 
  Podcast 
} from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';

type ResourceItem = {
  title: string;
  description: string;
  type: string;
} & (
  { downloadLink: string } | 
  { watchLink: string; duration?: string }
);

const resourceCategories = [
  {
    id: 'guides',
    title: 'Comprehensive Guides',
    icon: FileText,
    resources: [
      {
        title: 'Senior Living Transition Handbook',
        description: 'A complete guide to navigating retirement real estate decisions',
        type: 'PDF Guide',
        downloadLink: '#'
      },
      {
        title: 'Estate Planning Essentials',
        description: 'Critical legal and financial considerations for seniors',
        type: 'PDF Guide',
        downloadLink: '#'
      }
    ] as ResourceItem[]
  },
  {
    id: 'videos',
    title: 'Educational Videos',
    icon: Video,
    resources: [
      {
        title: 'Choosing the Right Senior Community',
        description: 'Expert insights on selecting the perfect retirement location',
        type: 'Video Tutorial',
        duration: '23 min',
        watchLink: '#'
      },
      {
        title: 'Financial Planning for Retirement Moves',
        description: 'Strategies to maximize your real estate investment',
        type: 'Webinar',
        duration: '45 min',
        watchLink: '#'
      }
    ] as ResourceItem[]
  },
  {
    id: 'marketInsights',
    title: 'Market Insights',
    icon: BookOpen,
    resources: [
      {
        title: 'Fort Mill Senior Real Estate Market Report',
        description: 'Quarterly analysis of senior living property trends',
        type: 'Market Report',
        downloadLink: '#'
      },
      {
        title: 'Retirement Community Investment Trends',
        description: 'Comprehensive overview of senior real estate investments',
        type: 'Research Paper',
        downloadLink: '#'
      }
    ] as ResourceItem[]
  }
];

export function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(resourceCategories[0].id);

  const filteredResources = resourceCategories
    .find(cat => cat.id === selectedCategory)?.resources
    .filter(resource => 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <SectionTitle>Knowledge Center</SectionTitle>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Empowering seniors with expert insights, comprehensive guides, and valuable resources for informed decision-making.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="flex items-center mb-8">
            <Search className="w-6 h-6 text-gray-400 mr-4" />
            <input 
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xl placeholder-gray-400 focus:outline-none"
            />
          </div>

          <div className="flex space-x-4 mb-8">
            {resourceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  flex items-center px-6 py-3 rounded-full transition-all
                  ${selectedCategory === category.id 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-primary-50'}
                `}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.title}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600 font-medium">
                    {resource.type}
                  </span>
                  {'duration' in resource && (
                    <span className="text-sm text-gray-500">
                      {resource.duration}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-600">
                  {resource.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {resource.description}
                </p>
                <div className="flex space-x-4">
                  {'downloadLink' in resource && (
                    <Button className="flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  )}
                  {'watchLink' in resource && (
                    <Button variant="outline" className="flex items-center">
                      <Podcast className="w-4 h-4 mr-2" />
                      Watch
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resourceCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <category.icon className="w-16 h-16 mx-auto mb-4 text-primary-500" />
              <h3 className="text-xl font-semibold mb-3">
                {category.title}
              </h3>
              <p className="text-gray-600">
                {category.id === 'guides' && 'Comprehensive written resources to guide your journey'}
                {category.id === 'videos' && 'Engaging video content with expert insights'}
                {category.id === 'marketInsights' && 'In-depth analysis of senior real estate trends'}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
