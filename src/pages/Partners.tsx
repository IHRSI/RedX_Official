
import React, { lazy, Suspense, useMemo } from 'react';
import { Mail } from 'lucide-react';

const FloatingParticles = lazy(() => import('../components/3d/FloatingParticles'));
const AnimatedTorus = lazy(() => import('../components/3d/AnimatedTorus'));

const getPartnerLogo = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=111827&color=ef4444&size=120&bold=true`;

const partnerLogo = (number: number) => `/uploads/partners/${number}.png`;


const partnerCategories = [
  {
    title: 'Food & Dining',
    partners: [
      { name: 'ZZA Bar', description: '15% off above 399 \n 20% off above 799', logo: partnerLogo(1) },
      { name: 'Cafe Story', description: '10% off (399-999), 20% off (1000+)', logo: partnerLogo(2) },
      { name: 'Hungry House', description: '10% off above 500', logo: partnerLogo(3) },
      { name: 'Tawa Punjab', description: '5% off (499-999), 10% off (1000+)', logo: partnerLogo(4) },
      { name: 'Hakuna Matata', description: '10% off (excluding combos/discounted items)', logo: partnerLogo(5) },
      { name: 'Burger Shack', description: '5% (499-999), 10% (999-1499), 15% (1499+)', logo: partnerLogo(6) },
      { name: 'DTR', description: '10% off (non-offer items, not Saturday), 15% off above 10,000 (non-offer items)', logo: partnerLogo(7) },
      { name: 'Manna Rolls', description: '10% off all purchases', logo: partnerLogo(8) },
      { name: '7 Bees', description: '15% off all purchases', logo: partnerLogo(9) },
      { name: 'Shivanna', description: '10% (non-discounted & non-combo items)', logo: partnerLogo(28) },
    ]
  },
  {
    title: 'Gaming',
    partners: [
      { name: 'Glitch Games', description: '10% off everything', logo: partnerLogo(10) },
      { name: 'Black Tiger', description: '15% off all bills', logo: partnerLogo(11) },
      { name: 'Strikers', description: '15% off all charges', logo: partnerLogo(12) },
      { name: 'Trigger', description: '15% off above 300', logo: partnerLogo(13) },
    ]
  },
  {
    title: 'Gyms',
    partners: [
      // { name: 'Superhuman', description: '40% off 6 & 12-month packages', logo: partnerLogo(14) },
      { name: 'Extreme Fitness', description: '20% off (3, 9, 12-month memberships)', logo: partnerLogo(15) },
      { name: 'Adiyoga Wellness Studio', description: '15% off (3-6 months), 20% off (1 year)' },
    ]
  },
  {
    title: 'Saloons',
    partners: [
      { name: 'Naturals', description: '25% off up to 1000, 30% above 1000', logo: partnerLogo(17) },
      { name: 'Scissors and Sound', description: '40% (female hair), 30% (facials), 10% (men above 1000)', logo: partnerLogo(18) },
      { name: 'Lucents', description: '10% off above 999', logo: partnerLogo(19) },
    ]
  },
  {
    title: 'Desserts',
    partners: [
      { name: 'Flurrys', description: '10% on cakes, 5% on pastries', logo: partnerLogo(20) },
      { name: 'Smoocho', description: '10% above 500', logo: partnerLogo(21) },
      { name: 'Uncle Bros', description: '10% off above 200', logo: partnerLogo(22) },
      { name: 'Just Juice', description: '10% off all purchases', logo: partnerLogo(23) },
    ]
  },
  {
    title: 'Repairs and Clothing',
    partners: [
      { name: 'M2M Laptop Repairs', description: '20% on service, 15% on parts', logo: partnerLogo(24) },
      { name: 'Qstar Store', description: '10% above 1200, 15% above 2200', logo: '/uploads/partners/25.jpeg' },
      { name: 'Maniac', description: '15% off all purchases', logo: partnerLogo(26) },
      { name: 'Concept', description: '20% off all purchases', logo: '/uploads/partners/27.jpeg' },
    ]
  }
];

const PartnerCard = ({ partner, index }: { partner: typeof partnerCategories[0]['partners'][0]; index: number }) => (
  <div
    className="bg-gray-800 border-2 border-red-600/30 rounded-2xl p-8 hover-lift glow-effect animate-fade-in-up transform hover:scale-105 transition-all duration-500 hover:border-red-600/60 relative overflow-hidden group w-full max-w-sm text-center"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
    
    <div className="flex flex-col items-center mb-6 relative z-10">
      <img
        src={partner.logo ?? getPartnerLogo(partner.name)}
        alt={`${partner.name} logo`}
        loading="lazy"
        decoding="async"
        className="w-20 h-20 rounded-xl object-cover mb-3 border-2 border-red-600/40 group-hover:border-red-600 transition-colors duration-300 group-hover:shadow-red-600/50 group-hover:shadow-lg"
      />
      <div>
        <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">{partner.name}</h3>
      </div>
    </div>
    
    <div className="relative z-10 text-center">
      <p className="text-red-300 mb-6 font-semibold text-lg bg-red-600/10 p-3 rounded-lg border border-red-600/30 group-hover:bg-red-600/20 transition-colors duration-300">{partner.description}</p>

      <div className="w-full bg-red-600/20 text-red-200 px-6 py-3 rounded-xl font-semibold text-center border border-red-600/30">
        Red-X Card Offer
      </div>
    </div>
  </div>
);

const Partners = () => {
  const heroDots = useMemo(
    () =>
      [...Array(18)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${2 + Math.random() * 2}s`,
      })),
    []
  );

  return (
    <div className="min-h-screen bg-black text-white text-center">
      {/* Hero Section with 3D */}
      <section className="py-24 redx-gradient relative overflow-hidden">
        <Suspense fallback={null}>
          <FloatingParticles variant="partners" className="opacity-90" />
          <div className="absolute inset-0 opacity-55" style={{ pointerEvents: 'none' }}>
            <AnimatedTorus />
          </div>
        </Suspense>

        <div className="absolute inset-0">
          {heroDots.map((dot) => (
            <div
              key={dot.id}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-30"
              style={{
                left: dot.left,
                top: dot.top,
                animationDelay: dot.delay,
                animationDuration: dot.duration
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

      {/* Partner Categories with 3D elements */}
      {partnerCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-gray-900' : 'bg-black'} relative overflow-hidden`}>
      {/* Subtle CSS background glow */}

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
            
            <div className="flex justify-center">
              <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl">
                {category.partners.map((partner, index) => (
                  <PartnerCard key={index} partner={partner} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Partner with Us Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <Suspense fallback={null}>
          <div className="absolute inset-0 opacity-25" style={{ pointerEvents: 'none' }}>
            <AnimatedTorus />
          </div>
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-600/5"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-gray-800/90 backdrop-blur-sm border-2 border-red-600/40 p-16 rounded-3xl glow-effect animate-fade-in-up relative overflow-hidden">
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
                <div className="text-4xl font-bold text-red-400 mb-2">200+</div>
                <p className="text-gray-300">Active Red-X Members</p>
              </div>
              <div className="text-center p-6 bg-red-600/10 rounded-2xl border border-red-600/30">
                <div className="text-4xl font-bold text-red-400 mb-2">10+</div>
                <p className="text-gray-300">Events Per Year</p>
              </div>
              <div className="text-center p-6 bg-red-600/10 rounded-2xl border border-red-600/30">
                <div className="text-4xl font-bold text-red-400 mb-2">20K+</div>
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
