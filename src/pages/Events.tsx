
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Mountain, Heart, Users, Mic } from 'lucide-react';

const Events = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({
    treks: 0,
    disha: 0,
    membership: 0,
    interact: 0,
  });

  const eventSections = [
    {
      id: 'treks',
      title: 'Treks & Adventures',
      icon: Mountain,
      description: 'Embark on thrilling adventures across Karnataka and beyond, designed specifically for MAHE students.',
      details: [
        'Weekend treks to Western Ghats destinations',
        'Multi-day expeditions to Himalayas and other ranges',
        'Rock climbing and rappelling adventures',
        'Professional guides and safety equipment provided',
        'Special discounts for Red-X members',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
          alt: 'Mountain trek with Red-X team',
        },
        {
          src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
          alt: 'Adventure group photo',
        },
        {
          src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop',
          alt: 'Trekking equipment and preparation',
        },
        {
          src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=400&fit=crop',
          alt: 'Mountain landscape adventure',
        },
        {
          src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop',
          alt: 'Team conquering peaks',
        },
      ],
    },
    {
      id: 'disha',
      title: 'DISHA',
      icon: Heart,
      description: 'Our social service wing dedicated to community development through meaningful drives and NGO collaborations.',
      details: [
        'Monthly donation drives for underprivileged communities',
        'Educational awareness campaigns in local schools',
        'Environmental conservation initiatives',
        'Collaboration with local NGOs and charities',
        'Health and hygiene awareness programs',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop',
          alt: 'DISHA community service activity',
        },
        {
          src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop',
          alt: 'Educational outreach program',
        },
        {
          src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
          alt: 'Team volunteering together',
        },
        {
          src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
          alt: 'Technology for social good',
        },
        {
          src: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=600&h=400&fit=crop',
          alt: 'Community engagement activities',
        },
      ],
    },
    {
      id: 'membership',
      title: 'Membership Drive',
      icon: Users,
      description: 'Our annual 5-day promotional event to welcome new members into the Red-X family.',
      details: [
        'Interactive stalls across MIT Manipal campus',
        'Live demonstrations of club activities',
        'Meet and greet with current members',
        'Special launch offers and exclusive goodies',
        'Registration assistance and membership benefits showcase',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
          alt: 'Membership drive stall setup',
        },
        {
          src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
          alt: 'Student interaction at membership drive',
        },
        {
          src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
          alt: 'Registration and information desk',
        },
        {
          src: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=600&h=400&fit=crop',
          alt: 'Campus engagement activities',
        },
        {
          src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop',
          alt: 'New member welcome session',
        },
      ],
    },
    {
      id: 'interact',
      title: 'Interact',
      icon: Mic,
      description: 'Online speaker series featuring inspiring alumni, successful creators, and thought leaders.',
      details: [
        'Online sessions with industry experts',
        'Alumni success stories and career guidance',
        'Creative workshops and skill-building sessions',
        'Interactive Q&A with celebrities',
        'Exclusive access for Red-X members',
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop',
          alt: 'Online speaker session',
        },
        {
          src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
          alt: 'Virtual interaction session',
        },
        {
          src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=400&fit=crop',
          alt: 'Audience engagement during online event',
        },
        {
          src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
          alt: 'Technology and innovation talks',
        },
        {
          src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
          alt: 'Creative digital presentations',
        },
      ],
    },
  ];

  const nextImage = (sectionId: string) => {
    const section = eventSections.find(s => s.id === sectionId);
    if (section) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [sectionId]: (prev[sectionId as keyof typeof prev] + 1) % section.images.length
      }));
    }
  };

  const prevImage = (sectionId: string) => {
    const section = eventSections.find(s => s.id === sectionId);
    if (section) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [sectionId]: (prev[sectionId as keyof typeof prev] - 1 + section.images.length) % section.images.length
      }));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 redx-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Events</h1>
            <p className="text-xl md:text-2xl text-red-100 mb-4">
              Adventures, Service, Growth & Connection
            </p>
            <p className="text-lg text-red-200 max-w-2xl mx-auto">
              Discover the diverse range of activities that make Red-X the most dynamic 
              socio-adventure club at MIT Manipal.
            </p>
          </div>
        </div>
      </section>

      {/* Event Sections */}
      <div className="py-16">
        {eventSections.map((section, index) => (
          <section
            key={section.id}
            className={`py-16 ${index % 2 === 0 ? 'bg-gray-900' : 'bg-black'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="animate-fade-in-up">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 redx-gradient rounded-xl flex items-center justify-center mr-4 glow-effect">
                        <section.icon className="text-white" size={24} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {section.title}
                      </h2>
                    </div>
                    
                    <p className="text-xl text-red-300 mb-8 leading-relaxed">
                      {section.description}
                    </p>
                    
                    <ul className="space-y-4">
                      {section.details.map((detail, detailIndex) => (
                        <li 
                          key={detailIndex} 
                          className="group flex items-start space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-red-950/20 hover:border-l-4 hover:border-red-500 hover:translate-x-2 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer relative overflow-hidden"
                          style={{
                            transitionDelay: `${detailIndex * 50}ms`
                          }}
                        >
                          {/* Animated background gradient on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/10 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* Animated dot */}
                          <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0 transition-all duration-300 group-hover:bg-red-400 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-red-400/50 relative z-10">
                            <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-0 group-hover:opacity-75"></div>
                          </div>
                          
                          {/* Text with enhanced hover effects */}
                          <span className="text-gray-300 text-lg group-hover:text-white transition-all duration-300 group-hover:font-medium relative z-10 group-hover:drop-shadow-lg">
                            {detail}
                          </span>
                          
                          {/* Subtle particle effect */}
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2">
                            <div className="w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image Carousel */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="relative h-80 rounded-2xl overflow-hidden border border-red-600/30 glow-effect">
                      {section.images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className={`absolute inset-0 transition-opacity duration-500 ${
                            imageIndex === currentImageIndex[section.id as keyof typeof currentImageIndex]
                              ? 'opacity-100'
                              : 'opacity-0'
                          }`}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>

                    {/* Carousel Controls */}
                    <button
                      onClick={() => prevImage(section.id)}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600/90 hover:bg-red-600 p-3 rounded-full transition-colors glow-effect"
                    >
                      <ChevronLeft size={24} className="text-white" />
                    </button>
                    <button
                      onClick={() => nextImage(section.id)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600/90 hover:bg-red-600 p-3 rounded-full transition-colors glow-effect"
                    >
                      <ChevronRight size={24} className="text-white" />
                    </button>

                    {/* Dots indicator */}
                    <div className="flex justify-center mt-6 space-x-2">
                      {section.images.map((_, imageIndex) => (
                        <button
                          key={imageIndex}
                          onClick={() => setCurrentImageIndex(prev => ({
                            ...prev,
                            [section.id]: imageIndex
                          }))}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            imageIndex === currentImageIndex[section.id as keyof typeof currentImageIndex]
                              ? 'bg-red-600'
                              : 'bg-gray-600 hover:bg-red-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Join Events CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-800 border border-red-600/30 p-12 rounded-2xl glow-effect">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Adventures?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't miss out on the amazing experiences Red-X has to offer. 
              Get your membership and be part of every adventure and service opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/membership"
                className="inline-block redx-gradient text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform glow-effect"
              >
                Get Membership
              </a>
              <a
                href="mailto:redxmanipal@gmail.com?subject=Event Inquiry"
                className="inline-block bg-transparent border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
