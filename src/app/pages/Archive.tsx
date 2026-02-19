import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router';
import { ChevronRight, Calendar, Award, ArrowLeft } from 'lucide-react';

export default function Archive() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const years = [
    { 
      year: '2023-2024', 
      path: '/projects/archive/2023-2024',
      projectCount: 7,
      highlight: true,
      available: true
    },
    { 
      year: '2022-2023', 
      path: '#',
      projectCount: 8,
      highlight: false,
      available: false
    },
    { 
      year: '2021-2022', 
      path: '#',
      projectCount: 6,
      highlight: false,
      available: false
    },
    { 
      year: '2020-2021', 
      path: '/projects/archive/2020-2021',
      projectCount: 8,
      highlight: false,
      available: true
    },
    { 
      year: '2019-2020', 
      path: '/projects/archive/2019-2020',
      projectCount: 3,
      highlight: false,
      available: true
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
          <Link to="/projects">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Projects</span>
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
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#9d2235]/20 to-[#9d2235]/5 border border-[#9d2235]/30 flex items-center justify-center mx-auto">
              <Award size={40} className="text-[#9d2235]" strokeWidth={1.5} />
            </div>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
            PROJECT <span className="text-[#9d2235]">ARCHIVE</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Explore our legacy of innovation across the years
          </p>
        </motion.div>

        {/* Year Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {years.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
            >
              {item.available ? (
                <Link to={item.path}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`group relative backdrop-blur-md ${
                      item.highlight 
                        ? 'bg-gradient-to-br from-[#9d2235]/10 to-white/[0.03] border-[#9d2235]/30' 
                        : 'bg-white/[0.02] border-white/[0.08]'
                    } border rounded-3xl p-8 hover:bg-white/[0.06] transition-all duration-500 overflow-hidden cursor-pointer`}
                  >
                    {/* Gradient glow on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#9d2235]/10 via-transparent to-transparent" />
                    </div>

                    {/* Highlight Badge */}
                    {item.highlight && (
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                        className="absolute top-4 right-4 px-3 py-1 bg-[#9d2235] rounded-full text-xs font-medium"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Latest
                      </motion.div>
                    )}

                    <div className="relative z-10">
                      {/* Calendar Icon */}
                      <div className={`w-14 h-14 rounded-xl ${
                        item.highlight 
                          ? 'bg-[#9d2235]/20 border-[#9d2235]/30' 
                          : 'bg-white/[0.05] border-white/[0.1]'
                      } border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Calendar size={28} className={item.highlight ? 'text-[#9d2235]' : 'text-white/60'} strokeWidth={1.5} />
                      </div>

                      {/* Year */}
                      <h3
                        className={`text-4xl font-black mb-3 ${
                          item.highlight ? 'text-[#9d2235]' : 'text-white'
                        } group-hover:text-[#9d2235] transition-colors duration-300`}
                        style={{ fontFamily: 'Archivo Black, sans-serif' }}
                      >
                        {item.year}
                      </h3>

                      {/* Project Count */}
                      <div className="flex items-center gap-2 mb-6">
                        <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                        <p className="text-sm text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {item.projectCount} Projects
                        </p>
                      </div>

                      {/* View Link */}
                      <motion.div
                        className="flex items-center gap-2 text-sm font-medium"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <span className={item.highlight ? 'text-[#9d2235]' : 'text-white/70 group-hover:text-white'}>
                          View Projects
                        </span>
                        <ChevronRight 
                          size={16} 
                          className="group-hover:translate-x-1 transition-transform" 
                        />
                      </motion.div>
                    </div>

                    {/* Accent Corner */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#9d2235]/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </Link>
              ) : (
                <motion.div
                  className="group relative backdrop-blur-md bg-white/[0.02] border border-white/[0.08] rounded-3xl p-8 overflow-hidden opacity-60"
                >
                  {/* Coming Soon Badge */}
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                    className="absolute top-4 right-4 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white/70"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Coming Soon
                  </motion.div>

                  <div className="relative z-10">
                    {/* Calendar Icon */}
                    <div className="w-14 h-14 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-6">
                      <Calendar size={28} className="text-white/40" strokeWidth={1.5} />
                    </div>

                    {/* Year */}
                    <h3
                      className="text-4xl font-black mb-3 text-white/50"
                      style={{ fontFamily: 'Archivo Black, sans-serif' }}
                    >
                      {item.year}
                    </h3>

                    {/* Project Count */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                      <p className="text-sm text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.projectCount} Projects
                      </p>
                    </div>

                    {/* Coming Soon Text */}
                    <p className="text-sm text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Archive in progress
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="backdrop-blur-md bg-white/[0.02] border border-white/[0.05] rounded-3xl p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { number: '50+', label: 'Total Projects' },
                { number: '10', label: 'Years Active' },
                { number: '400+', label: 'Students' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + idx * 0.1 }}
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