import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, Linkedin, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export default function Projects() {
  return (
    <div className="relative min-h-screen">
      {/* Projects Section */}
      <ProjectsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const teams = [
    {
      name: 'K-Track',
      leader: 'Vidur Mushran & Sarah Rundquist',
      members: ['Paco Borromeo', 'Audrey Chang', 'San Gurappa', 'Sean Lee', 'Katie Spitzer'],
      description: 'A way to measure potassium levels at home for patients in rural settings in order to save patient time and enable frequent vital monitoring.',
      status: 'Active'
    },
    {
      name: 'ATH',
      leader: 'Shreya Parikh',
      members: ['Eddie Kim', 'Hannah Lee', 'Delara Esfarjani', 'Jalan Zhu', 'Viren Mehta', 'Tsion Aredo'],
      description: 'A way to collect and maintain health data for mobile clinics in order to provide more comprehensive care for the Los Angeles homeless population.',
      status: 'Active'
    },
    {
      name: 'Audrey & Amee\'s Team',
      leader: 'Audrey Lau & Amee Van',
      members: ['Charles Simon', 'Jade Arciniega', 'Leo Crampe', 'Devaki Mennon', 'Leah Moore'],
      description: 'A way to monitor the progression of hypesthesia at home for peripheral neuropathy patients in order to inform clinicians before irreversible nerve damage occurs.',
      status: 'Active'
    },
    {
      name: 'Anay\'s Team',
      leader: 'Anay Gupta',
      members: ['Jessica Mai', 'Vedika Kothari', 'Lilly Shui', 'Cooper Segall', 'Sridershani Anandraj', 'Mahlet Messay'],
      description: 'A way to continuously monitor respiratory and environmental health in pediatric asthma patients in order to prevent acute asthma attacks and reduce hospital visits.',
      status: 'Active'
    },
    {
      name: 'Kaaya\'s Team',
      leader: 'Kaaya Minocha',
      members: ['Hridaya Saravanan', 'Rory McKay', 'Alethea Nagahara', 'Brenda Aguirre Santeliz', 'Carmen Arevalo Carballo'],
      description: 'A way to address the lack of patient-doctor communication and practice done by stroke patients at home in order to encourage at-home practice and fast-track recovery.',
      status: 'Active'
    },
    {
      name: 'Gerson\'s Team',
      leader: 'Gerson Estrada',
      members: ['Alana Desai', 'Toshi Nagai', 'Ishaani Pradeep', 'Matthew Layne', 'Catherine Hartman', 'Shifa Fayyaz'],
      description: 'A way to address a lack of ultrasound image standardization in the abdominal region that enables operators to acquire consistent, accurate and high quality data for reliable diagnoses.',
      status: 'Active'
    },
    {
      name: 'Independent A',
      leader: null,
      members: ['Chloe Xia', 'Claire Schulze', 'Aiden Pan', 'Janelle Hurtado', 'Kaavya Gupta'],
      description: 'A way to stabilize the contraceptive implant from migrating in order to prevent damage to muscular or neurovascular structures in the body.',
      status: 'Active'
    },
    {
      name: 'Independent B',
      leader: null,
      members: ['Amelie Tangtam', 'Anaaya Singhania', 'Christina Yiting Wang', 'India Nasrala', 'Rocky Yang'],
      description: 'A way to monitor foot blood flow in people with diabetic nerve damage in order to catch pre-ulcer problems early and prevent amputations.',
      status: 'Active'
    }
  ];

  return (
    <section ref={ref} className="relative pt-40 pb-32 px-6 min-h-screen">
      <div className="max-w-[1400px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-center text-white px-4" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
            OUR <span className="text-[#9d2235]">PROJECTS</span>
          </h2>
          <p className="text-center text-lg text-white/60 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Innovative medical device solutions created by our talented design teams
          </p>
        </motion.div>

        {/* Design Teams Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="relative backdrop-blur-md bg-white/[0.05] border border-white/[0.12] rounded-3xl p-12 hover:bg-white/[0.07] hover:border-[#9d2235]/30 transition-all duration-300">
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#9d2235]/10 to-transparent opacity-50" />
            
            <div className="relative z-10 text-center">
              <h3 
                className="text-5xl font-black text-white mb-4" 
                style={{ fontFamily: 'Archivo Black, sans-serif' }}
              >
                Design Teams
              </h3>
              <p 
                className="text-2xl text-white/70 mb-3 font-medium" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Run by Students, Led by Students
              </p>
              <p 
                className="text-lg text-white/50" 
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Learn more about our projects!
              </p>
            </div>

            {/* Accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#9d2235] to-transparent rounded-b-3xl" />
          </div>
        </motion.div>

        {/* Projects Grid - Placeholder for actual projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 relative"
        >
          {teams.map((team, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.06] hover:border-[#9d2235]/40 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9d2235]/10 via-transparent to-transparent" />
              </div>

              {/* Accent line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9d2235] via-[#9d2235]/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + idx * 0.1 }}
                style={{ transformOrigin: 'left' }}
              />

              <div className="relative z-10">
                {/* Status badge */}
                <div className="flex items-center justify-between mb-6">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-[#9d2235]/20 border border-[#9d2235]/30 rounded-full text-xs tracking-[0.15em] text-[#9d2235] uppercase font-medium"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {team.status}
                  </motion.span>
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#9d2235] shadow-lg shadow-[#9d2235]/50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Team name */}
                <h4
                  className="text-3xl font-black text-white mb-4 group-hover:text-[#9d2235] transition-colors duration-300"
                  style={{ fontFamily: 'Archivo Black, sans-serif' }}
                >
                  {team.name}
                </h4>

                {/* Team lead */}
                {team.leader && (
                  <div className="mb-4 pb-4 border-b border-white/[0.08]">
                    <p className="text-xs tracking-[0.15em] text-white/40 uppercase mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Team Lead{team.leader.includes('&') ? 's' : ''}
                    </p>
                    <p className="text-sm font-medium text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {team.leader}
                    </p>
                  </div>
                )}

                {/* Members */}
                <div className="mb-6">
                  <p className="text-xs tracking-[0.15em] text-white/40 uppercase mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Team Members ({team.members.length})
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {team.members.map((member, memberIdx) => (
                      <motion.span
                        key={memberIdx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.6 + idx * 0.1 + memberIdx * 0.05 }}
                        className="px-2.5 py-1 bg-white/[0.05] border border-white/[0.08] rounded-full text-xs text-white/60 hover:bg-white/[0.08] hover:text-white/90 transition-all duration-200"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {member}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-sm text-white/60 leading-relaxed mb-6"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {team.description}
                </p>

                {/* Learn more button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm font-semibold text-[#9d2235] hover:text-white transition-colors group/btn"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span>Explore Project</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#9d2235]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Historical Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.3 }}
              className="text-5xl md:text-6xl font-black mb-4"
              style={{ fontFamily: 'Archivo Black, sans-serif' }}
            >
              <span className="text-white">Historical</span> <span className="text-[#9d2235]">Projects</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.4 }}
              className="text-lg text-white/50 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Our legacy of innovation and impact in medical device design
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="relative backdrop-blur-md bg-white/[0.02] border border-white/[0.05] rounded-3xl p-16 text-center overflow-hidden"
          >
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#9d2235]/5 via-transparent to-transparent opacity-50" />
            
            {/* Grid pattern overlay */}
            <div 
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}
            />

            <div className="relative z-10">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mb-8 inline-block"
              >
                <div className="text-6xl mb-4">🏆</div>
              </motion.div>
              
              <h4
                className="text-3xl font-black text-white mb-4"
                style={{ fontFamily: 'Archivo Black, sans-serif' }}
              >
                A Decade of Innovation
              </h4>
              
              <p
                className="text-lg text-white/60 max-w-2xl mx-auto mb-8 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Since 2015, MEDesign has launched over 50+ medical device projects
                and created solutions that have made real-world impact in healthcare settings.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {[
                  { number: '40+', label: 'Projects Completed' },
                  { number: '400+', label: 'Students Involved' },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.6 + idx * 0.1 }}
                    className="backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-2xl px-8 py-6 min-w-[160px]"
                  >
                    <div
                      className="text-3xl font-black text-[#9d2235] mb-2"
                      style={{ fontFamily: 'Archivo Black, sans-serif' }}
                    >
                      {stat.number}
                    </div>
                    <div
                      className="text-xs tracking-wide text-white/50 uppercase"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link to="/projects/archive">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/[0.05] border border-white/[0.1] rounded-full text-white font-medium hover:bg-white/[0.08] hover:border-[#9d2235]/50 transition-all duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  View Project Archive
                </motion.button>
              </Link>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#9d2235]/20 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#9d2235]/20 rounded-br-3xl" />
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="backdrop-blur-md bg-white/[0.02] border border-white/[0.05] rounded-3xl p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-black mb-4" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
              Join a <span className="text-[#9d2235]">Design Team</span>
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Work alongside passionate innovators to create medical devices that make a real impact. 
              Our design teams tackle real-world healthcare challenges from concept to prototype.
            </p>
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSflljqcB2uXECcqxDvtGPUZC9bqxzunY8SC3zilLCaTPTyY6A/viewform?usp=send_form"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-[#9d2235] rounded-full text-white font-medium shadow-lg shadow-[#9d2235]/20"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Apply Now
            </motion.a>
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