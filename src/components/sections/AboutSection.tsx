
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Award, Clock, Factory, HandHelping, ShieldCheck } from "lucide-react";

const AboutSection = () => {
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

  return (
    <section id="about" className="section py-20">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-10 reveal-on-scroll">
            <h4 className="text-brand-blue font-medium mb-3">About Our Company</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Manufacture Premium Cleaning Solutions Since 2015
            </h2>
            <p className="text-gray-600 mb-6">
              KH Trading Company is a leading manufacturer of cleaning products in India. Founded by Aarif Khan, we have established ourselves as a reliable supplier of high-quality cleaning solutions for both businesses and consumers.
            </p>
            <p className="text-gray-600 mb-6">
              We specialize in manufacturing a wide range of cleaning products including detergent powder, toilet cleaners, glass cleaners, dishwashing liquids, and more. Our commitment to quality and customer satisfaction has made us a preferred choice for third-party manufacturing services.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <ShieldCheck size={20} className="text-brand-blue mr-2" />
                <span className="font-medium">Quality Guaranteed</span>
              </div>
              <div className="flex items-center">
                <Factory size={20} className="text-brand-blue mr-2" />
                <span className="font-medium">Modern Facilities</span>
              </div>
              <div className="flex items-center">
                <HandHelping size={20} className="text-brand-blue mr-2" />
                <span className="font-medium">Expert Support</span>
              </div>
              <div className="flex items-center">
                <Clock size={20} className="text-brand-blue mr-2" />
                <span className="font-medium">Timely Delivery</span>
              </div>
            </div>

            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white">
              Learn More About Us
            </Button>
          </div>

          <div className="relative reveal-on-scroll">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-brand-blue/10 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-brand-green/10 rounded-full"></div>
            <div className="relative overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="KH Trading Company Manufacturing Facility" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Award size={36} className="text-brand-blue mr-3" />
                  <div>
                    <p className="font-bold text-lg">Certified</p>
                    <p className="text-sm text-gray-600">Quality Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
