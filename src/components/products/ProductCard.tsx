
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ icon, title, description }) => (
  <Card className="border border-gray-200 hover:border-brand-blue transition-all duration-300 hover:shadow-md group overflow-hidden h-full flex flex-col hover:scale-105">
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
          <MessageSquare className="mr-2" size={18} />
          Enquire on WhatsApp
        </Button>
      </a>
    </CardFooter>
  </Card>
);

export default ProductCard;
