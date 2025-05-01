import React from "react";
import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 border-b border-brand-blue pb-2">KH Trading Co.</h3>
            <p className="text-gray-300">
              Leading manufacturer and supplier of premium cleaning products in India. We offer 3rd party manufacturing and a wide range of cleaning solutions.
            </p>
            <div className="flex space-x-3 pt-4">
              <a href="#" className="bg-gray-700 hover:bg-brand-blue p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-brand-blue p-2 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/pawanbishnoiii" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-brand-blue p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.indiamart.com/k-h-trading-company/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-brand-blue p-2 rounded-full transition-colors">
                <Globe size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 border-b border-brand-blue pb-2">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">Detergent Powder</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">Toilet Cleaner</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">Glass Cleaner</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">Dishwash Liquid</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">Hand Wash</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">More Products →</a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 border-b border-brand-blue pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#manufacturing" className="text-gray-300 hover:text-white transition-colors">Manufacturing</a>
              </li>
              <li>
                <a href="#raw-materials" className="text-gray-300 hover:text-white transition-colors">Raw Materials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 border-b border-brand-blue pb-2">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="text-brand-blue mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Sri Ganganagar, Rajasthan, SSB Road, Mera Chonk, Ridhi Sidhi Vihar 3</span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-brand-blue mr-3 flex-shrink-0" />
                <a href="tel:+917229917890" className="text-gray-300 hover:text-white transition-colors">+91 722 991 7890</a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-brand-blue mr-3 flex-shrink-0" />
                <a href="mailto:khanaarif09929@gmail.com" className="text-gray-300 hover:text-white transition-colors">khanaarif09929@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Globe size={20} className="text-brand-blue mr-3 flex-shrink-0" />
                <a href="https://www.indiamart.com/k-h-trading-company/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">IndiaMART Profile</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} KH Trading Company. All rights reserved.</p>
          <p className="mt-2 text-xs">Designed and developed with ❤️ by <a href="https://www.instagram.com/pawanbishnoiii" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Pawan Bishnoi</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
