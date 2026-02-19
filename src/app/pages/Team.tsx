import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, Linkedin, Facebook, Instagram } from 'lucide-react';
// Import available cutout images from assets (optimized PNG with transparency)
import audreyLauCutout from '@/assets/a42de094dce3acdec21d3867d03c593a67ffeeb6.png';
import sammitaCutout from '@/assets/74c7a4ace26f09377cdb53e9e79382f323a34cc0.png';
import sarahCutout from '@/assets/e52b3dbf635e5900f34577819cbd697682e529c8.png';
import jessicaCutout from '@/assets/d37fe1846146fd74d2b62716216bb137ca273bc9.png';
import audreyChangCutout from '@/assets/e47bad47ed999053ab6f5d2bfd5dea29398bab9d.png';
import pacoCutout from '@/assets/4ce2a73330291a77ba9a56d5258ba09417ff15ac.png';
import ishanniCutout from '@/assets/c1c309aedbfcdd9974904e7476ca1a9c3c75336f.png';
import eddieCutout from '@/assets/7cc6d44b3a9d5e135b28ff9ee59fc2dbebac2164.png';
import seanLeeCutout from '@/assets/a852776e8c80486db79a373f3f7c975bb02aeb41.png';
import toshiCutout from '@/assets/2b8db8cc73e80f06bc5bbf62851070a63e768191.png';

