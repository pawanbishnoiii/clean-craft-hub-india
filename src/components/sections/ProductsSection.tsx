
import React, { useEffect } from "react";
import { 
  Archive, 
  Droplets, 
  FlaskConical, 
  Package, 
  ShoppingBag, 
  Car, 
  ShoppingCart,
  MessageSquare
} from "lucide-react";
import Bottle from "@/components/ui/icons/Bottle";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/products/ProductCard";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Our Premium <span className="gradient-text">Cleaning Products</span>
          </h2>
          <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            We manufacture a wide range of high-quality cleaning products using the finest raw materials. Our products are designed to deliver superior cleaning performance.
          </p>
        </div>

        {/* Featured Product Carousel with GIF */}
        <div className="mb-16 reveal-on-scroll">
          <h3 className="text-2xl font-semibold mb-6 text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>Featured Products</h3>
          <div className="rounded-lg overflow-hidden shadow-xl mb-8 hover:shadow-2xl transition-all duration-500 animate-float">
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjZsNWUzdWFhbWxkdTAwa29odGlnOGg3dXJ5NXZqb2ZqOGt1OG5jaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0GqBbSNxwrSYfkVW/giphy.gif" 
              alt="Cleaning Products Manufacturing Process" 
              className="w-full h-auto"
            />
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              {products.slice(0, 4).map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                    <ProductCard
                      icon={product.icon}
                      title={product.title}
                      description={product.description}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-end gap-2 mt-4">
              <CarouselPrevious className="relative static hover:scale-110 transition-transform duration-300" />
              <CarouselNext className="relative static hover:scale-110 transition-transform duration-300" />
            </div>
          </Carousel>
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
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white w-full md:w-auto transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <ShoppingCart className="mr-2" size={18} />
              View All Products
            </Button>
            <a 
              href="https://wa.me/917229917890?text=Hello! I'm interested in your cleaning products. Could you provide more information?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white w-full transition-all duration-300 hover:scale-105">
                <MessageSquare className="mr-2" size={18} />
                Contact on WhatsApp
              </Button>
            </a>
          </div>
          
          <p className="mt-8 text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <span className="font-semibold">Low budget options available!</span> - Contact us to discuss your requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
