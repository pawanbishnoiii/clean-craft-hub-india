
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import AboutSection from "@/components/sections/AboutSection";
import ManufacturingSection from "@/components/sections/ManufacturingSection";
import RawMaterialsSection from "@/components/sections/RawMaterialsSection";
import ContactSection from "@/components/sections/ContactSection";
import ScrollToTop from "@/components/shared/ScrollToTop";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.85) {
          el.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <ManufacturingSection />
        <RawMaterialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
