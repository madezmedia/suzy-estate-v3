import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  User, 
  MessageCircle 
} from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted', formData);
  };

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <SectionTitle>Connect with Suzanne Croutch</SectionTitle>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Your journey to a seamless retirement transition starts with a conversation. Reach out today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-12 rounded-lg shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-primary-600 mb-8">
              Schedule a Consultation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 transition-all"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 transition-all"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 transition-all"
                />
              </div>

              <div className="relative">
                <MessageCircle className="absolute left-3 top-4 text-gray-400" />
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 transition-all"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-3" />
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg flex items-center">
              <div className="bg-primary-50 p-4 rounded-full mr-6">
                <Phone className="w-8 h-8 text-primary-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600">Call Us</h3>
                <p className="text-gray-700">(704) 819-0620</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg flex items-center">
              <div className="bg-primary-50 p-4 rounded-full mr-6">
                <Mail className="w-8 h-8 text-primary-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600">Email</h3>
                <p className="text-gray-700">suesellscarolinas@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg flex items-center">
              <div className="bg-primary-50 p-4 rounded-full mr-6">
                <MapPin className="w-8 h-8 text-primary-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600">Office Location</h3>
                <p className="text-gray-700">16 Biltmore Ave, Asheville, NC 28801</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg flex items-center">
              <div className="bg-primary-50 p-4 rounded-full mr-6">
                <Clock className="w-8 h-8 text-primary-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-600">Hours of Operation</h3>
                <p className="text-gray-700">Monday - Friday: 9am - 5pm</p>
                <p className="text-gray-700">Saturday: By Appointment</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
