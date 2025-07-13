
import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const executiveBoard = [
    {
      name: 'Arjun Sharma',
      role: 'President',
      phrase: 'Leading with passion and purpose',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      instagram: 'arjun_redx',
      linkedin: 'arjunsharma',
      email: 'arjun@redxmanipal.com',
    },
    {
      name: 'Priya Nair',
      role: 'Vice President',
      phrase: 'Empowering communities, inspiring change',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c05264e5?w=300&h=300&fit=crop&crop=face',
      instagram: 'priya_redx',
      linkedin: 'priyanair',
      email: 'priya@redxmanipal.com',
    },
    {
      name: 'Vikram Singh',
      role: 'Treasurer',
      phrase: 'Managing resources with precision',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      instagram: 'vikram_redx',
      linkedin: 'vikramsingh',
      email: 'vikram@redxmanipal.com',
    },
    {
      name: 'Anjali Patel',
      role: 'General Secretary',
      phrase: 'Service before self, always',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      instagram: 'anjali_secretary',
      linkedin: 'anjalipatel',
      email: 'anjali@redxmanipal.com',
    },
    {
      name: 'Rahul Kumar',
      role: 'Director of Media',
      phrase: 'Capturing moments, creating memories',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      instagram: 'rahul_media',
      linkedin: 'rahulkumar',
      email: 'rahul@redxmanipal.com',
    },
  ];

  const boardMembers = [
    {
      name: 'Sneha Reddy',
      role: 'Marketing Head',
      phrase: 'Building brands, connecting hearts',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face',
      instagram: 'sneha_marketing',
      linkedin: 'snehareddy',
      email: 'sneha@redxmanipal.com',
    },
    {
      name: 'Karan Joshi',
      role: 'Events Coordinator',
      phrase: 'Creating unforgettable experiences',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face',
      instagram: 'karan_events',
      linkedin: 'karanjoshi',
      email: 'karan@redxmanipal.com',
    },
    {
      name: 'Meera Gupta',
      role: 'Content Creator',
      phrase: 'Words that inspire, stories that matter',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
      instagram: 'meera_content',
      linkedin: 'meeragupta',
      email: 'meera@redxmanipal.com',
    },
    {
      name: 'Abhishek Rao',
      role: 'Tech Lead',
      phrase: 'Innovation through technology',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face',
      instagram: 'abhishek_tech',
      linkedin: 'abhishekrao',
      email: 'abhishek@redxmanipal.com',
    },
    {
      name: 'Divya Shah',
      role: 'PR Manager',
      phrase: 'Building bridges, fostering connections',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
      instagram: 'divya_pr',
      linkedin: 'divyashah',
      email: 'divya@redxmanipal.com',
    },
    {
      name: 'Rohan Mehta',
      role: 'Logistics Head',
      phrase: 'Making the impossible, possible',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face',
      instagram: 'rohan_logistics',
      linkedin: 'rohanmehta',
      email: 'rohan@redxmanipal.com',
    },
    {
      name: 'Kavisha Agarwal',
      role: 'Design Head',
      phrase: 'Creativity meets functionality',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face',
      instagram: 'kavisha_design',
      linkedin: 'kavishaagarwal',
      email: 'kavisha@redxmanipal.com',
    },
    {
      name: 'Aditya Sharma',
      role: 'Photography Lead',
      phrase: 'Freezing moments in time',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=face',
      instagram: 'aditya_photo',
      linkedin: 'adityasharma',
      email: 'aditya@redxmanipal.com',
    },
  ];

  const managementCommittee = [
    {
      name: 'Sarthak Jain',
      role: 'Operations Manager',
      phrase: 'Smooth operations, seamless execution',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      instagram: 'sarthak_ops',
      linkedin: 'sarthakjain',
      email: 'sarthak@redxmanipal.com',
    },
    {
      name: 'Ishita Roy',
      role: 'Finance Assistant',
      phrase: 'Numbers tell stories',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c05264e5?w=150&h=150&fit=crop&crop=face',
      instagram: 'ishita_finance',
      linkedin: 'ishitaroy',
      email: 'ishita@redxmanipal.com',
    },
    {
      name: 'Harsh Verma',
      role: 'Community Manager',
      phrase: 'Building lasting connections',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      instagram: 'harsh_community',
      linkedin: 'harshverma',
      email: 'harsh@redxmanipal.com',
    },
    {
      name: 'Nisha Kapoor',
      role: 'Volunteer Coordinator',
      phrase: 'Every volunteer matters',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      instagram: 'nisha_volunteers',
      linkedin: 'nishakapoor',
      email: 'nisha@redxmanipal.com',
    },
    {
      name: 'Arpit Gupta',
      role: 'Social Media Manager',
      phrase: 'Digital storytelling expert',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      instagram: 'arpit_social',
      linkedin: 'arpitgupta',
      email: 'arpit@redxmanipal.com',
    },
    {
      name: 'Tanvi Sharma',
      role: 'Event Assistant',
      phrase: 'Details make the difference',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
      instagram: 'tanvi_events',
      linkedin: 'tanvisharma',
      email: 'tanvi@redxmanipal.com',
    },
    {
      name: 'Ravi Patel',
      role: 'Documentation Head',
      phrase: 'Preserving our legacy',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
      instagram: 'ravi_docs',
      linkedin: 'ravipatel',
      email: 'ravi@redxmanipal.com',
    },
    {
      name: 'Pooja Singh',
      role: 'Outreach Coordinator',
      phrase: 'Connecting beyond boundaries',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      instagram: 'pooja_outreach',
      linkedin: 'poojasingh',
      email: 'pooja@redxmanipal.com',
    },
    {
      name: 'Vikash Kumar',
      role: 'Equipment Manager',
      phrase: 'Safety first, adventure always',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
      instagram: 'vikash_equipment',
      linkedin: 'vikashkumar',
      email: 'vikash@redxmanipal.com',
    },
    {
      name: 'Priyanka Nair',
      role: 'Health & Safety Officer',
      phrase: 'Care with every adventure',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      instagram: 'priyanka_safety',
      linkedin: 'priyankanair',
      email: 'priyanka@redxmanipal.com',
    },
    {
      name: 'Ankit Raj',
      role: 'Partnership Coordinator',
      phrase: 'Building strategic alliances',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
      instagram: 'ankit_partnerships',
      linkedin: 'ankitraj',
      email: 'ankit@redxmanipal.com',
    },
    {
      name: 'Rhea Shah',
      role: 'Alumni Relations',
      phrase: 'Bridging past, present, future',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
      instagram: 'rhea_alumni',
      linkedin: 'rheasshah',
      email: 'rhea@redxmanipal.com',
    },
    {
      name: 'Suraj Malhotra',
      role: 'Training Coordinator',
      phrase: 'Excellence through practice',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face',
      instagram: 'suraj_training',
      linkedin: 'surajmalhotra',
      email: 'suraj@redxmanipal.com',
    },
    {
      name: 'Neha Gupta',
      role: 'Welfare Officer',
      phrase: 'Caring for our community',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      instagram: 'neha_welfare',
      linkedin: 'nehagupta',
      email: 'neha@redxmanipal.com',
    },
    {
      name: 'Amit Yadav',
      role: 'Transportation Head',
      phrase: 'Getting us there safely',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      instagram: 'amit_transport',
      linkedin: 'amityadav',
      email: 'amit@redxmanipal.com',
    },
    {
      name: 'Shreya Joshi',
      role: 'Membership Secretary',
      phrase: 'Welcome to the family',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
      instagram: 'shreya_membership',
      linkedin: 'shreyajoshi',
      email: 'shreya@redxmanipal.com',
    },
    {
      name: 'Rohit Kaul',
      role: 'Resource Manager',
      phrase: 'Optimizing every opportunity',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
      instagram: 'rohit_resources',
      linkedin: 'rohitkaul',
      email: 'rohit@redxmanipal.com',
    },
    {
      name: 'Sakshi Verma',
      role: 'Quality Assurance',
      phrase: 'Excellence is our standard',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      instagram: 'sakshi_qa',
      linkedin: 'sakshiverma',
      email: 'sakshi@redxmanipal.com',
    },
    {
      name: 'Deepak Singh',
      role: 'Innovation Lead',
      phrase: 'Tomorrow starts today',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
      instagram: 'deepak_innovation',
      linkedin: 'deepaksingh',
      email: 'deepak@redxmanipal.com',
    },
    {
      name: 'Ritika Ahuja',
      role: 'Communication Specialist',
      phrase: 'Clear voice, clear vision',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      instagram: 'ritika_comm',
      linkedin: 'ritikaahuja',
      email: 'ritika@redxmanipal.com',
    },
  ];

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
      <section className="py-20 redx-gradient">
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

      {/* Executive Board */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Executive Board</h2>
            <p className="text-xl text-red-300">Leading Red-X with vision and dedication</p>
            <div className="w-20 h-1 bg-red-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {executiveBoard.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-red-600/30 rounded-2xl p-6 hover-lift text-center animate-fade-in-up glow-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-2 border-red-600/50"
                />
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-red-400 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4 italic">"{member.phrase}"</p>
                
                <div className="flex justify-center space-x-2">
                  <SocialLink
                    href={`https://instagram.com/${member.instagram}`}
                    icon={Instagram}
                    label="Instagram"
                  />
                  <SocialLink
                    href={`https://linkedin.com/in/${member.linkedin}`}
                    icon={Linkedin}
                    label="LinkedIn"
                  />
                  <SocialLink
                    href={`mailto:${member.email}`}
                    icon={Mail}
                    label="Email"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Board Members</h2>
            <p className="text-xl text-red-300">The backbone of our operations</p>
            <div className="w-20 h-1 bg-red-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-red-600/30 rounded-xl p-6 hover-lift text-center animate-fade-in-up glow-effect"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-red-600/30"
                />
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-red-400 font-medium text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-xs mb-3 italic">"{member.phrase}"</p>
                
                <div className="flex justify-center space-x-2">
                  <SocialLink
                    href={`https://instagram.com/${member.instagram}`}
                    icon={Instagram}
                    label="Instagram"
                  />
                  <SocialLink
                    href={`https://linkedin.com/in/${member.linkedin}`}
                    icon={Linkedin}
                    label="LinkedIn"
                  />
                  <SocialLink
                    href={`mailto:${member.email}`}
                    icon={Mail}
                    label="Email"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Committee */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Management Committee</h2>
            <p className="text-xl text-red-300">Supporting our mission every step of the way</p>
            <div className="w-20 h-1 bg-red-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {managementCommittee.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-red-600/30 rounded-xl p-4 hover-lift text-center animate-fade-in-up glow-effect"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 rounded-full mx-auto mb-2 object-cover border border-red-600/30"
                />
                <h3 className="text-sm font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-red-400 font-medium text-xs mb-1">{member.role}</p>
                <p className="text-gray-400 text-xs mb-2 italic">"{member.phrase}"</p>
                
                <div className="flex justify-center space-x-1">
                  <a
                    href={`https://instagram.com/${member.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 bg-gray-700 hover:bg-red-600 rounded text-gray-400 hover:text-white transition-colors"
                  >
                    <Instagram size={12} />
                  </a>
                  <a
                    href={`https://linkedin.com/in/${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 bg-gray-700 hover:bg-red-600 rounded text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin size={12} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-1 bg-gray-700 hover:bg-red-600 rounded text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail size={12} />
                  </a>
                </div>
              </div>
            ))}
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
