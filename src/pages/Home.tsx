
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Users, Mountain, Heart, Calendar, Sparkles, Star, Zap, Compass, Target, Globe, Lightbulb } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop',
      alt: 'Red-X Adventure Trek',
      title: 'Mountain Adventure'
    },
    {
      src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      alt: 'DISHA Social Drive',
      title: 'Community Service'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      alt: 'Red-X Team Meeting',
      title: 'Team Collaboration'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      alt: 'Adventure Group Photo',
      title: 'Epic Adventures'
    },
    {
      src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
      alt: 'Trekking Equipment',
      title: 'Ready for Adventure'
    },
    {
      src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
      alt: 'DISHA Community Work',
      title: 'Making a Difference'
    },
    {
      src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop',
      alt: 'Educational Outreach',
      title: 'Teaching & Learning'
    },
    {
      src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop',
      alt: 'Team Volunteering',
      title: 'Volunteers United'
    },
    {
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
      alt: 'Membership Drive',
      title: 'Growing Together'
    },
    {
      src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop',
      alt: 'Interact Session',
      title: 'Learning from Leaders'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section with Enhanced Background Effects */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Dynamic Animated Background */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {i % 3 === 0 ? (
                <div className="w-4 h-4 bg-red-500 transform rotate-45 animate-pulse"></div>
              ) : i % 3 === 1 ? (
                <div className="w-3 h-3 border-2 border-red-400 rounded-full animate-spin-slow"></div>
              ) : (
                <div className="w-2 h-8 bg-gradient-to-t from-red-600 to-transparent transform rotate-12 animate-pulse"></div>
              )}
            </div>
          ))}
          
          {/* Moving light rays */}
          <div className="absolute inset-0">
            <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent animate-pulse transform rotate-12 left-1/4"></div>
            <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-red-400/20 to-transparent animate-pulse transform -rotate-12 right-1/4" style={{ animationDelay: '2s' }}></div>
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent animate-pulse top-1/3"></div>
          </div>
        </div>
        
        {/* Enhanced Dynamic Gradient Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-70"
            style={{
              background: `
                radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(185, 28, 28, 0.3) 0%, transparent 50%),
                linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 20, 20, 0.9) 100%)
              `,
              transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})`
            }}
          ></div>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-red-800/20 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-red-700/15 via-transparent to-red-900/15 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 text-red-400 animate-bounce">
          <div className="relative">
            <Sparkles size={24} />
            <div className="absolute -inset-2 bg-red-400/20 rounded-full animate-ping"></div>
          </div>
        </div>
        <div className="absolute top-32 right-20 text-red-400 animate-pulse">
          <div className="relative">
            <Star size={32} />
            <div className="absolute -inset-3 bg-red-400/30 rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="absolute bottom-40 left-20 text-red-400 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="relative">
            <Zap size={28} />
            <div className="absolute -inset-2 bg-red-400/25 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="mb-8 relative">
              <img 
                src="/lovable-uploads/551e6dc7-4364-4a06-b31b-fe1f04715716.png" 
                alt="Red-X Logo"
                className="w-40 h-40 mx-auto mb-6 glow-effect animate-pulse-red transform hover:scale-110 transition-all duration-500 hover:rotate-6"
              />
              {/* Enhanced Orbiting Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60">
                <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-spin glow-effect" style={{ top: '10px', left: '50%', transformOrigin: '0 110px' }}></div>
                <div className="absolute w-2 h-2 bg-white rounded-full animate-spin" style={{ top: '15px', left: '50%', transformOrigin: '0 105px', animationDirection: 'reverse', animationDelay: '2s' }}></div>
                <div className="absolute w-2 h-2 bg-red-300 rounded-full animate-spin" style={{ top: '5px', left: '50%', transformOrigin: '0 115px', animationDelay: '1s' }}></div>
              </div>
            </div>
            <p className="text-2xl md:text-4xl text-red-100 mb-8 font-bold tracking-wide">
              Adventure. Service. Community.
            </p>
            <p className="text-lg md:text-xl text-red-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
              MIT Manipal's premier socio-adventure club with dual wings: DISHA for social service 
              and Adventure-X for thrilling expeditions. Join our community of changemakers and adventurers.
            </p>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-12 border-2 border-red-400 rounded-full flex justify-center relative overflow-hidden glow-effect">
            <div className="w-1 h-4 bg-red-400 rounded-full mt-2 animate-pulse"></div>
            <div className="absolute inset-0 bg-red-400/20 animate-ping rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Buttons Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-600/10 via-transparent to-red-600/10"></div>
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="heading-glow text-4xl md:text-5xl font-bold text-white mb-4">Explore Red-X</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full glow-effect"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              to="/partners"
              className="group bg-gray-800 border border-red-600/30 p-8 rounded-2xl hover-lift glow-effect transform hover:scale-105 transition-all duration-500 animate-fade-in-up"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-red-600/20 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-all duration-300 group-hover:animate-pulse">
                  <Users className="text-red-400 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Partners</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Explore our amazing partner network and exclusive benefits</p>
              </div>
            </Link>

            <a
              href="https://forms.google.com/membership"
              target="_blank"
              rel="noopener noreferrer"
              className="group redx-gradient p-8 rounded-2xl hover-lift text-white glow-effect animate-pulse-red transform hover:scale-105 transition-all duration-500 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-700/20 animate-pulse"></div>
              <div className="text-center relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">₹</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Membership ₹349</h3>
                <p className="text-red-100 text-sm leading-relaxed">Join the Red-X family and unlock exclusive privileges</p>
              </div>
            </a>

            <Link
              to="/team"
              className="group bg-gray-800 border border-red-600/30 p-8 rounded-2xl hover-lift glow-effect transform hover:scale-105 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-red-600/20 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-all duration-300 group-hover:animate-pulse">
                  <Heart className="text-red-400 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Meet the Team</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Get to know our amazing leaders and visionaries</p>
              </div>
            </Link>

            <Link
              to="/events"
              className="group bg-gray-800 border border-red-600/30 p-8 rounded-2xl hover-lift glow-effect transform hover:scale-105 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-red-600/20 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-all duration-300 group-hover:animate-pulse">
                  <Calendar className="text-red-400 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Events</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Discover our thrilling adventures & impactful drives</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="heading-glow text-4xl md:text-5xl font-bold text-white mb-6">Our Stories</h2>
            <p className="text-2xl text-red-300 mb-4">Moments that define our journey</p>
            <div className="w-32 h-1 bg-red-600 mx-auto rounded-full glow-effect"></div>
          </div>

          <div className="relative max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden border-2 border-red-600/50 glow-effect shadow-2xl shadow-red-600/25">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                      <div className="w-20 h-1 bg-red-600 rounded-full glow-effect"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Gallery Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600/90 hover:bg-red-600 p-4 rounded-full transition-all duration-300 glow-effect hover:scale-110 hover:rotate-12"
            >
              <ChevronLeft size={28} className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600/90 hover:bg-red-600 p-4 rounded-full transition-all duration-300 glow-effect hover:scale-110 hover:-rotate-12"
            >
              <ChevronRight size={28} className="text-white" />
            </button>

            {/* Enhanced Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-3">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    index === currentSlide 
                      ? 'bg-red-600 scale-125 glow-effect' 
                      : 'bg-gray-600 hover:bg-red-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section - Moved here */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="heading-glow text-5xl md:text-6xl font-bold text-white mb-6">Our Mission</h2>
            <div className="w-32 h-1 bg-red-600 mx-auto rounded-full mb-8 glow-effect"></div>
            <p className="text-2xl md:text-3xl text-red-300 font-bold mb-4">
              Trek with purpose. Act with impact. Belong to something bigger.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gray-800 border-2 border-red-600/40 p-8 rounded-3xl glow-effect hover-lift relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-400"></div>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  At Red-X, we don't just climb peaks or conduct drives — we build a culture where 
                  <span className="text-red-400 font-semibold"> adventure meets compassion</span>. 
                  With our two wings — <span className="text-red-400 font-semibold">Adventure-X</span> and 
                  <span className="text-red-400 font-semibold"> DISHA</span>, we take students beyond 
                  classrooms into spaces that challenge, heal, and inspire.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  We believe in creating <span className="text-red-400 font-semibold">real memories</span> and 
                  <span className="text-red-400 font-semibold"> real change</span> — whether it's a sunrise 
                  at a summit or a smile during a donation drive. Every event, trek, and initiative is a chance 
                  to grow together, give back, and push limits — not just physically, but as a community.
                </p>

                <p className="text-xl text-red-100 font-bold">
                  Red-X isn't just a club. It's a journey — and you're invited.
                </p>
              </div>
            </div>

            {/* Right Content - What We Stand For */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="mb-8">
                <h3 className="heading-glow text-3xl md:text-4xl font-bold text-white mb-8">
                  What We Stand For
                </h3>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-800 border border-red-600/30 p-6 rounded-2xl hover-lift glow-effect group transition-all duration-300 hover:border-red-600/60">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-red-600/20 rounded-full group-hover:bg-red-600 transition-colors duration-300">
                      <Compass className="text-red-400 group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Purposeful Adventure</h4>
                      <p className="text-gray-300">Safe, exciting treks with meaning.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 border border-red-600/30 p-6 rounded-2xl hover-lift glow-effect group transition-all duration-300 hover:border-red-600/60">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-red-600/20 rounded-full group-hover:bg-red-600 transition-colors duration-300">
                      <Heart className="text-red-400 group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Community Impact</h4>
                      <p className="text-gray-300">Uplifting lives through awareness, outreach & donations.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 border border-red-600/30 p-6 rounded-2xl hover-lift glow-effect group transition-all duration-300 hover:border-red-600/60">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-red-600/20 rounded-full group-hover:bg-red-600 transition-colors duration-300">
                      <Globe className="text-red-400 group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Belonging</h4>
                      <p className="text-gray-300">A club that feels like home, with space for every voice.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 border border-red-600/30 p-6 rounded-2xl hover-lift glow-effect group transition-all duration-300 hover:border-red-600/60">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-red-600/20 rounded-full group-hover:bg-red-600 transition-colors duration-300">
                      <Lightbulb className="text-red-400 group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Initiative & Growth</h4>
                      <p className="text-gray-300">Ideas are always welcome, and growth is always personal.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Faculty Advisor Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="heading-glow text-4xl md:text-5xl font-bold text-white mb-6">Faculty Advisor</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full glow-effect"></div>
          </div>

          <div className="max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gray-800 border-2 border-red-600/40 p-10 rounded-2xl text-center hover-lift glow-effect transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400"></div>
              
              <div className="w-32 h-32 mx-auto mb-8 bg-red-600/20 rounded-full border-4 border-red-600/50 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-red-600/20 animate-pulse rounded-full"></div>
                <span className="text-3xl font-bold text-red-400 relative z-10">SK</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">Shyam Karanth</h3>
              <p className="text-red-400 font-semibold mb-6 text-lg">Computer Science & Engineering Department</p>
              
              <div className="space-y-4">
                <div className="group">
                  <a 
                    href="mailto:shyam.karanth@manipal.edu" 
                    className="flex items-center justify-center space-x-3 text-gray-300 hover:text-red-400 transition-all duration-300 hover:scale-105 p-3 rounded-lg hover:bg-red-600/10"
                  >
                    <span className="text-red-500">✉</span>
                    <span>shyam.karanth@manipal.edu</span>
                  </a>
                </div>
                <div className="group">
                  <a 
                    href="tel:+919876543210" 
                    className="flex items-center justify-center space-x-3 text-gray-300 hover:text-red-400 transition-all duration-300 hover:scale-105 p-3 rounded-lg hover:bg-red-600/10"
                  >
                    <span className="text-red-500">📞</span>
                    <span>+91 98765 43210</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
