
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import FAQ from '@/components/FAQ';

const servicesFAQs = [
  {
    question: "How much do dental cleanings cost?",
    answer: "The cost of dental cleanings varies depending on your specific needs and whether you have insurance. Basic cleanings typically range from $75-$200. We're happy to provide a detailed estimate before your appointment and discuss payment options."
  },
  {
    question: "Is teeth whitening painful?",
    answer: "Most patients experience little to no discomfort during professional teeth whitening. Some may experience temporary sensitivity afterward, but this typically resolves quickly. We take precautions to minimize sensitivity and can recommend products to help if needed."
  },
  {
    question: "How long do dental implants last?",
    answer: "With proper care and maintenance, dental implants can last a lifetime. The crown attached to the implant may need replacement after 10-15 years due to normal wear and tear, but the titanium implant itself typically integrates permanently with your jawbone."
  },
  {
    question: "Are braces only for children and teenagers?",
    answer: "No, braces and orthodontic treatment are effective for patients of all ages. Many adults choose to straighten their teeth later in life. We offer various orthodontic options, including traditional braces and clear aligners, that are suitable for adult patients."
  },
];

// Service data
const services = [
  {
    id: 1,
    title: "Preventive Dentistry",
    shortDescription: "Regular check-ups and cleanings to maintain oral health and prevent dental issues.",
    fullDescription: "Our preventive dentistry services focus on keeping your teeth and gums healthy to avoid dental problems before they start. This includes comprehensive exams, professional cleanings, fluoride treatments, dental sealants, and customized oral hygiene instructions. Regular preventive care helps catch issues early when they're easier and less expensive to treat.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
    benefits: [
      "Early detection of dental problems",
      "Removal of plaque and tartar build-up",
      "Prevention of gum disease",
      "Oral cancer screenings",
      "Personalized oral hygiene guidance"
    ]
  },
  {
    id: 2,
    title: "Cosmetic Dentistry",
    shortDescription: "Enhance the appearance of your smile with our range of cosmetic dental procedures.",
    fullDescription: "Our cosmetic dentistry services are designed to improve the appearance of your teeth and give you a smile you'll love to show off. From simple treatments like professional whitening to more comprehensive procedures such as veneers or complete smile makeovers, we can help you achieve the beautiful, confident smile you deserve.",
    image: "https://images.unsplash.com/photo-1581712038518-13e54d71c66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
    benefits: [
      "Professional teeth whitening",
      "Porcelain veneers",
      "Dental bonding and recontouring",
      "Smile makeovers",
      "Composite fillings"
    ]
  },
  {
    id: 3,
    title: "Restorative Dentistry",
    shortDescription: "Repair damaged teeth and replace missing teeth to restore function and aesthetics.",
    fullDescription: "Our restorative dentistry services focus on repairing or replacing damaged or missing teeth to restore both function and appearance. Whether you need a simple filling, a crown to protect a weakened tooth, or replacement options for missing teeth, our skilled team uses the latest techniques and materials to provide durable, natural-looking results.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1970&q=80",
    benefits: [
      "Tooth-colored fillings",
      "Crowns and bridges",
      "Full and partial dentures",
      "Inlays and onlays",
      "Root canal therapy"
    ]
  },
  {
    id: 4,
    title: "Dental Implants",
    shortDescription: "Permanent, natural-looking replacements for missing teeth.",
    fullDescription: "Dental implants are the gold standard for replacing missing teeth. These titanium posts are surgically placed in your jawbone and function as artificial tooth roots, providing a strong foundation for fixed or removable replacement teeth. Implants look, feel, and function like your natural teeth, allowing you to eat, speak, and smile with confidence.",
    image: "https://images.unsplash.com/photo-1563699700-638e8da63fd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2001&q=80",
    benefits: [
      "Permanent solution for tooth loss",
      "Prevents bone loss in the jaw",
      "No slipping or discomfort",
      "No need to modify adjacent teeth",
      "Easy maintenance"
    ]
  },
  {
    id: 5,
    title: "Orthodontics",
    shortDescription: "Straighten misaligned teeth for a beautiful smile and improved oral health.",
    fullDescription: "Our orthodontic services help patients of all ages achieve straighter, properly aligned teeth for both aesthetic appeal and improved function. We offer traditional braces as well as modern alternatives like clear aligners. Properly aligned teeth are not only more attractive but also easier to clean, reducing your risk of decay and gum disease.",
    image: "https://images.unsplash.com/photo-1547061155-4d0c73e8e989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1921&q=80",
    benefits: [
      "Traditional metal braces",
      "Clear/ceramic braces",
      "Invisible aligners",
      "Retainers",
      "Early intervention for children"
    ]
  },
  {
    id: 6,
    title: "Pediatric Dentistry",
    shortDescription: "Specialized dental care for children in a comfortable, child-friendly environment.",
    fullDescription: "Our pediatric dentistry services are specifically designed to meet the unique dental needs of children from infancy through adolescence. We focus on creating positive dental experiences in a kid-friendly environment to help children develop good oral hygiene habits and maintain healthy smiles as they grow. Our gentle approach helps minimize anxiety and build confidence in young patients.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    benefits: [
      "Child-friendly atmosphere",
      "Gentle cleaning and exams",
      "Fluoride treatments",
      "Dental sealants",
      "Early orthodontic assessment"
    ]
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const openDialog = (serviceId: number) => {
    setSelectedService(serviceId);
  };

  const closeDialog = () => {
    setSelectedService(null);
  };

  const getServiceById = (id: number) => {
    return services.find(service => service.id === id);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Dental Services</h1>
            <p className="text-lg text-gray-700 mb-6">
              At DentalCare, we offer a comprehensive range of dental services to address all your oral health needs.
              From routine cleanings to advanced cosmetic and restorative procedures, our team has the expertise to
              help you achieve and maintain a healthy, beautiful smile.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:border-dental-primary border border-transparent"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Activity className="h-6 w-6 text-dental-primary mr-2" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <Button
                    onClick={() => openDialog(service.id)}
                    className="w-full bg-dental-primary hover:bg-dental-secondary text-white"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Dialog */}
      {selectedService && (
        <Dialog open={selectedService !== null} onOpenChange={closeDialog}>
          <DialogContent className="sm:max-w-xl">
            {selectedService && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-dental-primary">
                    {getServiceById(selectedService)?.title}
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-base text-gray-700">
                  <img 
                    src={getServiceById(selectedService)?.image} 
                    alt={getServiceById(selectedService)?.title} 
                    className="w-full h-56 object-cover rounded-md mb-4"
                  />
                  <p className="mb-4">{getServiceById(selectedService)?.fullDescription}</p>
                  
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    {getServiceById(selectedService)?.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 text-center">
                    <Button
                      asChild
                      className="bg-dental-primary hover:bg-dental-secondary text-white"
                    >
                      <Link to="/contact">Book This Service</Link>
                    </Button>
                  </div>
                </DialogDescription>
              </>
            )}
          </DialogContent>
        </Dialog>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-dental-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Appointment?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation for any of our services.
            Our team is ready to help you achieve optimal oral health and a beautiful smile.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-dental-primary hover:bg-gray-100 font-medium px-8"
          >
            <Link to="/contact">Book Your Appointment</Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={servicesFAQs} />
    </>
  );
};

export default Services;
