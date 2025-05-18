
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <Activity className="text-dental-primary" size={24} />
              <span>DentalCare</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Providing quality dental care with a gentle touch. Your smile is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-dental-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-dental-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-dental-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-dental-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-dental-primary transition-colors">
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-dental-primary transition-colors">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-dental-primary transition-colors">
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-dental-primary transition-colors">
                  Dental Implants
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-dental-primary mt-1" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-dental-primary mt-1" />
                <span className="text-gray-400">info@dentalcare.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-dental-primary mt-1" />
                <span className="text-gray-400">123 Dental Street, Medical City, 10001</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 text-dental-primary mt-1" />
                <span className="text-gray-400">Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 text-sm text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} DentalCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
