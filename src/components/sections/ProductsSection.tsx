
import React, { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { 
  Archive, 
  Droplets, 
  FlaskConical, 
  Package, 
  ShoppingBag, 
  Car, 
  ShoppingCart,
  WhatsApp,
  ExternalLink
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

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ icon, title, description, imageSrc }) => (
  <Card className="border border-gray-200 hover:border-brand-blue transition-all duration-300 hover:shadow-md group overflow-hidden h-full flex flex-col">
    {imageSrc && (
      <div className="relative overflow-hidden h-48">
        <img 
          src={imageSrc} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
    )}
    <CardHeader className="pb-3">
      <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <CardDescription className="text-gray-600">{description}</CardDescription>
    </CardContent>
    <CardFooter className="pt-2 pb-4">
      <a 
        href={`https://wa.me/917229917890?text=Hello! I'm interested in your ${title} product. Could you provide more information?`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full"
      >
        <Button variant="outline" className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300">
          <WhatsApp className="mr-2" size={18} />
          Enquire on WhatsApp
        </Button>
      </a>
    </CardFooter>
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
      description: "High-quality detergent powder that effectively cleans and protects fabrics.",
      imageSrc: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: <Droplets size={24} />,
      title: "Toilet Cleaner",
      description: "Powerful toilet cleaning solution that removes tough stains and kills germs.",
      imageSrc: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: <Archive size={24} />,
      title: "Glass Cleaner",
      description: "Crystal clear glass cleaner that leaves windows and mirrors spotless.",
      imageSrc: "https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: <Package size={24} />,
      title: "Dishwash Liquid",
      description: "Effective dish cleaning liquid that cuts through grease and food residue.",
      imageSrc: "https://images.unsplash.com/photo-1583187855471-95ef255a8c8e?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: <Bottle size={24} />,
      title: "Hand Wash",
      description: "Gentle hand wash formula that kills germs while being kind to your skin.",
      imageSrc: "https://images.unsplash.com/photo-1584473457493-56af76444069?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: <Package size={24} />,
      title: "Dishwash Tub",
      description: "Specialized cleaner for dishwashing machines and tubs.",
      imageSrc: "https://images.unsplash.com/photo-1574616536048-77a2b95ece78?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: <Car size={24} />,
      title: "Car & Tyre Polish",
      description: "Premium polish solutions for cars and tyres that restore shine and protection.",
      imageSrc: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=600&auto=format&fit=crop"
    },
    {
      icon: <ShoppingBag size={24} />,
      title: "Laundry Wash",
      description: "Specially formulated wash for laundry that removes tough stains.",
      imageSrc: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=600&auto=format&fit=crop"
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

        {/* Featured Product Carousel */}
        <div className="mb-16 reveal-on-scroll">
          <h3 className="text-2xl font-semibold mb-6 text-center">Featured Products</h3>
          <Carousel className="w-full">
            <CarouselContent>
              {products.slice(0, 4).map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <ProductCard
                      icon={product.icon}
                      title={product.title}
                      description={product.description}
                      imageSrc={product.imageSrc}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-end gap-2 mt-4">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
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
                imageSrc={product.imageSrc}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal-on-scroll">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white w-full md:w-auto">
              <ShoppingCart className="mr-2" size={18} />
              View All Products
            </Button>
            <a 
              href="https://wa.me/917229917890?text=Hello! I'm interested in your cleaning products. Could you provide more information?" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto"
            >
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white w-full">
                <WhatsApp className="mr-2" size={18} />
                Contact on WhatsApp
              </Button>
            </a>
          </div>
          
          <p className="mt-8 text-sm text-gray-500">
            <span className="font-semibold">Low budget options available!</span> - Contact us to discuss your requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
