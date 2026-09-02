import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { Users, BookOpen, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { Footer } from '../components/Footer';

export default function Home() {
  // The hero stays pinned to the viewport for one scroll-height's worth of
  // scrolling; instead of the hero content translating/scaling away, it
  // blurs and a black overlay covers it (and the ambient aura behind it),
  // while the sections below scroll up on top of it.
  const heroPinRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroPinRef,
    offset: ["start start", "end start"],
  });

  const heroBlurPx = useTransform(heroProgress, [0, 1], [0, 24]);
  const heroFilter = useTransform(heroBlurPx, (v) => `blur(${v}px)`);
  const heroOverlayOpacity = useTransform(heroProgress, [0, 0.85], [0, 1]);

  return (
    <div className="relative">
      {/* Hero Section - pinned, blurs + darkens as the page scrolls past it */}
      <div ref={heroPinRef} className="relative" style={{ height: '100vh' }}>
        <motion.section
          style={{ filter: heroFilter }}
          className="fixed inset-0 z-0 flex items-center pt-32 pb-20 px-4 sm:px-6"
        >
          <div className="relative z-10 max-w-3xl mx-auto w-full text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-block px-4 py-1.5 bg-[#9d2235]/10 border border-[#9d2235]/20 rounded-sm mb-8">
                <span className="text-[15px] tracking-[0.2em] text-[#9d2235] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Medtech Startup Incubator
                </span>
              </div>

              <h1 className="mb-6" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                <div className="text-[68px] md:text-[100px] leading-[0.8] text-white">
                  MEDesign
                </div>
              </h1>

              <p className="text-lg md:text-xl text-white mb-3 mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                USC's Premier Medical Device Design Organization.
              </p>

              <p className="text-lg md:text-xl text-white mb-10 mx-auto leading-relaxed md:whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
                Transforming healthcare through hands-on medical device innovation
              </p>

              <div className="flex justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScgKzQqDRFuLBFW52iPGPvB7fC86KuCEkrTX5nL5x4dUa3Qmw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-lg md:text-xl text-white font-semibold transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(157,34,53,0.8)]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Apply F26
                  <ArrowRight size={18} className="text-[#9d2235] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Darkening overlay - covers the pinned hero and the aura behind it */}
        <motion.div
          className="fixed inset-0 z-[1] bg-black pointer-events-none"
          style={{ opacity: heroOverlayOpacity }}
        />

        {/* Gradient fade at the bottom of the pin zone - smooths the seam
            where the solid-black content below meets the hero above,
            instead of a hard-edged cut, in both scroll directions. */}
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] z-[2] bg-gradient-to-b from-transparent to-black pointer-events-none" />
      </div>

      {/* Scrollable content - slides up over the pinned hero */}
      <div className="relative z-10 bg-black">
        <AboutSection />
        <FeaturesSection />
        <Footer />
      </div>
    </div>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
              <p className="text-sm text-white/40 tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
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
            <div>
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

            {/* Stats row - no cards, just numbers */}
            <div className="flex flex-wrap gap-x-10 gap-y-6 mt-12">
              {[
                { label: 'Founded', value: '2015' },
                { label: 'Projects', value: '40+' },
                { label: 'Members', value: '50+' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-[#9d2235]" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
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

function FeaturesSection() {
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
              className="group bg-white/[0.02] border border-white/[0.05] rounded-sm p-5 relative overflow-hidden"
            >
              {/* Accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: feature.color }}
              />

              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
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
                  href="https://docs.google.com/forms/d/e/1FAIpQLScgKzQqDRFuLBFW52iPGPvB7fC86KuCEkrTX5nL5x4dUa3Qmw/viewform"
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
