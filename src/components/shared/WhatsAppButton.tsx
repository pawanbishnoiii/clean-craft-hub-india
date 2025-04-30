
import React from 'react';
import { WhatsApp } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917229917890?text=Hello! I'm interested in your cleaning products. Could you provide more information?"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center justify-center" 
      aria-label="Contact on WhatsApp"
    >
      <WhatsApp size={28} />
      <span className="ml-2 hidden md:inline">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
