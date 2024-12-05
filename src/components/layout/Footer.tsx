import React from 'react';
import { Container } from './Container';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Suzanne Austin</h3>
            <p className="text-gray-400">
              SRES Certified Real Estate Agent at Southern Nest Realty Inc, serving Fort Mill and surrounding areas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#listings" className="text-gray-400 hover:text-white">Listings</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                (704) 819-0620
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                suzanne.austin@southernnest.com
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                Southern Nest Realty Inc
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Areas Served</h4>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-gray-400">Tradesville, SC</p>
              <p className="text-gray-400">Buford, SC</p>
              <p className="text-gray-400">Lancaster, SC</p>
              <p className="text-gray-400">Elgin, SC</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>MLS Membership ID: FAR_2019140415F9</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Suzanne Austin - Southern Nest Realty Inc. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}