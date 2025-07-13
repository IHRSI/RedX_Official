
import React from 'react';
import { Check, Star, Users, Calendar, Gift, Award } from 'lucide-react';

const Membership = () => {
  const benefits = [
    {
      icon: <Gift className="text-red-400" size={24} />,
      title: 'Exclusive Partner Discounts',
      description: 'Get special discounts at 20+ partner restaurants, gyms, salons, and entertainment venues across Manipal.'
    },
    {
      icon: <Users className="text-red-400" size={24} />,
      title: 'Priority Trek Bookings',
      description: 'Secure your spot first with priority booking and member-only discounted fees for all adventure treks.'
    },
    {
      icon: <Calendar className="text-red-400" size={24} />,
      title: 'Early Access to Events',
      description: 'Be the first to register for DISHA drives, donation events, and exclusive member meetups.'
    },
    {
      icon: <Award className="text-red-400" size={24} />,
      title: 'Interact Series Access',
      description: 'Reserved seats for guest speaker events, alumni interactions, and premium workshop sessions.'
    },
    {
      icon: <Star className="text-red-400" size={24} />,
      title: 'Exclusive Merchandise',
      description: 'Access to limited-edition Red-X branded merchandise and gear before public release.'
    },
    {
      icon: <Users className="text-red-400" size={24} />,
      title: 'Community Network',
      description: 'Connect with 500+ active members, alumni network, and industry professionals through our platform.'
    }
  ];

  const faqs = [
    {
      question: 'How do I use my Red-X membership card?',
      answer: 'Simply show your digital or physical Red-X membership card at any partner establishment to avail exclusive discounts. You can also access member-only events and priority bookings through our platform.'
    },
    {
      question: 'What is the validity of the membership?',
      answer: 'Your Red-X membership is valid for one full academic year from the date of purchase. You can renew it at a discounted rate for subsequent years.'
    },
    {
      question: 'Can I get a refund if I\'m not satisfied?',
      answer: 'We offer a 30-day satisfaction guarantee. If you\'re not completely satisfied with your membership benefits, contact us within 30 days for a full refund.'
    },
    {
      question: 'Are there any additional charges for events?',
      answer: 'While membership gives you priority access and discounted rates, some premium events may have additional charges. Members always get the best prices available.'
    },
    {
      question: 'How do I access partner discounts?',
      answer: 'Your membership card (digital or physical) serves as your discount pass. Show it at any partner location to receive your exclusive member discount.'
    },
    {
      question: 'Can I share my membership with friends?',
      answer: 'Memberships are individual and non-transferable. However, you can refer friends and earn rewards for successful referrals!'
    }
  ];

  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-24 redx-gradient relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
              <Star className="text-yellow-400 mr-2" size={20} />
              <span className="text-white font-semibold">Limited Time Offer</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">₹349</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-100">
              Be More Than a Member
            </h2>
            <p className="text-xl md:text-2xl text-red-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join Red-X and unlock a world of adventures, exclusive benefits, and meaningful connections. 
              Your journey of growth and service starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://forms.google.com/redx-membership"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 glow-effect hover:bg-red-50"
              >
                <span>Get Your Membership</span>
              </a>
              <a
                href="https://forms.google.com/redx-membership"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/30 transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                <span>Purchase Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Red-X Membership?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Unlock exclusive benefits, forge lifelong connections, and embark on adventures that shape your college experience.
            </p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800 border-2 border-red-600/30 p-8 rounded-2xl hover-lift glow-effect animate-fade-in-up transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://forms.google.com/redx-membership"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center redx-gradient text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 glow-effect"
            >
              <span>Buy Now - ₹349</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Everything you need to know about Red-X membership</p>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-red-600/30 rounded-xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-red-600/10 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div className={`text-red-400 transform transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
                    +
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-gray-400 mb-6">Still have questions? We're here to help!</p>
            <a
              href="mailto:redxmanipal@gmail.com"
              className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors font-semibold"
            >
              Contact us at redxmanipal@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
