import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, Package, FlaskConical, ShieldCheck, Handshake, TrendingUp } from "lucide-react";

interface ProcessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ icon, title, description, step }) => (
  <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
    <CardContent className="p-6">
      <div className="flex items-start">
        <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 mr-4">
          {icon}
        </div>
        <div>
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded-full mb-2">Step {step}</span>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ManufacturingSection: React.FC = () => {
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

  const processes = [
    {
      icon: <Handshake size={24} />,
      title: "Client Consultation",
      description: "We start by understanding your specific needs and requirements for product development.",
      step: 1
    },
    {
      icon: <FlaskConical size={24} />,
      title: "Formula Development",
      description: "Our experts develop and test product formulations to ensure optimal performance.",
      step: 2
    },
    {
      icon: <Factory size={24} />,
      title: "Production Process",
      description: "Using state-of-the-art equipment, we manufacture products following strict quality protocols.",
      step: 3
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Quality Testing",
      description: "Rigorous quality checks are performed to ensure all products meet our high standards.",
      step: 4
    },
    {
      icon: <Package size={24} />,
      title: "Packaging & Labeling",
      description: "Products are packaged and labeled according to your brand requirements and specifications.",
      step: 5
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Delivery & Support",
      description: "We handle efficient delivery and provide ongoing support for all our manufactured products.",
      step: 6
    }
  ];

  return (
    <section id="manufacturing" className="section bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="content-container">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Manufacturing Process</span>
          </h2>
          <p className="text-gray-600">
            We follow a rigorous manufacturing process to ensure that all our cleaning products meet the highest quality standards. Our state-of-the-art facility is equipped with modern machinery and follows strict quality control protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {processes.map((process, index) => (
            <div 
              key={index} 
              className="reveal-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProcessCard 
                icon={process.icon}
                title={process.title}
                description={process.description}
                step={process.step}
              />
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Third-Party Manufacturing Services</h3>
              <p className="text-gray-600 mb-6">
                We offer comprehensive third-party manufacturing services for cleaning products. Partner with us to leverage our expertise, facilities, and efficient processes to bring your products to market quickly.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">✓</span>
                  <span>Custom formula development</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">✓</span>
                  <span>Private labeling options</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">✓</span>
                  <span>Flexible production volumes</span>
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">✓</span>
                  <span>Customized packaging solutions</span>
                </li>
              </ul>
              <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white">
                Request Manufacturing Services
              </Button>
            </div>
            <div className="relative h-64 lg:h-full min-h-[320px]">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-39b51a7a7edb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Manufacturing Facility" 
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;
