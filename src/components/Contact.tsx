import React from 'react';
import { Container } from './layout/Container';
import { SectionTitle } from './ui/SectionTitle';
import { Button } from './ui/Button';
import { Mail, MessageSquare, Phone, User } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <SectionTitle>Get in Touch</SectionTitle>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-warmer p-8 border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary-600" />
                      Full Name
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary-600" />
                      Phone Number
                    </span>
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary-600" />
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary-600" />
                    Message
                  </span>
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <Button className="w-full justify-center" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}