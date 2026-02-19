import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { Users, BookOpen, Briefcase, Mail, Linkedin, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import medesignLogo from '@/assets/179d2a20003c71b4bead4df1dd9ff60e8e6a4edf.png';
import heartbeatPattern from '@/assets/d65ffa27844b18f43e95a2810cbd35d1a78b65f0.png';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero section: visible at start, fades out as we scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 0.3, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);

  // About section: fades in after hero, then fades out
  const aboutOpacity = useTransform(scrollYProgress, [0.18, 0.3, 0.5, 0.6], [0, 1, 1, 0]);
  const aboutY = useTransform(scrollYProgress, [0.18, 0.3], [50, 0]);

  // Features section: fades in after about
  const featuresOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.95], [0, 1, 1]);
  const featuresY = useTransform(scrollYProgress, [0.55, 0.65], [50, 0]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section - fades out first */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center pt-32 pb-20 px-4 sm:px-6"
      >
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, 200]) }}
          className="absolute inset-0 opacity-20"
        >
          <img
            src=""
            alt="MEDesign Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118] via-[#0a0118]/80 to-[#0a0118]" />
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left side - Text */}
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-block px-4 py-1.5 bg-[#9d2235]/10 border border-[#9d2235]/20 rounded-full mb-8">
                  <span className="text-[15px] tracking-[0.2em] text-[#9d2235] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    MEDTECH STARTUP INCUBATOR
                  </span>
                </div>

                <h1 className="mb-6" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                  <div className="text-[68px] md:text-[80px] leading-[0.8] text-[#9d2235] mb-2">
                    USC
                  </div>
                  <div className="text-[68px] md:text-[100px] leading-[0.8] text-white">
                    MEDesign
                  </div>
                </h1>

                <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Transforming healthcare through hands-on medical device innovation
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link to="/projects">
                    <motion.button
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="group px-8 py-4 bg-[#9d2235] rounded-full text-white font-medium flex items-center gap-2 shadow-lg shadow-[#9d2235]/20"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      View Projects
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <motion.button
                    onClick={() => {
                      const aboutSection = document.getElementById('about');
                      if (aboutSection) {
                        const offsetTop = aboutSection.getBoundingClientRect().top + window.scrollY - 20; // 20px offset for navbar
                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                      }
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white font-medium"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Right side - Decorative card */}
            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative mt-12 md:mt-0"
              >
                {/* Subtle outer glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#9d2235]/15 via-[#9d2235]/8 to-[#9d2235]/5 rounded-[2.5rem] blur-[40px] opacity-40" />
                
                {/* Glass card */}
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.12] rounded-[2rem] p-6 sm:p-8 overflow-hidden shadow-xl">
                  {/* Subtle inner gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent rounded-[2rem]" />
                  
                  {/* Content */}
                  <div className="relative flex flex-col items-center justify-center text-center">
                    {/* Heartbeat pattern - minimal animation */}
                    <motion.div
                      className="relative mb-6"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Glowing effect */}
                      <div className="absolute inset-0 blur-3xl bg-[#9d2235]/40 rounded-full scale-125" />
                      
                      {/* Heartbeat pattern - responsive sizing */}
                      <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center">
                        <img 
                          src={heartbeatPattern} 
                          alt="Heartbeat Pattern" 
                          className="w-full h-full object-contain"
                          style={{
                            filter: 'drop-shadow(0 0 20px rgba(157, 34, 53, 0.8)) drop-shadow(0 0 40px rgba(157, 34, 53, 0.4))'
                          }}
                        />
                      </div>
                    </motion.div>
                    
                    <div className="space-y-5 sm:space-y-6 w-full">
                      {/* Stat 1 */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-col items-center gap-2"
                      >
                        <div className="relative">
                          <div className="absolute inset-0 blur-md bg-[#9d2235]/50 rounded-full" />
                          <div className="relative w-3 h-3 rounded-full bg-[#9d2235] shadow-lg shadow-[#9d2235]/50" />
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Archivo Black, sans-serif' }}>                            
                            Founded in 2015
                          </div>
                          <div className="text-sm text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
                            10+ years of innovation
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Stat 2 */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.75, duration: 0.6 }}
                        className="flex flex-col items-center gap-2"
                      >
                        <div className="relative">
                          <div className="absolute inset-0 blur-md bg-[#ffcc00]/50 rounded-full" />
                          <div className="relative w-3 h-3 rounded-full bg-[#ffcc00] shadow-lg shadow-[#ffcc00]/50" />
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                            50+ Active Members
                          </div>
                          <div className="text-sm text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Diverse backgrounds
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Stat 3 */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="flex flex-col items-center gap-2"
                      >
                        <div className="relative">
                          <div className="absolute inset-0 blur-md bg-white/50 rounded-full" />
                          <div className="relative w-3 h-3 rounded-full bg-white shadow-lg shadow-white/50" />
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                            40+ Projects Launched
                          </div>
                          <div className="text-sm text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Real-world impact
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section - broken grid layout */}
      <AboutSection opacity={aboutOpacity} y={aboutY} />

      {/* Features - tilted cards */}
      <FeaturesSection opacity={featuresOpacity} y={featuresY} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function AboutSection({ opacity, y }: { opacity: any; y: any }) {
  return (
    <motion.section 
      id="about"
      style={{ opacity, y }}
      className="relative min-h-screen flex items-center py-32 px-6"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4"
          >
            <div className="sticky top-32">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                ABOUT<br />US
              </h2>
              <motion.div 
                className="w-16 h-1 bg-[#9d2235]"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              />
              <p className="mt-6 text-sm text-white/40 tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
                EST. 2015 / LOS ANGELES
              </p>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-8"
          >
            <div className="backdrop-blur-md bg-white/[0.02] border border-white/[0.05] rounded-3xl p-10 md:p-12">
              <p className="text-base md:text-lg leading-relaxed text-white/70 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="text-[#9d2235] font-medium">Founded in 2015</span>, MEDesign provides students with 
                hands-on medical device design experience by entering medical device design competitions, participating in 
                make-a-thons, and taking on independent medical device projects.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-white/70 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                We lead students through the entire process of creating a medical device from customer discovery to design 
                process, patents, and eventually product launching. MEDesign invites prestigious speakers to talk to our 
                club members about the medical device industry. Some of our previous guests include <span className="text-white font-medium">BME Professor Dr. Loeb</span> and <span className="text-white font-medium">Dr. Larry Yin</span> from LA Children's Hospital.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                Our club takes pride in the <span className="text-white font-medium">diversity of our students' interests</span> — 
                our members include business students, neuroscience majors, engineers, and even music majors! Join us at our next meeting!
              </p>
            </div>

            {/* Stats cards - irregular placement */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { label: 'Years Active', value: '10+', color: '#9d2235' },
                { label: 'Projects', value: '40+', color: '#9d2235' },
                { label: 'Members', value: '50+', color: '#9d2235' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  style={{ marginTop: `${idx * 12}px` }}
                  className="backdrop-blur-md bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold mb-1" style={{ color: stat.color, fontFamily: 'Archivo Black, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function FeaturesSection({ opacity, y }: { opacity: any; y: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const features = [
    {
      icon: BookOpen,
      title: 'Free Curriculum',
      subtitle: '& Resources',
      description: 'Access our comprehensive library of medical device design materials',
      buttonText: 'Access Drive',
      color: '#9d2235',
    },
    {
      icon: Briefcase,
      title: 'Projects',
      subtitle: '& Research',
      description: 'Join active projects solving real healthcare challenges',
      additionalInfo: {
        label: 'Design Teams',
        tagline: 'Run by Students, Led by Students',
        cta: 'Learn more about our projects!'
      },
      buttonText: 'View Projects',
      color: '#9d2235',
    },
    {
      icon: Users,
      title: 'Apply to',
      subtitle: 'Design Team',
      description: 'Collaborate with passionate innovators from diverse backgrounds',
      buttonText: 'Apply Now',
      color: '#9d2235',
    },
  ];

  return (
    <motion.section 
      ref={ref}
      style={{ opacity, y }}
      className="relative py-32 px-6"
    >
      <div className="max-w-[1400px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
            GET INVOLVED
          </h2>
          <p className="text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>Choose your path to innovation</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              animate={isInView ? { 
                opacity: 1, 
                x: 0, // Spread to their natural grid positions
                y: 0,
                scale: 1
              } : {
                opacity: 0, 
                x: idx === 0 ? 0 : idx === 1 ? -320 : -640, // Stack all at left position
                y: 0, 
                scale: 1 
              }}
              transition={{ 
                duration: 1.8, 
                delay: isInView ? idx * 0.4 : (2 - idx) * 0.4, // Reverse delay when stacking back
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group backdrop-blur-md bg-white/[0.02] border border-white/[0.05] rounded-3xl p-5 relative overflow-hidden"
            >
              {/* Accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: feature.color }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon size={36} style={{ color: feature.color }} strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Archivo Black, sans-serif', color: feature.color }}>
                {feature.title}
              </h3>
              <h4 className="text-2xl font-bold text-white/90 mb-3" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                {feature.subtitle}
              </h4>

              <p className="text-sm text-white/60 mb-5 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {feature.description}
              </p>

              {feature.additionalInfo && (
                <div className="text-sm text-white/50 mb-5 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="font-bold">{feature.additionalInfo.label}: </span>
                  {feature.additionalInfo.tagline} - {feature.additionalInfo.cta}
                </div>
              )}

              {feature.buttonText === 'View Projects' ? (
                <Link to="/projects">
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm font-medium group-hover:text-white transition-colors"
                    style={{ color: feature.color, fontFamily: 'Inter, sans-serif' }}
                  >
                    {feature.buttonText}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              ) : (
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSflljqcB2uXECcqxDvtGPUZC9bqxzunY8SC3zilLCaTPTyY6A/viewform?usp=send_form"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm font-medium group-hover:text-white transition-colors"
                  style={{ color: feature.color, fontFamily: 'Inter, sans-serif' }}
                >
                  {feature.buttonText}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
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