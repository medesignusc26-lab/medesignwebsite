import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';
import { Footer } from '../components/Footer';
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

// New eboard images (place the attached PNGs into src/assets/ with these names)
import sarahNew from '@/assets/sarah.png';
import anayNew from '@/assets/anay.png';
import toshiNew from '@/assets/toshi.png';
import chloeNew from '@/assets/chloe.png';
import devakiNew from '@/assets/devaki.png';
import amelieNew from '@/assets/amelie.png';
import mahletNew from '@/assets/mahlet.png';
import katieNew from '@/assets/katie.png';
import virenNew from '@/assets/viren.png';
import anaayaNew from '@/assets/anaaya.png';

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
      name: 'Sarah Rundquist',
      role: 'Co-President',
      year: 'Junior',
      major: 'Biomedical Engineering',
      emphasis: 'Cellular & Molecular Emphasis',
      minor: undefined,
      email: '',
      linkedin: '#',
      image: sarahNew,
      cutout: sarahNew,
    },
    {
      name: 'Anay Gupta',
      role: 'Co-President',
      year: 'Senior',
      major: 'Biomedical Engineering',
      emphasis: 'Mechanical Emphasis',
      minor: 'AI Applications',
      email: '',
      linkedin: '#',
      image: anayNew,
      cutout: anayNew,
    },
    {
      name: 'Toshi Nagai',
      role: 'Design Team Manager',
      year: 'Sophomore',
      major: 'Biomedical Engineering',
      emphasis: 'Mechanical Emphasis',
      minor: undefined,
      email: '',
      linkedin: '#',
      image: toshiNew,
      cutout: toshiNew,
    },
    {
      name: 'Chloe Xia',
      role: 'Secretary',
      year: 'Junior',
      major: 'Computational Neuroscience',
      emphasis: undefined,
      minor: 'Mathematical Data Analysis',
      email: '',
      linkedin: '#',
      image: chloeNew,
      cutout: chloeNew,
    },
    {
      name: 'Devaki Menon',
      role: 'Treasurer',
      year: 'Junior',
      major: 'Biomedical Engineering',
      emphasis: 'Electrical Emphasis',
      minor: undefined,
      email: '',
      linkedin: '#',
      image: devakiNew,
      cutout: devakiNew,
    },
    {
      name: 'Amelie Tangtam',
      role: 'Public Relations Chair',
      year: 'Junior',
      major: 'Biomedical Engineering',
      emphasis: 'Electrical Emphasis',
      minor: undefined,
      email: '',
      linkedin: '#',
      image: amelieNew,
      cutout: amelieNew,
    },
    {
      name: 'Mahlet Messay',
      role: 'Corporate Chair',
      year: 'Junior',
      major: 'Biomedical Engineering',
      emphasis: 'Electrical Emphasis',
      minor: undefined,
      email: '',
      linkedin: '#',
      image: mahletNew,
      cutout: mahletNew,
    },
    {
      name: 'Katie Spitzer',
      role: 'Social Chair',
      year: 'Sophomore',
      major: 'Chemical Engineering',
      emphasis: undefined,
      minor: undefined,
      email: '',
      linkedin: '#',
      image: katieNew,
      cutout: katieNew,
    },
    {
      name: 'Viren Mehta',
      role: 'Technical Resources Chair',
      year: 'Senior',
      major: 'Computational Neuroscience and Biology',
      emphasis: undefined,
      minor: undefined,
      email: '',
      linkedin: '#',
      image: virenNew,
      cutout: virenNew,
    },
    {
      name: 'Anaaya Singhania',
      role: 'Viterbi Liaison',
      year: 'Sophomore',
      major: 'Chemical Engineering',
      emphasis: undefined,
      minor: undefined,
      email: '',
      linkedin: '#',
      image: anaayaNew,
      cutout: anaayaNew,
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
              className={`group bg-white/[0.02] rounded-sm overflow-hidden relative transition-all duration-200 ease-out ${
                member.cutout ? 'hover:scale-110 hover:-translate-y-3' : ''
              }`}
              style={{
                border: member.cutout ? '1px solid rgba(255, 255, 255, 0.05)' : undefined,
              }}
            >
              {/* Animated border for cutout cards */}
              {member.cutout && (
                <div
                  className="absolute inset-0 rounded-sm pointer-events-none z-0 border border-white/[0.05] group-hover:opacity-0 transition-opacity duration-200"
                />
              )}

              {!member.cutout && <div className="border border-white/[0.05] absolute inset-0 rounded-sm pointer-events-none" />}

              {/* Image */}
              {member.cutout ? (
                // Special cutout design for members with cutout images
                <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-[#6d1825] to-black">
                  <img
                    src={member.cutout}
                    alt={member.name}
                    className="h-full w-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-200"
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
                  <p>{member.year}</p>
                  <p>{member.major}</p>
                  {member.emphasis && <p>{member.emphasis}</p>}
                  {member.minor && <p>Minor: {member.minor}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
