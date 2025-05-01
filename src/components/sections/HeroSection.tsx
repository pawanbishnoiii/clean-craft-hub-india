
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToNextSection = () => {
    const element = document.getElementById("products");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-factory-machinery-in-motion-1081/1080p.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="content-container relative z-20 text-white pt-16">
        <div className="max-w-3xl mx-auto md:mx-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 reveal-on-scroll animate-pulse-slow">
            Leading Manufacturer of <span className="text-brand-blue">Premium Cleaning Products</span>
          </h1>
          <p className="text-xl mb-8 text-gray-200 reveal-on-scroll animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            KH Trading Company delivers high-quality cleaning solutions with third-party manufacturing services. From detergent powders to specialty cleaners, we create products that shine.
          </p>
          <div className="flex flex-wrap gap-4 reveal-on-scroll animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white transition-transform hover:scale-105 duration-300">
              Our Products <ChevronRight className="ml-2" size={16} />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-transform hover:scale-105 duration-300">
              Request Quote
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={scrollToNextSection}
          className="rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110"
        >
          <ArrowDown size={20} />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
