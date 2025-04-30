
import React, { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Archive, 
  Droplets, 
  FlaskConical, 
  Package, 
  ShoppingBag, 
  Car, 
  ShoppingCart 
} from "lucide-react";
import Bottle from "@/components/ui/icons/Bottle";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ icon, title, description }) => (
  <Card className="border border-gray-200 hover:border-brand-blue transition-all duration-300 hover:shadow-md group overflow-hidden">
    <CardHeader className="pb-3">
      <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-gray-600">{description}</CardDescription>
    </CardContent>
  </Card>
);

const ProductsSection: React.FC = () => {
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

  const products = [
    {
      icon: <Archive size={24} />,
      title: "Detergent Powder",
      description: "High-quality detergent powder that effectively cleans and protects fabrics."
    },
    {
      icon: <Droplets size={24} />,
      title: "Toilet Cleaner",
      description: "Powerful toilet cleaning solution that removes tough stains and kills germs."
    },
    {
      icon: <Archive size={24} />,
      title: "Glass Cleaner",
      description: "Crystal clear glass cleaner that leaves windows and mirrors spotless."
    },
    {
      icon: <Package size={24} />,
      title: "Dishwash Liquid",
      description: "Effective dish cleaning liquid that cuts through grease and food residue."
    },
    {
      icon: <Bottle size={24} />,
      title: "Hand Wash",
      description: "Gentle hand wash formula that kills germs while being kind to your skin."
    },
    {
      icon: <Package size={24} />,
      title: "Dishwash Tub",
      description: "Specialized cleaner for dishwashing machines and tubs."
    },
    {
      icon: <Car size={24} />,
      title: "Car & Tyre Polish",
      description: "Premium polish solutions for cars and tyres that restore shine and protection."
    },
    {
      icon: <ShoppingBag size={24} />,
      title: "Laundry Wash",
      description: "Specially formulated wash for laundry that removes tough stains."
    }
  ];

  return (
    <section id="products" className="section bg-gray-50 py-20">
      <div className="content-container">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Premium <span className="gradient-text">Cleaning Products</span>
          </h2>
          <p className="text-gray-600">
            We manufacture a wide range of high-quality cleaning products using the finest raw materials. Our products are designed to deliver superior cleaning performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="reveal-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard
                icon={product.icon}
                title={product.title}
                description={product.description}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal-on-scroll">
          <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white">
            <ShoppingCart className="mr-2" size={18} />
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
