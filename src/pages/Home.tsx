
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Calendar, Phone, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQ from '@/components/FAQ';

const HomeFAQs = [
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend visiting the dentist for a check-up and cleaning at least twice a year (every 6 months). Regular dental visits help catch problems early and maintain good oral health."
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "If you experience a dental emergency such as severe pain, a knocked-out tooth, or injury to your mouth, contact our office immediately. We offer emergency dental care and can provide guidance over the phone until you arrive."
  },
  {
    question: "Do you accept dental insurance?",
    answer: "Yes, we accept most major dental insurance plans. Our staff will work with you to maximize your benefits and provide an estimate of your coverage before treatment."
  },
  {
    question: "Is teeth whitening safe?",
    answer: "Yes, professional teeth whitening performed by our dental team is safe and effective. We offer both in-office and take-home whitening options to help you achieve a brighter smile."
  }
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Your Best Smile Begins With{" "}
                <span className="text-dental-primary">Our Care</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Experience world-class dental care in a comfortable and relaxing environment. 
                Our team of skilled professionals is dedicated to providing you with the 
                highest quality dental services.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-dental-primary hover:bg-dental-secondary text-white font-medium px-8 py-6 rounded-full"
                >
                  <Link to="/contact">Book Appointment</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-dental-primary text-dental-primary hover:bg-dental-primary hover:text-white font-medium px-8 py-6 rounded-full"
                >
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Dental Care" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Opening Hours */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-dental-primary hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Clock className="h-10 w-10 text-dental-primary mr-3" />
                <h3 className="text-xl font-semibold">Opening Hours</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>

            {/* Book Appointment */}
            <div className="bg-dental-primary text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Calendar className="h-10 w-10 mr-3" />
                <h3 className="text-xl font-semibold">Book Appointment</h3>
              </div>
              <p className="mb-4">
                Schedule your dental appointment today for a healthier, brighter smile.
              </p>
              <Button
                asChild
                variant="secondary"
                className="w-full bg-white text-dental-primary hover:bg-gray-100"
              >
                <Link to="/contact">Book Now</Link>
              </Button>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-dental-primary hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Phone className="h-10 w-10 text-dental-primary mr-3" />
                <h3 className="text-xl font-semibold">Emergency Care</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Dental emergency? Don't worry, we're here to help you.
              </p>
              <p className="font-bold text-xl">(123) 456-7890</p>
              <p className="text-gray-500">Available 24/7 for emergencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                alt="Dental Clinic" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl font-bold mb-4">Welcome to DentalCare</h2>
              <p className="text-gray-700 mb-4">
                At DentalCare, we believe in providing compassionate, comprehensive dental care 
                for patients of all ages. Our modern clinic is equipped with the latest 
                technology to ensure you receive the best treatment possible.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of highly skilled dentists and dental professionals are committed 
                to your comfort and satisfaction. We focus on preventive care to help you 
                maintain optimal oral health and a beautiful smile for life.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-dental-primary mr-2" />
                  <span>State-of-the-art technology</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-dental-primary mr-2" />
                  <span>Personalized care plans</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-dental-primary mr-2" />
                  <span>Friendly and experienced staff</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-dental-primary mr-2" />
                  <span>Comfortable, relaxing environment</span>
                </li>
              </ul>
              <Button
                asChild
                className="bg-dental-primary hover:bg-dental-secondary text-white"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We provide a wide range of dental services to keep your smile healthy and beautiful.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            {[
              {
                icon: <Activity className="h-12 w-12 text-dental-primary" />,
                title: "General Dentistry",
                description: "Comprehensive care including check-ups, cleanings, fillings, and preventive treatments.",
              },
              {
                icon: <Activity className="h-12 w-12 text-dental-primary" />,
                title: "Cosmetic Dentistry",
                description: "Enhance your smile with teeth whitening, veneers, bonding, and more.",
              },
              {
                icon: <Activity className="h-12 w-12 text-dental-primary" />,
                title: "Orthodontics",
                description: "Straighten your teeth with braces, aligners, and other orthodontic treatments.",
              },
              {
                icon: <Activity className="h-12 w-12 text-dental-primary" />,
                title: "Dental Implants",
                description: "Replace missing teeth with natural-looking, functional dental implants.",
              },
              {
                icon: <Activity className="h-12 w-12 text-dental-primary" />,
                title: "Pediatric Dentistry",
                description: "Gentle, comprehensive dental care specially designed for children.",
              },
              {
                icon: <Activity className="h-12 w-12 text-dental-primary" />,
                title: "Emergency Dentistry",
                description: "Fast, effective care for dental emergencies to relieve pain and prevent damage.",
              },
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all hover:border-dental-primary"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-dental-primary hover:text-dental-secondary font-medium flex items-center"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-dental-primary hover:bg-dental-secondary text-white font-medium"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-dental-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Visit?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to book your appointment and take the first step towards a healthier smile.
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
      <FAQ faqs={HomeFAQs} />
    </>
  );
};

export default Home;
