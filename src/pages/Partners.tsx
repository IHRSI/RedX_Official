
import React from 'react';
import { ExternalLink, Mail, Phone } from 'lucide-react';

const Partners = () => {
  const partnerCategories = [
    {
      title: 'Food & Dining',
      partners: [
        {
          name: 'Roys Cafe',
          description: '15% off on all meals',
          phone: '+91 81234 56780',
          email: 'roy@royscafe.com',
          logo: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=100&h=100&fit=crop&crop=center',
        },
        {
          name: 'Hakuna Matata',
          description: '20% off above 1000',
          phone: '+91 81234 56781',
          email: 'contact@hakunamatata.com',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jd7q3SQt45WviE-0V6-FiDUBFNblqddKZQTAf3JMmSX_Vq2sAKJn3oQud2F7CSwhVoA&usqp=CAU',
        },
        {
          name: 'Burger Shack',
          description: '15% off on combo meals',
          phone: '+91 81234 56782',
          email: 'info@burgershack.com',
          logo: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=100&h=100&fit=crop&crop=center',
        },
        {
          name: 'The Tawa Punjab',
          description: '10% off on Indian cuisines',
          phone: '+91 81234 56783',
          email: 'hello@tawapunjab.com',
          logo: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=100&h=100&fit=crop&crop=center',
        },
        {
          name: 'Bowls and Beyond',
          description: '10% off on all orders',
          phone: '+91 98765 43214',
          email: 'contact@bowlsnbeyond.com',
          logo: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=100&h=100&fit=crop&crop=center',
        },
        {
          name: 'Caloria',
          description: '20% off above 400',
          phone: '+91 98765 43215',
          email: 'caloria@foodpartner.com',
          logo: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=100&h=100&fit=crop&crop=center',
        },
        {
          name: 'Manna Rolls',
          description: '10% off above 300',
          phone: '+91 98765 43216',
          email: 'info@mannarolls.com',
          logo: 'https://menu.restaurantguru.com/m3/Manna-Rolls-Manipal-menu-1.jpg',
        },
        {
          name: 'A Cafe Story',
          description: '20% off on salads',
          phone: '+91 98765 43217',
          email: 'acafe@storymail.com',
          logo: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop&crop=center',
        },
        {
          name: 'ZZA Bar',
          description: '20% off above 799',
          phone: '+91 98765 43218',
          email: 'info@zzabar.com',
          logo: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=100&h=100&fit=crop&crop=center',
        },
        {
          name: 'Cafe La Rochelle',
          description: '10% on entire bill',
          phone: '+91 98765 43219',
          email: 'contact@larochelle.com',
          logo: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=100&h=100&fit=crop&crop=center',
        },
      ]
    },
    {
      title: 'Gaming / Gyms',
      partners: [
        {
          name: 'Extreme Fitness',
          description: '20% off on memberships',
          phone: '+91 98765 43220',
          email: 'extreme@fitnesspro.com',
          logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop&crop=center',
        },
        {
          name: 'Level Up',
          description: '20% off on gaming sessions',
          phone: '+91 98765 43221',
          email: 'info@levelupgames.com',
          logo: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop&crop=center',
        },
        {
          name: 'Trigger Gaming',
          description: '15% off above 300',
          phone: '+91 98765 43222',
          email: 'trigger@gaming.com',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQX2uPc9iymOQoEnhoLM8-CTo-fWyQWNqgw&s',
        },
        {
          name: 'Glitch Games',
          description: '15% off on total bill',
          phone: '+91 98765 43223',
          email: 'glitch@gameshub.com',
          logo: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=100&h=100&fit=crop&crop=center',
        },
      ]
    },
    {
      title: 'Saloons',
      partners: [
        {
          name: 'Scissor Sound',
          description: '40% off on Womens Facials',
          phone: '+91 98765 43224',
          email: 'scissorsound@salons.com',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfCX3_3-w1vGUa8BbmjO3zRVF1QykhnwYNaA&s',
        },
        {
          name: 'Naturals',
          description: '25% off on grooming',
          phone: '+91 98765 43225',
          email: 'naturals@salons.com',
          logo: 'https://content.jdmagicbox.com/v2/comp/hyderabad/z7/040pxx40.xx40.130819144442.c4z7/catalogue/naturals-family-salon-and-spa-barkatpura-hyderabad-unisex-beauty-parlours-xetqyvggho.jpg',
        },
        {
          name: 'Tony & Guy',
          description: '10% off above 1000',
          phone: '+91 98765 43226',
          email: 'tonyandguy@salons.com',
          logo: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=100&h=100&fit=crop&crop=center',
        },
        {
          name: 'Plants',
          description: '20% off on all services',
          phone: '+91 98765 43227',
          email: 'plants@salons.com',
          logo: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=100&h=100&fit=crop&crop=center',
        },
        {
          name: 'Habit',
          description: '15% off on all services',
          phone: '+91 98765 43228',
          email: 'habit@salons.com',
          logo: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=100&h=100&fit=crop&crop=center',
        },
      ]
    },
    {
      title: 'Desserts',
      partners: [
        {
          name: '7th Avenue Waffles',
          description: '20% off above 900',
          phone: '+91 98765 43229',
          email: 'waffles@7thavenue.com',
          logo: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=100&h=100&fit=crop&crop=center',
        },
        {
          name: 'Flurrys',
          description: '10% off on cakes',
          phone: '+91 98765 43230',
          email: 'flurrys@desserts.com',
          logo: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&h=100&fit=crop&crop=center',
        },
        {
          name: 'Creamy Cart',
          description: '15% off above 400',
          phone: '+91 98765 43231',
          email: 'creamy@cartdesserts.com',
          logo: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=100&h=100&fit=crop&crop=center',
        },
        {
          name: 'Umai',
          description: '10% off above 500',
          phone: '+91 98765 43232',
          email: 'umai@desserts.com',
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmt6Oks0KcHYzzKNfz-jjaXFMGILfDgRvMw&s',
        },
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
                <div className="text-4xl font-bold text-red-400 mb-2">350+</div>
                <p className="text-gray-300">Active Red-X Members</p>
              </div>
              <div className="text-center p-6 bg-red-600/10 rounded-2xl border border-red-600/30">
                <div className="text-4xl font-bold text-red-400 mb-2">18+</div>
                <p className="text-gray-300">Events Per Year</p>
              </div>
              <div className="text-center p-6 bg-red-600/10 rounded-2xl border border-red-600/30">
                <div className="text-4xl font-bold text-red-400 mb-2">15K+</div>
                <p className="text-gray-300">Social Media Reach</p>
              </div>
            </div>
            
            <a
              href="mailto:redx.mit@manipal.edu?subject=Partnership Inquiry"
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
