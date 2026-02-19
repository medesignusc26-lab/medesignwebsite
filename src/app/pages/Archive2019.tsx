import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft, User, Pause } from 'lucide-react';

export default function Archive2019() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const projects = [
    {
      name: 'Uroflowmetry',
      leader: 'Mike Peterson',
      onHold: false,
      id: 'uroflowmetry',
    },
    {
      name: 'Muscle Fatigue',
      leader: 'Jake Basilico',
      onHold: false,
      id: 'muscle-fatigue',
    },
    {
      name: 'Epipen Drug Delivery',
      leader: 'Anokhi Kholwadwala',
      onHold: true,
      id: 'epipen',
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
            <span className="text-white">2019-2020</span> <span className="text-[#9d2235]">PROJECTS</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Three exceptional medical device solutions developed by our talented teams
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative backdrop-blur-md ${
                  project.onHold 
                    ? 'bg-gradient-to-br from-[#9d2235]/10 to-white/[0.03] border-[#9d2235]/30' 
                    : 'bg-white/[0.03] border-white/[0.08]'
                } border rounded-3xl p-8 hover:bg-white/[0.06] hover:border-[#9d2235]/40 transition-all duration-500 overflow-hidden cursor-pointer h-full`}
              >
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9d2235]/10 via-transparent to-transparent" />
                </div>

                {/* On Hold Badge */}
                {project.onHold && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + idx * 0.1, type: "spring" }}
                    className="absolute top-4 right-4"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 blur-lg opacity-50" />
                      <div className="relative px-3 py-1.5 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full text-xs font-black uppercase tracking-wide text-black shadow-lg flex items-center gap-1.5" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                        <Pause size={14} strokeWidth={3} />
                        On Hold
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Accent line */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    project.onHold 
                      ? 'from-orange-500 via-[#9d2235] to-transparent' 
                      : 'from-[#9d2235] via-[#9d2235]/50 to-transparent'
                  }`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
                  style={{ transformOrigin: 'left' }}
                />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Project Name */}
                  <h3
                    className={`text-3xl font-black mb-6 flex-grow transition-colors duration-300 ${
                      project.onHold 
                        ? 'text-[#9d2235] group-hover:text-orange-400' 
                        : 'text-white group-hover:text-[#9d2235]'
                    }`}
                    style={{ fontFamily: 'Archivo Black, sans-serif' }}
                  >
                    {project.name}
                  </h3>

                  {/* Team Lead */}
                  <div className="pt-4 border-t border-white/[0.08]">
                    <div className="flex items-center gap-2 mb-2">
                      <User size={16} className={project.onHold ? 'text-orange-400' : 'text-[#9d2235]'} strokeWidth={2} />
                      <p className="text-xs tracking-[0.15em] text-white/40 uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Team Lead
                      </p>
                    </div>
                    <p className="text-base font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {project.leader}
                    </p>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${
                  project.onHold 
                    ? 'from-orange-500/10' 
                    : 'from-[#9d2235]/5'
                } to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
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
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { number: '3', label: 'Projects Completed' },
                { number: '15+', label: 'Students Involved' },
                { number: '1', label: 'On Hold' },
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