export default function Team() {
  return (
    <div className="relative">
      {/* Executive Board */}
      <ExecutiveBoard />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function ExecutiveBoard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const boardMembers = [
    {
      name: 'Audrey Lau',
      role: 'Co-President',
      major: 'Biomedical Engineering',
      year: 'Senior',
      email: 'lauaudre@usc.edu',
      linkedin: '#',
      image: audreyLauCutout,
      cutout: audreyLauCutout,
    },
    {
      name: 'Samhita Suripeddi',
      role: 'Co-President',
      major: 'Biomedical Engineering',
      year: 'Senior',
      email: 'shurpfoo@usc.edu',
      linkedin: '#',
      image: sammitaCutout,
      cutout: sammitaCutout,
    },
    {
      name: 'Sarah Rundquist',
      role: 'Design Team Manager',
      major: 'Biomedical Engineering',
      minor: 'Spanish',
      year: 'Sophomore',
      email: 'srundqui@usc.edu',
      linkedin: '#',
      image: sarahCutout,
      cutout: sarahCutout,
    },
    {
      name: 'Jessica Mai',
      role: 'Public Relations & Graphic Design Chair',
      major: 'Biomedical Engineering',
      year: 'Senior',
      email: 'jcmai@usc.edu',
      linkedin: '#',
      image: jessicaCutout,
      cutout: jessicaCutout,
    },
    {
      name: 'Audrey Chang',
      role: 'Corporate Chair',
      major: 'Biomedical Engineering',
      year: 'Senior',
      email: 'audreyc@usc.edu',
      linkedin: '#',
      image: audreyChangCutout,
      cutout: audreyChangCutout,
    },
    {
      name: 'Paco Borromeo',
      role: 'Social Chair',
      major: 'Biotechnology',
      minor: 'AI Applications',
      year: 'Senior',
      email: 'pborrome@usc.edu',
      linkedin: '#',
      image: pacoCutout,
      cutout: pacoCutout,
    },
    {
      name: 'Ishaani Pradeep',
      role: 'VP/EDI Liaison',
      major: 'Biomedical Engineering',
      minor: 'Cinematic Arts',
      year: 'Senior',
      email: 'ipradeep@usc.edu',
      linkedin: '#',
      image: ishanniCutout,
      cutout: ishanniCutout,
    },
    {
      name: 'Eddie Kim',
      role: 'Treasurer',
      major: 'Biomedical Engineering',
      year: 'Senior',
      email: 'eddiekim@usc.edu',
      linkedin: '#',
      image: eddieCutout,
      cutout: eddieCutout,
    },
    {
      name: 'Sean Lee',
      role: 'New Member Representative',
      major: 'Biomedical Engineering',
      year: 'Freshman',
      email: 'slee9547@usc.edu',
      linkedin: 'https://www.linkedin.com/in/sean-long-siang-lee-9bbab8373/',
      image: seanLeeCutout,
      cutout: seanLeeCutout,
    },
    {
      name: 'Toshi Nagai',
      role: 'New Member Representative',
      major: 'Biomedical Engineering',
      minor: 'Business Finance',
      year: 'Freshman',
      email: 'tnagai@usc.edu',
      linkedin: '#',
      image: toshiCutout,
      cutout: toshiCutout,
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
            EXECUTIVE <span className="text-[#9d2235]">BOARD</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {boardMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.3 + idx * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`group backdrop-blur-md bg-white/[0.02] rounded-3xl overflow-hidden relative transition-all duration-200 ease-out ${
                member.cutout ? 'hover:scale-110 hover:-translate-y-3' : ''
              }`}
              style={{
                border: member.cutout ? '1px solid rgba(255, 255, 255, 0.05)' : undefined,
              }}
            >
              {/* Animated border for cutout cards */}
              {member.cutout && (
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none z-0 border border-white/[0.05] group-hover:opacity-0 transition-opacity duration-200"
                />
              )}

              {!member.cutout && <div className="border border-white/[0.05] absolute inset-0 rounded-3xl pointer-events-none" />}

              {/* Image */}
              {member.cutout ? (
                // Special cutout design for members with cutout images
                <div className="relative h-52 md:h-64 overflow-hidden bg-gradient-to-b from-[#6d1825] to-black flex items-end justify-center">
                  <img
                    src={member.cutout}
                    alt={member.name}
                    className={`h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-200 ${
                      member.name === 'Toshi Nagai' ? 'scale-[1.50] object-[center_75%]' :
                      member.name === 'Jessica Mai' ? 'scale-[1.22] object-bottom' :
                      member.name === 'Ishanni Pradeep' ? 'scale-[1.23] object-bottom' :
                      member.name === 'Sarah Rundquist' ? 'scale-[1.05] object-bottom' :
                      member.name === 'Audrey Lau' ? 'scale-[1.06] object-bottom' :
                      member.name === 'Eddie Kim' ? 'scale-[1.05] object-bottom' :
                      member.name === 'Sammita Suripeddi' ? 'scale-[1.11] object-bottom' :
                      member.name === 'Paco Borromeo' ? 'scale-[1.12] object-bottom' :
                      member.name === 'Sean Lee' ? 'scale-[1.20] object-bottom' :
                      'scale-[1.20] object-bottom'
                    }`}
                    style={{ 
                      display: 'block',
                    }}
                  />
                  
                  {/* Social icons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                    >
                      <Mail size={16} />
                    </motion.a>
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                    >
                      <Linkedin size={16} />
                    </motion.a>
                  </div>
                </div>
              ) : (
                // Regular design for other members
                <div className="relative h-58 overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/70 to-transparent" />
                  
                  {/* Social icons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                    >
                      <Mail size={16} />
                    </motion.a>
                    <motion.a
                      href={member.linkedin}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                    >
                      <Linkedin size={16} />
                    </motion.a>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                  {member.name}
                </h3>
                <p className="text-[#9d2235] text-sm font-medium mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {member.role}
                </p>
                
                <div className="space-y-1 text-xs text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p>{member.major}</p>
                  {member.minor && <p>Minor: {member.minor}</p>}
                  <p>{member.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-20 px-6 border-t border-white/[0.05] bg-gradient-to-b from-black via-[#9d2235]/5 to-[#9d2235]/10">
      {/* Subtle red glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#9d2235]/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="text-2xl font-bold mb-4" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
              <span className="text-white">MEDesign</span>
            </div>
            <p className="text-sm text-white/50 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Empowering the next generation of medical device innovators at USC
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/company/medesign-usc' },
                { icon: Facebook, href: 'https://www.facebook.com/medesign.usc/' },
                { icon: Instagram, href: 'https://www.instagram.com/medesign.usc/?hl=en' },
                { icon: Mail, href: 'mailto:medesign@usc.edu' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#ff006e]/50 transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold mb-4 text-sm" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
              EXPLORE
            </h4>
            <div className="space-y-2">
              {['Projects', 'Team', 'Resources', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-white/50 hover:text-white transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold mb-4 text-sm" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
              STAY UPDATED
            </h4>
            <p className="text-xs text-white/50 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Get notified about events, projects, and opportunities
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm focus:outline-none focus:border-[#ff006e]/50 transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-[#9d2235] rounded-full text-white text-sm font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Join
              </motion.button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2026 USC MEDesign. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30" style={{ fontFamily: 'Inter, sans-serif' }}>
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}