
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Award, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQ from '@/components/FAQ';

const AboutFAQs = [
  {
    question: "How long has DentalCare been in practice?",
    answer: "DentalCare has been providing quality dental services to our community for over 15 years. During this time, we've helped thousands of patients achieve healthier, more beautiful smiles."
  },
  {
    question: "What qualifications do your dentists have?",
    answer: "All our dentists are fully licensed professionals with advanced degrees in dentistry. Many have additional specializations in areas such as orthodontics, pediatric dentistry, and cosmetic procedures. Our team regularly pursues continuing education to stay current with the latest dental techniques and technologies."
  },
  {
    question: "Do you use modern dental technology?",
    answer: "Yes, our clinic is equipped with state-of-the-art dental technology including digital X-rays, intraoral cameras, laser dentistry tools, and CAD/CAM technology for same-day restorations. We continuously invest in the latest advancements to provide you with the best care possible."
  },
  {
    question: "What safety protocols does your clinic follow?",
    answer: "We adhere to strict safety and sterilization protocols that meet or exceed recommendations from health authorities. This includes the use of personal protective equipment, medical-grade sterilization of all instruments, regular sanitizing of treatment areas, and stringent hygiene practices throughout our facility."
  },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About DentalCare</h1>
            <p className="text-lg text-gray-700 mb-6">
              We're passionate about providing exceptional dental care in a comfortable, 
              welcoming environment. Our highly skilled team is committed to helping you 
              achieve optimal oral health and a beautiful smile.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Our Dental Clinic" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2008, DentalCare began with a simple mission: to provide the highest 
                quality dental care in a comfortable, patient-centered environment. Dr. Sarah Johnson 
                established the practice with a vision of combining advanced dental technology with 
                compassionate, personalized care.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, our practice has grown to include a team of specialized dental 
                professionals, each bringing unique expertise to meet all your dental needs under one roof. 
                What hasn't changed is our commitment to treating each patient like family and ensuring 
                everyone who visits us has a positive dental experience.
              </p>
              <p className="text-gray-700">
                Today, we're proud to be a trusted dental provider in our community, serving patients 
                of all ages with comprehensive care that emphasizes both health and aesthetics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="h-16 w-16 text-dental-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to improve the oral health and wellbeing of our community by providing 
              exceptional dental care in a comfortable, welcoming environment. We are committed to:
            </p>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dental-primary mr-3 mt-1" />
                <span>Delivering personalized, patient-centered care that addresses individual needs and concerns</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dental-primary mr-3 mt-1" />
                <span>Utilizing advanced technology and techniques to ensure the best possible outcomes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dental-primary mr-3 mt-1" />
                <span>Creating positive dental experiences that help patients overcome anxiety and fear</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dental-primary mr-3 mt-1" />
                <span>Educating our patients about oral health to empower them in their care decisions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dental-primary mr-3 mt-1" />
                <span>Maintaining the highest standards of safety, sterilization, and clinical excellence</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Meet Our Team</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our experienced team of dental professionals is dedicated to providing you with the best possible care.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Members */}
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Founder & Lead Dentist",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                bio: "Dr. Johnson has over 15 years of experience in general and cosmetic dentistry. She is passionate about creating beautiful smiles and providing gentle care."
              },
              {
                name: "Dr. Michael Chen",
                role: "Orthodontist",
                image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
                bio: "Dr. Chen specializes in orthodontics with particular expertise in invisible aligners and traditional braces for patients of all ages."
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Pediatric Dentist",
                image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
                bio: "With her gentle approach, Dr. Rodriguez helps children develop healthy dental habits while making their visits fun and stress-free."
              },
              {
                name: "Jennifer Lee",
                role: "Dental Hygienist",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
                bio: "Jennifer has been with our team for 8 years and is known for her thorough yet comfortable cleanings and patient education."
              },
              {
                name: "Robert Taylor",
                role: "Dental Assistant",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                bio: "Robert assists our dentists with procedures and helps ensure patients feel comfortable throughout their treatment."
              },
              {
                name: "Lisa Martinez",
                role: "Office Manager",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1988&q=80",
                bio: "Lisa manages our front office, handling scheduling, insurance, and making sure everything runs smoothly for our patients."
              },
            ].map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-dental-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Our Values</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            These core principles guide everything we do at DentalCare.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Award className="h-16 w-16 text-dental-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from the quality of our treatments to 
                the service we provide. We continually invest in education and technology to deliver 
                the best possible care.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Users className="h-16 w-16 text-dental-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Compassion</h3>
              <p className="text-gray-600">
                We understand dental visits can be stressful for many people. Our team approaches 
                every patient with empathy, patience, and genuine care for their comfort and wellbeing.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Heart className="h-16 w-16 text-dental-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We believe in transparent, honest communication with our patients. We'll always 
                explain your treatment options clearly and never recommend unnecessary procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-dental-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the DentalCare Difference</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule your first appointment today and see why our patients trust us with their smiles.
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
      <FAQ faqs={AboutFAQs} />
    </>
  );
};

export default About;
