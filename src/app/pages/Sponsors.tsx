import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Heart, Mail, Linkedin, Facebook, Instagram } from 'lucide-react';
import amiUSCLogo from '@/assets/51ef3735e4acf9d924a34e88585d99c74690f867.jpg';

export default function Sponsors() {
  return (
    <div className="relative min-h-screen">
      {/* Sponsors Section */}
      <SponsorsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function SponsorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const individualSponsors = [
    'Elizabeth and Andrew Brockman',
    'Carol and John Hamilton',
    'Lori Jenkins',
    'Lisa and Joseph Marks',
    'Kathleen Raftery',
    'Cynthia and Paul Yock',
  ];

  return (
    <section ref={ref} className="relative pt-32 md:pt-40 pb-20 md:pb-32 px-4 md:px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 text-center px-4" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
            OUR <span className="text-[#9d2235]">SPONSORS</span>
          </h2>
          <p className="text-center text-base md:text-lg text-white/60 max-w-2xl mx-auto px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            We are deeply grateful for the generous support of our sponsors who make our mission possible.
          </p>
        </motion.div>

        {/* Stationary AMI USC Sponsor */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-16 max-w-5xl mx-auto px-4"
        >
          <div className="relative backdrop-blur-md bg-white/[0.05] border border-white/[0.12] rounded-3xl p-6 md:p-12 hover:bg-white/[0.07] hover:border-[#9d2235]/30 transition-all duration-300">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#9d2235]/10 to-transparent opacity-50" />
            
            <div className="relative z-10 text-center">
              <div className="relative inline-block mb-4 px-6 md:px-12 py-6 md:py-8 rounded-2xl bg-white/20 backdrop-blur-sm max-w-full">
                {/* Subtle white glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-white blur-xl opacity-20" />
                
                <img 
                  src={amiUSCLogo} 
                  alt="AMI USC - Alfred E. Mann Institute for Biomedical Engineering" 
                  className="relative z-10 max-w-full w-full h-auto"
                  style={{ maxWidth: '800px' }}
                />
              </div>
              <p className="text-white/50 text-xs md:text-sm tracking-[0.2em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                PREMIER SPONSOR
              </p>
            </div>

            {/* Accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#9d2235] to-transparent rounded-b-3xl" />
          </div>
        </motion.div>

        {/* Animated scrolling individual sponsors - infinite loop */}
        {/* Mobile: Two rows */}
        <div className="relative overflow-hidden py-12 md:hidden">
          {/* First row - left to right */}
          <motion.div
            className="flex gap-4 mb-4"
            animate={{
              x: [0, -1800],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* First 3 sponsors duplicated */}
            {[...individualSponsors.slice(0, 3), ...individualSponsors.slice(0, 3), ...individualSponsors.slice(0, 3), ...individualSponsors.slice(0, 3)].map((sponsor, idx) => (
              <div
                key={idx}
                className="relative backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-6 hover:bg-white/[0.05] hover:border-[#9d2235]/30 transition-all duration-300 flex-shrink-0 min-w-[300px]"
              >
                <p 
                  className="text-xs tracking-[0.15em] text-[#9d2235]/70 mb-2 uppercase font-medium" 
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Individual Sponsor
                </p>
                <p 
                  className="text-lg font-medium text-white/90 whitespace-nowrap" 
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {sponsor}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#9d2235]/50 to-transparent" />
              </div>
            ))}
          </motion.div>

          {/* Second row - right to left (different sponsors) */}
          <motion.div
            className="flex gap-4"
            animate={{
              x: [-1800, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Last 3 sponsors duplicated */}
            {[...individualSponsors.slice(3, 6), ...individualSponsors.slice(3, 6), ...individualSponsors.slice(3, 6), ...individualSponsors.slice(3, 6)].map((sponsor, idx) => (
              <div
                key={idx}
                className="relative backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-6 hover:bg-white/[0.05] hover:border-[#9d2235]/30 transition-all duration-300 flex-shrink-0 min-w-[300px]"
              >
                <p 
                  className="text-xs tracking-[0.15em] text-[#9d2235]/70 mb-2 uppercase font-medium" 
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Individual Sponsor
                </p>
                <p 
                  className="text-lg font-medium text-white/90 whitespace-nowrap" 
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {sponsor}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#9d2235]/50 to-transparent" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop: Single row */}
        <div className="relative overflow-hidden py-12 hidden md:block">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -2400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate sponsors array 4 times for seamless loop without visible repeats */}
            {[...individualSponsors, ...individualSponsors, ...individualSponsors, ...individualSponsors].map((sponsor, idx) => (
              <div
                key={idx}
                className="relative backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-2xl px-8 md:px-10 py-8 md:py-10 hover:bg-white/[0.05] hover:border-[#9d2235]/30 transition-all duration-300 flex-shrink-0 min-w-[400px] md:min-w-[480px]"
              >
                <p 
                  className="text-xs tracking-[0.15em] text-[#9d2235]/70 mb-3 uppercase font-medium" 
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Individual Sponsor
                </p>
                <p 
                  className="text-xl md:text-2xl font-medium text-white/90 whitespace-nowrap" 
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {sponsor}
                </p>
                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#9d2235]/50 to-transparent" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-16 md:mt-20 text-center px-4"
        >
          <div className="backdrop-blur-md bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black mb-4" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
              Become a <span className="text-[#9d2235]">Sponsor</span>
            </h3>
            <p className="text-white/60 mb-6 md:mb-8 leading-relaxed text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
              Help us empower the next generation of medical device innovators. Your support enables students to 
              participate in competitions, develop groundbreaking projects, and transform healthcare.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-8 py-3 md:py-4 bg-[#9d2235] rounded-full text-white font-medium shadow-lg shadow-[#9d2235]/20 text-sm md:text-base"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
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