
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="section py-20">
      <div className="content-container">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-600">
            Contact us to learn more about our products, manufacturing services, or to request a quote. Our team is ready to assist you with any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="reveal-on-scroll">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input id="name" placeholder="Enter your name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>
          </div>

          <div className="space-y-6 reveal-on-scroll">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to us through any of the following channels. We look forward to hearing from you and discussing how we can meet your cleaning product needs.
              </p>

              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mr-4 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Address</h4>
                    <p className="text-gray-600">
                      Sri Ganganagar, Rajasthan, SSB Road, Mera Chonk, Ridhi Sidhi Vihar 3
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mr-4 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone & WhatsApp</h4>
                    <p className="text-gray-600">
                      <a href="tel:+917229917890" className="hover:text-brand-blue">+91 722 991 7890</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mr-4 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:khanaarif09929@gmail.com" className="hover:text-brand-blue">khanaarif09929@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mr-4 flex-shrink-0">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">IndiaMART</h4>
                    <p className="text-gray-600">
                      <a href="https://www.indiamart.com/k-h-trading-company/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue">
                        Visit our IndiaMART Profile
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h4 className="font-bold text-lg mb-2">Business Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
