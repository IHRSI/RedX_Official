
import React, { lazy, Suspense } from 'react';
import { Instagram, Linkedin, Mail, Users, Heart, Star, Zap } from 'lucide-react';

const FloatingParticles = lazy(() => import('../components/3d/FloatingParticles'));
const AnimatedTorus = lazy(() => import('../components/3d/AnimatedTorus'));

const Team = () => {
  const executiveBoard = [
    { name: 'Anushka Harish', role: 'President', quote: 'Lead with clarity, serve with heart.', email: 'anushka.harish28@gmail.com', linkedin: 'https://www.linkedin.com/in/anushka-h-108454200/', instagram: 'https://www.instagram.com/anushkaharish28?igsh=OTFvc2hvaTUzcGYw' },
    { name: 'Adit Kothari', role: 'Vice-President', quote: 'Turn plans into momentum, every day.', email: 'kothariaditt18@gmail.com', linkedin: 'https://www.linkedin.com', instagram: 'https://www.instagram.com/kothari_adit?igsh=YzZvMnBzZ3YwYjZv' },
    { name: 'Palak Shekhawat', role: 'General Secretary', quote: 'Keep people aligned and action consistent.', email: 'palakshekhawat8648@gmail.com', linkedin: 'https://www.linkedin.com/in/palak0s/', instagram: 'https://www.instagram.com/select_ivelydeaf?igsh=MTBneWtoaHF0dzBvOA==' },
    { name: 'Jash Shah', role: 'Treasurer', quote: 'Every rupee should create real impact.', email: 'jash21102004@gmail.com', linkedin: 'https://www.linkedin.com/in/jash-shah-000706279/', instagram: 'https://www.instagram.com/jash_s04?igsh=MW9xZ3MwM2ttc3RkcQ==' },
    { name: 'Nimisha Sahni', role: 'Creative Director', quote: 'Design stories people feel and remember.', email: 'nimishasahni2000@gmail.com', linkedin: 'https://www.linkedin.com/in/nimisha-sahni/', instagram: 'https://www.instagram.com/nimisha_sahni?igsh=MWgxbGw3OHBwbGd1NA==' },
  ];

  const boardDepartments = [
    {
      department: 'Adventure Department',
      members: [
        { name: 'Anjney Jeswal', role: 'Adventure and Compliance Director', quote: 'Adventure is best when safety leads.', email: 'anjney55jeswal.rr@gmail.com', linkedin: 'https://www.linkedin.com/in/anjney-jeswal-005564280/', instagram: 'https://www.instagram.com/anjney._.frr?igsh=MXNuaWs4cTA4MmNwcQ==' },
        { name: 'Aroosh Shubham', role: 'Adventure and Planning Director', quote: 'Great routes begin with sharp planning.', email: '14aroosh@gmail.com', linkedin: 'https://www.linkedin.com/in/aroosh-shubham-6387402b1/', instagram: 'https://www.instagram.com/aroosh.x_?igsh=ZWw0cnN3bHRxZmNm' },
      ],
    },
    {
      department: 'Disha Department',
      members: [
        { name: 'Hiten Raj Singh', role: 'Social Welfare Director', quote: 'Service is impact made visible.', email: 'hitenhrs75@gmail.com', linkedin: 'https://www.linkedin.com/in/hiten-raj-singh-451998283/', instagram: 'https://www.instagram.com/_hrs75_?igsh=MWY5bXJwNXB6dW53dw==' },
        { name: 'Saksham Agarwal', role: 'Impact and Collaboration Director', quote: 'Partnerships multiply every good effort.', email: 'agrawalsaksham300505@gmail.com', linkedin: 'https://www.linkedin.com/in/saksham-agrawal-b0363a24a/', instagram: 'https://www.instagram.com/saksham.at?igsh=MTF5dmJ2c2NqM2dveg==' },
      ],
    },
    {
      department: 'Media Department',
      members: [
        { name: 'Nilabh Bibawe', role: 'PAV Director', quote: 'Capture moments that carry our mission.', email: 'nilabh1811@gmail.com', linkedin: 'https://www.linkedin.com/in/nilabhbibawe/', instagram: 'https://www.instagram.com/nilabh.1811?igsh=bmFiN3JrMGFxemdl' },
        { name: 'Tanay Aggarwal', role: 'Tech Media Director', quote: 'Strong systems make stories travel farther.', email: 'tanayaggarwal2@gmail.com', linkedin: 'https://www.linkedin.com/in/tanay-agg/', instagram: 'https://www.instagram.com/_tanay_95?igsh=enVua3JvMW1jdG1s' },
        { name: 'Anshul Aditya', role: 'Tech Media Director', quote: 'Build smart media, keep communication seamless.', email: 'anshuladitya2004@gmail.com', linkedin: 'https://www.linkedin.com/in/anshul-a-13a500228/', instagram: 'https://www.instagram.com/anshul._.aditya?igsh=MTJiNGdxM2J2eGF1bg==' },
      ],
    },
    {
      department: 'Business Department',
      members: [
        { name: 'Om Manchanda', role: 'Business Expansion Director', quote: 'Growth follows value delivered consistently.', email: 'ommanchanda10@gmail.com', linkedin: 'https://www.linkedin.com/in/om-manchanda-664490278/', instagram: 'https://www.instagram.com/om.manchanda.04?igsh=dHlraWRybWR6a2Z6' },
        { name: 'Aradhya Pandey', role: 'Business Strategy Director', quote: 'Strategy turns ambition into direction.', email: 'pandeyaryendra76@gmail.com', linkedin: 'https://www.linkedin.com/in/aradhya-pandey-b6524a2a7/', instagram: 'https://www.instagram.com/_aradhya.pandey_?igsh=MXB5dXVkbzl1M2thbQ==' },
      ],
    },
  ];

  const advisoryCommittee = [
    { name: 'Aditya Singh', role: 'Advisory Committee', quote: 'Guide with experience, support with trust.', email: 'Adiktyasi987@gmail.com', linkedin: 'https://www.linkedin.com/in/aditya-singh-264ab9239/', instagram: 'https://www.instagram.com/_am.adi_?igsh=MXVmdTNuMDdkaGxpNA==' },
    { name: 'Devesh Pillai', role: 'Advisory Committee', quote: 'Mentorship keeps good teams getting better.', email: 'dpillai2005@gmail.com', linkedin: 'https://www.linkedin.com/in/deveshp2004/', instagram: 'https://www.instagram.com/_devesh.pillai?igsh=ZGhqNXBsODY1a2Jq' },
  ];

  const getAvatar = (name: string) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=111827&color=ef4444&size=300&bold=true`;

  const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-gray-700 hover:bg-red-600 hover:text-white rounded-lg transition-colors border border-red-600/30 glow-effect"
      aria-label={label}
    >
      <Icon size={18} />
    </a>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 redx-gradient relative overflow-hidden">
        <Suspense fallback={null}>
          <FloatingParticles variant="team" />
        </Suspense>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet the Team</h1>
            <p className="text-xl md:text-2xl text-red-100 mb-4">
              The passionate leaders driving Red-X forward
            </p>
            <p className="text-lg text-red-200 max-w-2xl mx-auto">
              Our dedicated team works tirelessly to create amazing experiences, 
              build community connections, and make a positive impact.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Board - Center Aligned */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        <Suspense fallback={null}>
          <div className="absolute inset-0 opacity-20" style={{ pointerEvents: 'none' }}>
            <AnimatedTorus />
          </div>
        </Suspense>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Executive Board</h2>
            <p className="text-xl text-red-300">Leading Red-X with vision and dedication</p>
            <div className="w-20 h-1 bg-red-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Center-aligned: 3 on top, 2 on bottom */}
          <div className="flex flex-col items-center gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {executiveBoard.slice(0, 3).map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-800/90 backdrop-blur-sm border border-red-600/30 rounded-2xl p-6 hover-lift text-center animate-fade-in-up glow-effect w-full max-w-xs"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img src={getAvatar(member.name)} alt={member.name} className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-2 border-red-600/50" />
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-red-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4 italic">"{member.quote}"</p>
                  <div className="flex justify-center space-x-2">
                    <SocialLink href={member.instagram} icon={Instagram} label="Instagram" />
                    <SocialLink href={member.linkedin} icon={Linkedin} label="LinkedIn" />
                    <SocialLink href={`mailto:${member.email}`} icon={Mail} label="Email" />
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              {executiveBoard.slice(3, 5).map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-800/90 backdrop-blur-sm border border-red-600/30 rounded-2xl p-6 hover-lift text-center animate-fade-in-up glow-effect w-full max-w-xs"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <img src={getAvatar(member.name)} alt={member.name} className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-2 border-red-600/50" />
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-red-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4 italic">"{member.quote}"</p>
                  <div className="flex justify-center space-x-2">
                    <SocialLink href={member.instagram} icon={Instagram} label="Instagram" />
                    <SocialLink href={member.linkedin} icon={Linkedin} label="LinkedIn" />
                    <SocialLink href={`mailto:${member.email}`} icon={Mail} label="Email" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board Members by Department */}
      <section className="py-16 bg-black relative overflow-hidden">
        <Suspense fallback={null}>
          <div className="absolute inset-0 opacity-15" style={{ pointerEvents: 'none' }}>
            <FloatingParticles variant="team" />
          </div>
        </Suspense>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Board Members</h2>
            <p className="text-xl text-red-300">The backbone of our operations</p>
            <div className="w-20 h-1 bg-red-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="space-y-10">
            {boardDepartments.map((dept, deptIndex) => (
              <div key={dept.department} className="bg-gray-900/60 border border-red-600/20 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-red-300 mb-6 text-center">{dept.department}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                  {dept.members.map((member, index) => (
                    <div
                      key={member.name}
                      className="bg-gray-800/90 backdrop-blur-sm border border-red-600/30 rounded-xl p-6 hover-lift text-center animate-fade-in-up glow-effect w-full max-w-xs"
                      style={{ animationDelay: `${(deptIndex + index) * 0.06}s` }}
                    >
                      <img src={getAvatar(member.name)} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-red-600/30" />
                      <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                      <p className="text-red-400 font-medium text-sm mb-1">{member.role}</p>
                      <p className="text-gray-400 text-xs mb-3 italic">"{member.quote}"</p>
                      <div className="flex justify-center space-x-2">
                        <SocialLink href={member.instagram} icon={Instagram} label="Instagram" />
                        <SocialLink href={member.linkedin} icon={Linkedin} label="LinkedIn" />
                        <SocialLink href={`mailto:${member.email}`} icon={Mail} label="Email" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Committee */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advisory Committee</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-4xl mx-auto">
            {advisoryCommittee.map((member, index) => (
              <div
                key={member.name}
                className="bg-gray-800/90 backdrop-blur-sm border border-red-600/30 rounded-xl p-6 hover-lift text-center animate-fade-in-up glow-effect w-full max-w-xs"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <img src={getAvatar(member.name)} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-red-600/30" />
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-red-400 font-medium text-sm mb-1">{member.role}</p>
                <p className="text-gray-400 text-xs mb-3 italic">"{member.quote}"</p>
                <div className="flex justify-center space-x-2">
                  <SocialLink href={member.instagram} icon={Instagram} label="Instagram" />
                  <SocialLink href={member.linkedin} icon={Linkedin} label="LinkedIn" />
                  <SocialLink href={`mailto:${member.email}`} icon={Mail} label="Email" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 100+ Management & Working Committee */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <Suspense fallback={null}>
          <div className="absolute inset-0 opacity-20" style={{ pointerEvents: 'none' }}>
            <AnimatedTorus />
          </div>
        </Suspense>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Force Behind Red-X</h2>
            <p className="text-xl text-red-300 mb-6">Our Management Committee & Working Committee</p>
            <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm border-2 border-red-600/40 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden glow-effect">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-red-500 to-red-400"></div>
            
            {/* Animated number */}
            <div className="mb-8">
              <span className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-600 leading-none">
                100+
              </span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Dedicated Members Strong
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Behind every trek, every event, and every initiative stands our incredible team of 
              Management Committee and Working Committee members. They are the heartbeat of Red-X — 
              organizing, executing, and bringing every vision to life with unmatched energy and dedication.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="p-5 bg-red-600/10 rounded-2xl border border-red-600/30 hover-lift transition-transform">
                <Users className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-red-400">60+</div>
                <p className="text-gray-400 text-sm mt-1">Management Committee</p>
              </div>
              <div className="p-5 bg-red-600/10 rounded-2xl border border-red-600/30 hover-lift transition-transform">
                <Zap className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-red-400">40+</div>
                <p className="text-gray-400 text-sm mt-1">Working Committee</p>
              </div>
              <div className="p-5 bg-red-600/10 rounded-2xl border border-red-600/30 hover-lift transition-transform">
                <Heart className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-red-400">12+</div>
                <p className="text-gray-400 text-sm mt-1">Departments</p>
              </div>
              <div className="p-5 bg-red-600/10 rounded-2xl border border-red-600/30 hover-lift transition-transform">
                <Star className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-red-400">1</div>
                <p className="text-gray-400 text-sm mt-1">United Family</p>
              </div>
            </div>

            {/* Visual dots representing team */}
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              {[...Array(100)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{
                    backgroundColor: `hsl(0, ${70 + Math.random() * 30}%, ${45 + Math.random() * 20}%)`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-800 border border-red-600/30 p-12 rounded-2xl glow-effect">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to Join Our Team?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for passionate individuals to join the Red-X family. 
              Be part of something bigger and make a real impact in the MIT Manipal community.
            </p>
            <a
              href="mailto:redxmanipal@gmail.com?subject=Interested in Joining Red-X Team"
              className="inline-block redx-gradient text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform glow-effect"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
