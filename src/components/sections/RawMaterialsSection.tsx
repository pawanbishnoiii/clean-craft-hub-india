
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const RawMaterialsSection: React.FC = () => {
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

  const rawMaterials = [
    { name: "AOS", description: "Alpha Olefin Sulfonate, a primary surfactant used in cleaning products" },
    { name: "SBT", description: "Sodium Benzene Sulfonate, provides excellent cleaning power" },
    { name: "Fomax", description: "Foaming agent that creates rich lather in cleaning solutions" },
    { name: "DN", description: "Dinitro compounds used in specialized cleaning formulations" },
    { name: "SS", description: "Sodium Silicate, provides alkalinity and corrosion inhibition" },
    { name: "Crude", description: "Base raw material for various cleaning product components" },
    { name: "Salt", description: "Sodium Chloride, used as a thickening agent and stabilizer" },
    { name: "Bicarbonate", description: "Sodium Bicarbonate, provides gentle abrasive cleaning power" },
    { name: "Lye", description: "Sodium Hydroxide, adjusts pH and aids in saponification" },
    { name: "Dolo", description: "Dolomite powder, used as a mild abrasive in some cleaners" },
    { name: "Dana", description: "Granular base material for powdered detergent formulations" },
    { name: "SLD", description: "Sodium Lauryl Sulfate, a powerful surfactant and foaming agent" },
    { name: "Perfume", description: "Fragrance compounds that give products their distinctive scents" }
  ];

  return (
    <section id="raw-materials" className="section bg-gray-50 py-20">
      <div className="content-container">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Premium <span className="gradient-text">Raw Materials</span>
          </h2>
          <p className="text-gray-600">
            We use only the highest quality raw materials to ensure superior cleaning performance and consistent product quality. Our ingredient selection process is rigorous to maintain our high standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {rawMaterials.map((material, index) => (
            <div 
              key={index}
              className="reveal-on-scroll"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Card className="h-full hover:border-brand-blue transition-all duration-300">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-1 text-brand-blue">{material.name}</h3>
                  <p className="text-gray-600 text-sm">{material.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold mb-4">Quality Ingredients for Superior Results</h3>
              <p className="text-gray-600 mb-4">
                At KH Trading Company, we believe that the quality of raw materials directly impacts the effectiveness of our cleaning products. We source our ingredients from trusted suppliers who meet our stringent quality standards.
              </p>
              <p className="text-gray-600">
                Our chemical experts carefully select and test each raw material to ensure it meets our specifications before it enters our production process. This commitment to quality ensures that our products deliver consistent, superior cleaning performance every time.
              </p>
            </div>
            <div className="lg:col-span-2 flex justify-center items-center">
              <div className="relative w-full h-56 lg:h-full">
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-brand-blue/10 rounded-full"></div>
                <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-brand-green/10 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Raw Materials for Cleaning Products" 
                  className="w-full h-full object-cover rounded-lg shadow relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RawMaterialsSection;
