import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Quote, 
  Star, 
  ArrowLeft, 
  ArrowRight 
} from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: 'Margaret Thompson',
    age: 68,
    location: 'Fort Mill, SC',
    quote: "Suzanne made our retirement home transition seamless. Her compassion and expertise gave us confidence during a challenging time. We couldn't be happier with our new home!",
    rating: 5,
    imageUrl: '/public/suzanne-austin.jpg'
  },
  {
    id: 2,
    name: 'Robert and Linda Garcia',
    age: '72 & 70',
    location: 'Charlotte, NC',
    quote: "As a couple looking to downsize, we were overwhelmed. Suzanne's holistic approach helped us navigate every aspect of our move. Her support went far beyond real estate.",
    rating: 5,
    imageUrl: '/public/hero.jpg'
  },
  {
    id: 3,
    name: 'Harold Williams',
    age: 75,
    location: 'Rock Hill, SC',
    quote: "The estate planning guidance I received was invaluable. Suzanne helped me secure my family's future with professionalism and genuine care.",
    rating: 5,
    imageUrl: '/public/og-image.jpg'
  }
];

export function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      (prev + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <SectionTitle>Client Success Stories</SectionTitle>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Real experiences from seniors who've transformed their lives with personalized support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-2xl overflow-hidden"
            >
              <div 
                className="h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${testimonial.imageUrl})` }}
              />
            </motion.div>

            <motion.div
              key={`content-${testimonial.id}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-12 rounded-lg shadow-xl relative"
            >
              <Quote className="absolute top-4 left-4 w-16 h-16 text-primary-100" />
              
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-6 h-6 mr-1 ${
                      i < testimonial.rating 
                        ? 'text-yellow-400' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>

              <p className="text-2xl text-gray-800 italic mb-8">
                "{testimonial.quote}"
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary-600">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600">
                  Age {testimonial.age} | {testimonial.location}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <button 
                  onClick={prevTestimonial}
                  className="p-3 bg-gray-100 rounded-full hover:bg-primary-50 transition-colors"
                >
                  <ArrowLeft className="w-6 h-6 text-primary-500" />
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === currentTestimonial 
                          ? 'bg-primary-500' 
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextTestimonial}
                  className="p-3 bg-gray-100 rounded-full hover:bg-primary-50 transition-colors"
                >
                  <ArrowRight className="w-6 h-6 text-primary-500" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-16 h-16 rounded-full bg-cover bg-center mr-4"
                  style={{ backgroundImage: `url(${test.imageUrl})` }}
                />
                <div>
                  <h4 className="font-semibold text-primary-600">{test.name}</h4>
                  <p className="text-gray-600">Age {test.age}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{test.quote}"</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
