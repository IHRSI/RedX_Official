
import React from 'react';
import { ExternalLink, Mail, Phone } from 'lucide-react';

const partnerCategories = [
  {
    title: 'Food & Dining',
    partners: [
      { name: 'Roys Cafe', description: '15% off on all meals', phone: '+91 81234 56780', email: 'roy@royscafe.com' },
      { name: 'Hakuna Matata', description: '20% off above 1000', phone: '+91 81234 56781', email: 'contact@hakunamatata.com' },
      { name: 'Burger Shack', description: '15% off on combo meals', phone: '+91 81234 56782', email: 'info@burgershack.com' },
      { name: 'The Tawa Punjab', description: '10% off on Indian cuisines', phone: '+91 81234 56783', email: 'hello@tawapunjab.com' },
      { name: 'Bowls and Beyond', description: '10% off on all orders', phone: '+91 81234 56784', email: 'contact@bowlsnbeyond.com' },
      { name: 'Caloria', description: '20% off above 400', phone: '+91 81234 56785', email: 'caloria@foodpartner.com' },
      { name: 'Manna Rolls', description: '10% off above 300', phone: '+91 81234 56786', email: 'info@mannarolls.com' },
      { name: 'A Cafe Story', description: '20% off on salads', phone: '+91 81234 56787', email: 'acafe@storymail.com' },
      { name: 'ZZA Bar', description: '20% off above 799', phone: '+91 81234 56788', email: 'info@zzabar.com' },
      { name: 'Cafe La Rochelle', description: '10% on entire bill', phone: '+91 81234 56789', email: 'contact@larochelle.com' },
    ]
  },
  {
    title: 'Gaming / Gyms',
    partners: [
      { name: 'Extreme Fitness', description: '20% off on memberships', phone: '+91 81234 56800', email: 'extreme@fitnesspro.com' },
      { name: 'Level Up', description: '20% off on gaming sessions', phone: '+91 81234 56801', email: 'info@levelupgames.com' },
      { name: 'Trigger Gaming', description: '15% off above 300', phone: '+91 81234 56802', email: 'trigger@gaming.com' },
      { name: 'Glitch Games', description: '15% off on total bill', phone: '+91 81234 56803', email: 'glitch@gameshub.com' },
    ]
  },
  {
    title: 'Saloons',
    partners: [
      { name: 'Scissor Sound', description: '40% off on Womens Facials', phone: '+91 81234 56810', email: 'scissorsound@salons.com' },
      { name: 'Naturals', description: '25% off on grooming', phone: '+91 81234 56811', email: 'naturals@salons.com' },
      { name: 'Tony & Guy', description: '10% off above 1000', phone: '+91 81234 56812', email: 'tonyandguy@salons.com' },
      { name: 'Plants', description: '20% off on all services', phone: '+91 81234 56813', email: 'plants@salons.com' },
      { name: 'Habit', description: '15% off on all services', phone: '+91 81234 56814', email: 'habit@salons.com' },
    ]
  },
  {
    title: 'Desserts',
    partners: [
      { name: '7th Avenue Waffles', description: '20% off above 900', phone: '+91 81234 56820', email: 'waffles@7thavenue.com' },
      { name: 'Flurrys', description: '10% off on cakes', phone: '+91 81234 56821', email: 'flurrys@desserts.com' },
      { name: 'Creamy Cart', description: '15% off above 400', phone: '+91 81234 56822', email: 'creamy@cartdesserts.com' },
      { name: 'Umai', description: '10% off above 500', phone: '+91 81234 56823', email: 'umai@desserts.com' },
    ]
  }
];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Enhanced Hero Section */}
      <section className="py-24 redx-gradient relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-30"
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
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">Our Partners</h1>
            <p className="text-2xl md:text-3xl text-red-100 mb-6">
              Exclusive benefits for Red-X members
            </p>
            <p className="text-xl text-red-200 max-w-3xl mx-auto leading-relaxed">
              Our amazing partner network offers exclusive discounts and benefits to Red-X card holders.
              Show your Red-X membership card to unlock these special offers.
            </p>
            <div className="w-32 h-1 bg-white/80 mx-auto mt-8 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Partners Categories - Enhanced Center Aligned */}
      {partnerCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-gray-900' : 'bg-black'} relative overflow-hidden`}>
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className={`absolute ${categoryIndex % 2 === 0 ? 'top-0 left-0' : 'bottom-0 right-0'} w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse`}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{category.title}</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-4"></div>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Discover amazing offers and discounts from our trusted partners
              </p>
            </div>
            
            {/* Center-aligned partner cards */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl justify-items-center">
                {category.partners.map((partner, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 border-2 border-red-600/30 rounded-2xl p-8 hover-lift glow-effect animate-fade-in-up transform hover:scale-105 transition-all duration-500 hover:border-red-600/60 relative overflow-hidden group w-full max-w-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Enhanced Card Accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    <div className="flex items-center mb-6 relative z-10">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-20 h-20 rounded-xl object-cover mr-4 border-2 border-red-600/40 group-hover:border-red-600 transition-colors duration-300 group-hover:shadow-red-600/50 group-hover:shadow-lg"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">{partner.name}</h3>
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <p className="text-red-300 mb-6 font-semibold text-lg bg-red-600/10 p-3 rounded-lg border border-red-600/30 group-hover:bg-red-600/20 transition-colors duration-300">{partner.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors duration-300 p-2 rounded-lg hover:bg-red-600/10">
                          <Phone size={18} className="text-red-400" />
                          <a href={`tel:${partner.phone}`} className="text-sm font-medium">
                            {partner.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors duration-300 p-2 rounded-lg hover:bg-red-600/10">
                          <Mail size={18} className="text-red-400" />
                          <a href={`mailto:${partner.email}`} className="text-sm font-medium break-all">
                            {partner.email}
                          </a>
                        </div>
                      </div>
                      
                      <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 glow-effect group-hover:shadow-red-600/50 group-hover:shadow-xl">
                        <span>Contact Partner</span>
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Enhanced Partner with Us Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-600/5"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-gray-800 border-2 border-red-600/40 p-16 rounded-3xl glow-effect animate-fade-in-up relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-400"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Partner with Red-X
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join our partner network and reach out to MIT Manipal's most active and engaged student community.
              Offer exclusive benefits to our members and grow your business together.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-red-600/10 rounded-2xl border border-red-600/30">
                <div className="text-4xl font-bold text-red-400 mb-2">500+</div>
                <p className="text-gray-300">Active Red-X Members</p>
              </div>
              <div className="text-center p-6 bg-red-600/10 rounded-2xl border border-red-600/30">
                <div className="text-4xl font-bold text-red-400 mb-2">50+</div>
                <p className="text-gray-300">Events Per Year</p>
              </div>
              <div className="text-center p-6 bg-red-600/10 rounded-2xl border border-red-600/30">
                <div className="text-4xl font-bold text-red-400 mb-2">10K+</div>
                <p className="text-gray-300">Social Media Reach</p>
              </div>
            </div>
            
            <a
              href="mailto:redxmanipal@gmail.com?subject=Partnership Inquiry"
              className="inline-flex items-center space-x-3 redx-gradient text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 glow-effect transform hover:rotate-1"
            >
              <Mail size={24} />
              <span>Partner with Us Today</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
