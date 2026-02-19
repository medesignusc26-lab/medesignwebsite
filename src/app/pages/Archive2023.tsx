import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft, User } from 'lucide-react';

export default function Archive2023() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const projects = [
    {
      name: 'Motor Memory',
      leader: 'Karen Chu',
      id: 'motor-memory',
      members: ['Mustafa Munshi', 'Eric Almendral', 'Vidur Mushran', 'Anisha Sheth', 'Svara Shah'],
    },
    {
      name: 'ADA Prosthetics',
      leader: 'Patrick Nowlen Sr.',
      id: 'ada-prosthetics',
      members: ['Fin Prakittiphoom', 'James Kok', 'Emily Lai', 'Sam Doane', 'Tej Desai'],
    },
    {
      name: 'PulseSC',
      leader: 'Katherine Sweetland',
      id: 'pulse-sc',
      members: ['Greg Rosenkranz', 'Caroline Jiang', 'Brenda Santeliz', 'Samhita Surpeddi', 'Jessica Mai'],
    },
    {
      name: 'HerScope',
      leader: 'Ryanna Lui',
      id: 'herscope',
      members: ['Arjun Karnwal', 'Eddie Kim', 'Joseph Kim', 'Lindsay Best', 'Shreya Parikh'],
    },
    {
      name: 'Happy Feet',
      leader: 'Michael Kim',
      id: 'happy-feet',
      members: ['Sarah Hwang', 'Hannah Lee', 'Charles Luo', 'Noelle Lehrman', 'Kaaya Minocha'],
    },
    {
      name: 'Sarcopenia',
      leader: 'Adithi Desham',
      id: 'sarcopenia',
      members: ['Hannah Lee', 'Audrey Lau', 'Misha Faruki', 'Maria Elena Moscaira'],
    },
    {
      name: 'Spine Align',
      leader: 'Matthew Layne',
      id: 'spine-align',
      members: ['Jonathan You', 'Cindy Nguyen', 'Reeth Kawad', 'Chris Park', 'Angelina Choi', 'Wanfang Qi'],
    },
  ];

  return (
    <section ref={ref} className="relative pt-40 pb-32 px-6 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link to="/projects/archive">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Archive</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-block px-4 py-2 bg-[#9d2235]/20 border border-[#9d2235]/30 rounded-full text-sm tracking-wide font-medium text-[#9d2235]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Academic Year
            </div>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
            <span className="text-white">2023-2024</span> <span className="text-[#9d2235]">PROJECTS</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Seven innovative medical device solutions developed by our talented teams
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-3xl overflow-hidden hover:bg-white/[0.06] hover:border-[#9d2235]/40 transition-all duration-500 cursor-pointer"
              >
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9d2235]/10 via-transparent to-transparent" />
                </div>

                {/* Project Details */}
                <div className="relative z-10 p-8">
                  {/* Project Name */}
                  <h3
                    className="text-4xl font-black text-white group-hover:text-[#9d2235] transition-colors duration-300 mb-6"
                    style={{ fontFamily: 'Archivo Black, sans-serif' }}
                  >
                    {project.name}
                  </h3>

                  {/* Team Lead */}
                  <div className="mb-4 pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2 mb-2">
                      <User size={16} className="text-[#9d2235]" strokeWidth={2} />
                      <p className="text-xs tracking-[0.15em] text-white/40 uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Team Lead
                      </p>
                    </div>
                    <p className="text-base font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {project.leader}
                    </p>
                  </div>

                  {/* Team Members */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <User size={16} className="text-[#9d2235]" strokeWidth={2} />
                      <p className="text-xs tracking-[0.15em] text-white/40 uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Team Members ({project.members.length})
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.members.map((member, memberIdx) => (
                        <motion.span
                          key={memberIdx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 + memberIdx * 0.05 }}
                          className="px-3 py-1.5 bg-white/[0.05] border border-white/[0.08] rounded-full text-xs text-white/70 hover:bg-white/[0.08] hover:text-white hover:border-[#9d2235]/30 transition-all duration-200"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {member}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#9d2235]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-20"
        >
          <div className="backdrop-blur-md bg-white/[0.02] border border-white/[0.05] rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              {[
                { number: '7', label: 'Projects Completed' },
                { number: '35+', label: 'Students Involved' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.1 + idx * 0.1 }}
                >
                  <div
                    className="text-5xl font-black text-[#9d2235] mb-2"
                    style={{ fontFamily: 'Archivo Black, sans-serif' }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-sm tracking-wide text-white/50 uppercase"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}