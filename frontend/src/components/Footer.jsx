import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { mockData } from '../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#2E5A5C] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">LAIR</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">LAIR</h3>
                <p className="text-gray-300 text-sm">Gestion & Patrimoine</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Votre conseiller en gestion de patrimoine indépendant, 
              pour un accompagnement personnalisé et des solutions adaptées à vos projets de vie.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#2E5A5C] mt-0.5" />
                <p className="text-gray-300 text-sm">{mockData.contact.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#2E5A5C]" />
                <a href={`tel:${mockData.contact.phone}`} className="text-gray-300 text-sm hover:text-white transition-colors">
                  {mockData.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#2E5A5C]" />
                <a href={`mailto:${mockData.contact.email}`} className="text-gray-300 text-sm hover:text-white transition-colors">
                  {mockData.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-300 text-sm hover:text-white transition-colors">
                Accueil
              </Link>
              <Link to="/le-cabinet" className="block text-gray-300 text-sm hover:text-white transition-colors">
                Le Cabinet
              </Link>
              <Link to="/contact" className="block text-gray-300 text-sm hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 LAIR Gestion & Patrimoine. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/mentions-legales" className="text-gray-400 text-sm hover:text-white transition-colors">
              Mentions Légales
            </Link>
            <Link to="/politique-confidentialite" className="text-gray-400 text-sm hover:text-white transition-colors">
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;