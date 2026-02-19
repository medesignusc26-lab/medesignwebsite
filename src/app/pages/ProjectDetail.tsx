import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link, useParams, Navigate } from 'react-router';
import { ArrowLeft, User, Calendar, Award, Pause } from 'lucide-react';
import { getProjectById } from '../data/projectsData';

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return <Navigate to="/projects/archive" replace />;
  }

  // Determine which archive year page to link back to
  const getBackLink = () => {
    switch (project.year) {
      case '2023-2024':
        return '/projects/archive/2023-2024';
      case '2020-2021':
        return '/projects/archive/2020-2021';
      case '2019-2020':
        return '/projects/archive/2019-2020';
      default:
        return '/projects/archive';
    }
  };

  return (
    <section ref={ref} className="relative pt-40 pb-32 px-6 min-h-screen">
      <div className="max-w-[1100px] mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link to={getBackLink()}>
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to {project.year}</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="mb-16"
        >
          {/* On Hold Badge */}
          {project.onHold && (
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className="mb-6"
            >
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 blur-lg opacity-50" />
                <div className="relative px-4 py-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full text-sm font-black uppercase tracking-wide text-black shadow-lg flex items-center gap-2" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                  <Pause size={18} strokeWidth={3} />
                  On Hold
                </div>
              </div>
            </motion.div>
          )}

          {/* Best Design Badge */}
          {project.bestDesign && (
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className="mb-6"
            >
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 blur-lg opacity-50" />
                <div className="relative px-4 py-2 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full text-sm font-black uppercase tracking-wide text-black shadow-lg flex items-center gap-2" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                  <Award size={18} strokeWidth={3} />
                  Best Design Award
                </div>
              </div>
            </motion.div>
          )}

          {/* Year Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#9d2235]/20 border border-[#9d2235]/30 rounded-full text-sm tracking-wide font-medium text-[#9d2235]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Calendar size={16} strokeWidth={2} />
              {project.year}
            </div>
          </motion.div>
          
          {/* Project Name */}
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl font-black mb-8 ${
              project.onHold ? 'text-orange-400' : project.bestDesign ? 'text-yellow-400' : 'text-white'
            }`}
            style={{ fontFamily: 'Archivo Black, sans-serif' }}
          >
            {project.name}
          </h1>

          {/* Team Lead Info */}
          <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 inline-block">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl ${
                project.onHold
                  ? 'bg-orange-400/20 border-orange-400/30'
                  : project.bestDesign 
                  ? 'bg-yellow-400/20 border-yellow-400/30' 
                  : 'bg-[#9d2235]/20 border-[#9d2235]/30'
              } border flex items-center justify-center`}>
                <User size={24} className={project.onHold ? 'text-orange-400' : project.bestDesign ? 'text-yellow-400' : 'text-[#9d2235]'} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] text-white/40 uppercase mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Team Lead{project.leader.includes('&') ? 's' : ''}
                </p>
                <p className="text-lg font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {project.leader}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="backdrop-blur-md bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 md:p-12"
        >
          {/* Section Title */}
          <div className="mb-8">
            <h2 
              className="text-3xl font-black text-[#9d2235] mb-2" 
              style={{ fontFamily: 'Archivo Black, sans-serif' }}
            >
              Project Overview
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#9d2235] to-transparent rounded-full" />
          </div>

          {/* Description Text */}
          <div 
            className="text-white/80 text-base md:text-lg leading-relaxed space-y-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {project.description.split('\n\n').map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + idx * 0.1 }}
                className="text-white/70 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Team Members Section (if available) */}
        {project.teamMembers && project.teamMembers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-12 backdrop-blur-md bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 md:p-12"
          >
            <div className="mb-8">
              <h2 
                className="text-3xl font-black text-[#9d2235] mb-2" 
                style={{ fontFamily: 'Archivo Black, sans-serif' }}
              >
                Team Members
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#9d2235] to-transparent rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {project.teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + idx * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-[#9d2235]" />
                  <p className="text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {member}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link to={getBackLink()}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#9d2235] rounded-full text-white font-medium shadow-lg hover:shadow-[#9d2235]/50 transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View More Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}