
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Manufacturing", href: "#manufacturing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="content-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand-blue">KH</span>
              <span className="ml-1 text-xl font-medium">Trading Co.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="ml-4 bg-brand-blue hover:bg-brand-blue/90 text-white">
              <Phone size={18} className="mr-2" /> Get Quote
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 rounded-md"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-down">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-gray-700 hover:text-brand-blue font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="mt-2 bg-brand-blue hover:bg-brand-blue/90 text-white">
                <Phone size={18} className="mr-2" /> Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
