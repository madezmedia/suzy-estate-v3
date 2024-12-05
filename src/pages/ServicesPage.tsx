import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { 
  Home, 
  ScrollText, 
  Users, 
  Shield 
} from 'lucide-react';

const serviceCategories = [
  {
    id: 'realEstate',
    title: 'Real Estate Transition Expertise',
    icon: Home,
    description: 'Tailored home finding for seniors, focusing on comfort, accessibility, and lifestyle alignment.',
    details: [
      'Personalized property matching',
      'Accessibility assessment',
      'Community and amenity analysis',
      'Downsizing and relocation support'
    ],
    stats: [
      { label: 'Successful Transitions', value: '97%' },
      { label: 'Average Client Satisfaction', value: '4.9/5' }
    ]
  },
  {
    id: 'estatePlanning',
    title: 'Comprehensive Estate Planning',
    icon: ScrollText,
    description: 'Protecting your legacy with strategic, personalized legal and financial guidance.',
    details: [
      'Will and trust package development',
      'Asset protection strategies',
      'Inheritance tax optimization',
      'Family wealth transition planning'
    ],
    stats: [
      { label: 'Years of Experience', value: '15+' },
      { label: 'Estates Managed', value: '500+' }
    ]
  },
  {
    id: 'familySolutions',
    title: 'Collaborative Family Transition Support',
    icon: Users,
    description: 'Holistic approach involving family members to ensure smooth, stress-free transitions.',
    details: [
      'Family consultation workshops',
      'Conflict resolution strategies',
      'Emotional support resources',
      'Comprehensive communication planning'
    ],
    stats: [
      { label: 'Family Satisfaction', value: '95%' },
      { label: 'Conflict Resolution Rate', value: '92%' }
    ]
  }
];

export function ServicesPage() {
  const [selectedService, setSelectedService] = useState(serviceCategories[0]);

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <SectionTitle>Navigating Your Senior Living Journey</SectionTitle>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Comprehensive, compassionate services designed to transform your retirement transition into a seamless, empowering experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              className={`
                p-6 rounded-lg shadow-lg cursor-pointer transition-all
                ${selectedService.id === category.id 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-white hover:bg-primary-50'}
              `}
              onClick={() => setSelectedService(category)}
            >
              <div className="flex items-center mb-4">
                <category.icon 
                  className={`w-10 h-10 mr-4 
                    ${selectedService.id === category.id 
                      ? 'text-white' 
                      : 'text-primary-500'}
                  `} 
                />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <p className={`
                text-sm 
                ${selectedService.id === category.id 
                  ? 'text-white opacity-80' 
                  : 'text-gray-600'}
              `}>
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-lg shadow-xl p-12"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary-600">
                  {selectedService.title}
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  {selectedService.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {selectedService.details.map((detail, index) => (
                    <li 
                      key={index} 
                      className="flex items-center text-gray-600"
                    >
                      <Shield className="w-5 h-5 mr-3 text-primary-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-2 gap-4">
                  {selectedService.stats.map((stat) => (
                    <div 
                      key={stat.label} 
                      className="bg-primary-50 p-4 rounded-lg text-center"
                    >
                      <div className="text-3xl font-bold text-primary-600">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2, 
                    repeatType: 'reverse' 
                  }}
                  className="w-full h-96 bg-primary-100 rounded-lg flex items-center justify-center"
                >
                  <p className="text-primary-600 text-xl font-semibold">
                    Personalized Consultation Visual
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </div>
  );
}
