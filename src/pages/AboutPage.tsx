import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Target, 
  Users, 
  Globe, 
  Star, 
  CheckCircle 
} from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';

const professionalMilestones = [
  {
    year: 2005,
    title: 'Real Estate Career Begins',
    description: 'Started professional journey in senior living real estate, focusing on compassionate, personalized service.'
  },
  {
    year: 2010,
    title: 'Specialized Certification',
    description: 'Obtained advanced certification in senior living transitions and estate planning.'
  },
  {
    year: 2015,
    title: 'Community Leadership',
    description: 'Recognized for outstanding contributions to senior community development in Fort Mill and Charlotte regions.'
  },
  {
    year: 2020,
    title: 'Holistic Approach Development',
    description: 'Pioneered comprehensive approach integrating real estate, financial planning, and emotional support.'
  }
];

export function AboutPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/public/suzanne-austin.jpg" 
              alt="Suzanne Croutch" 
              className="rounded-lg shadow-2xl object-cover w-full h-[500px]"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <SectionTitle>Meet Suzanne Croutch</SectionTitle>
            <p className="text-xl text-gray-700 mb-6">
              A dedicated real estate professional with a passion for empowering seniors through personalized, compassionate service.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Award className="w-6 h-6 mr-4 text-primary-500" />
                <span>15+ Years of Specialized Senior Real Estate Experience</span>
              </div>
              <div className="flex items-center">
                <Target className="w-6 h-6 mr-4 text-primary-500" />
                <span>Committed to Transforming Retirement Transitions</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-4 text-primary-500" />
                <span>Serving Fort Mill, Charlotte, and Surrounding Areas</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">
              Professional Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A story of dedication, continuous learning, and commitment to senior community well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {professionalMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-500"
              >
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Globe className="w-12 h-12 mx-auto mb-4 text-primary-500" />
            <h3 className="text-xl font-semibold mb-3">Regional Expertise</h3>
            <p className="text-gray-600">
              Deep understanding of Fort Mill, Charlotte, and surrounding real estate markets.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Star className="w-12 h-12 mx-auto mb-4 text-primary-500" />
            <h3 className="text-xl font-semibold mb-3">Client-First Approach</h3>
            <p className="text-gray-600">
              Personalized strategies that prioritize your comfort, needs, and peace of mind.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <CheckCircle className="w-12 h-12 mx-auto mb-4 text-primary-500" />
            <h3 className="text-xl font-semibold mb-3">Comprehensive Support</h3>
            <p className="text-gray-600">
              Holistic services spanning real estate, estate planning, and emotional guidance.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
