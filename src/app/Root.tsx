import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router';
import { motion } from 'motion/react';
import { Menu, X, Heart } from 'lucide-react';
import heartbeatPattern from 'figma:asset/d65ffa27844b18f43e95a2810cbd35d1a78b65f0.png';
import ScrollToTop from './components/ScrollToTop';

function LoadingScreen() {
  return (
    <motion.div 
      className="fixed inset-0 bg-black flex items-center justify-center z-[100]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated gradient background - same as home page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Cardinal Red gradient blob */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(157, 34, 53, 0.15) 0%, rgba(157, 34, 53, 0.05) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: ['-20%', '120%', '-20%'],
            y: ['0%', '60%', '0%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Darker Gold gradient blob */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(180, 151, 90, 0.12) 0%, rgba(180, 151, 90, 0.04) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: ['100%', '-20%', '100%'],
            y: ['80%', '10%', '80%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Purple gradient blob */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, rgba(138, 43, 226, 0.03) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: ['40%', '70%', '40%'],
            y: ['-10%', '90%', '-10%'],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Texture overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" /%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)" /%3E%3C/svg%3E")',
        }}
      />
      
      {/* Grain texture overlay */}
      <div 
        className="fixed inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Subtle background heartbeat pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.025]">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
            src={heartbeatPattern} 
            alt="" 
            className="w-full h-full object-contain opacity-50"
          />
        </motion.div>
      </div>

      {/* Logo */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Heartbeat pattern icon */}
          <motion.div
            className="mb-8 flex justify-center"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative w-24 h-24">
              {/* Subtle glow */}
              <div className="absolute inset-0 blur-2xl bg-[#9d2235]/30 rounded-full scale-150" />
              
              {/* Pattern container */}
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 backdrop-blur-sm border border-white/[0.15] shadow-lg">
                <img 
                  src={heartbeatPattern} 
                  alt="Heartbeat Pattern" 
                  className="w-full h-full object-contain opacity-80"
                  style={{
                    filter: 'drop-shadow(0 0 12px rgba(157, 34, 53, 0.6))'
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="text-2xl tracking-[0.2em] text-[#9d2235] font-medium mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              USC
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-black text-white mb-2" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
            MEDesign
          </h1>
          
          <motion.div
            className="text-sm tracking-[0.3em] text-white/40"
            style={{ fontFamily: 'Inter, sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            MEDICAL DEVICE INNOVATION
          </motion.div>

          {/* Loading bar */}
          <motion.div 
            className="mt-8 h-0.5 bg-white/10 rounded-full overflow-hidden max-w-xs mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#9d2235] to-[#9d2235]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Root() {
  const [showLoading, setShowLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Track mouse position for cursor gradient effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (showLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Animated gradient background - dynamic color shifting */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(157, 34, 53, 0.12) 0%, rgba(0, 0, 0, 1) 50%)',
              'radial-gradient(circle at 80% 50%, rgba(157, 34, 53, 0.15) 0%, rgba(0, 0, 0, 1) 50%)',
              'radial-gradient(circle at 50% 80%, rgba(157, 34, 53, 0.12) 0%, rgba(0, 0, 0, 1) 50%)',
              'radial-gradient(circle at 50% 20%, rgba(157, 34, 53, 0.15) 0%, rgba(0, 0, 0, 1) 50%)',
              'radial-gradient(circle at 20% 50%, rgba(157, 34, 53, 0.12) 0%, rgba(0, 0, 0, 1) 50%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Secondary gradient layer - darker gold */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 70% 30%, rgba(140, 100, 0, 0.03) 0%, transparent 40%)',
              'radial-gradient(circle at 30% 70%, rgba(140, 100, 0, 0.04) 0%, transparent 40%)',
              'radial-gradient(circle at 60% 60%, rgba(140, 100, 0, 0.03) 0%, transparent 40%)',
              'radial-gradient(circle at 40% 40%, rgba(140, 100, 0, 0.04) 0%, transparent 40%)',
              'radial-gradient(circle at 70% 30%, rgba(140, 100, 0, 0.03) 0%, transparent 40%)',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Purple gradient layer */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 40% 60%, rgba(100, 50, 140, 0.04) 0%, transparent 35%)',
              'radial-gradient(circle at 80% 40%, rgba(100, 50, 140, 0.05) 0%, transparent 35%)',
              'radial-gradient(circle at 30% 30%, rgba(100, 50, 140, 0.04) 0%, transparent 35%)',
              'radial-gradient(circle at 60% 80%, rgba(100, 50, 140, 0.05) 0%, transparent 35%)',
              'radial-gradient(circle at 40% 60%, rgba(100, 50, 140, 0.04) 0%, transparent 35%)',
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Cursor gradient disruption effect */}
      <motion.div
        className="fixed pointer-events-none z-[1]"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      >
        <div 
          className="w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(157, 34, 53, 0.15) 0%, transparent 60%)',
            filter: 'blur(60px)',
            mixBlendMode: 'screen',
          }}
        />
      </motion.div>

      {/* Texture overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="200" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" /%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)" /%3E%3C/svg%3E")',
        }}
      />

      {/* Animated pumping heart in background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        {/* Single pulsing heartbeat pattern - upright */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px]"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
            src={heartbeatPattern} 
            alt="" 
            className="w-full h-full object-contain opacity-50"
            style={{
              filter: 'drop-shadow(0 0 30px rgba(157, 34, 53, 0.4))'
            }}
          />
        </motion.div>
      </div>
      
      {/* Grain texture overlay */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Moving gradient orbs - USC cardinal red theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute w-[700px] h-[700px] bg-[#9d2235]/12 rounded-full blur-[140px]"
          animate={{
            x: ['-20%', '120%'],
            y: ['-10%', '50%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-[900px] h-[900px] bg-[#9d2235]/10 rounded-full blur-[160px]"
          animate={{
            x: ['100%', '-30%'],
            y: ['80%', '-20%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-[500px] h-[500px] bg-[#8c6400]/08 rounded-full blur-[120px]"
          animate={{
            x: ['50%', '10%'],
            y: ['10%', '90%'],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-[600px] h-[600px] bg-[#64328c]/08 rounded-full blur-[130px]"
          animate={{
            x: ['10%', '90%'],
            y: ['60%', '10%'],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Navigation - asymmetric design */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-3 shadow-2xl">
            <div className="flex items-center justify-between">
              <Link to="/">
                <motion.div
                  className="relative"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                    MEDesign
                  </div>
                  <div className="text-[9px] tracking-[0.2em] text-white/40 mt-[-2px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    USC CHAPTER
                  </div>
                </motion.div>
              </Link>

              {/* Desktop Menu - irregular spacing */}
              <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-[13px] text-white/70 hover:text-white transition-colors relative group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9d2235] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSflljqcB2uXECcqxDvtGPUZC9bqxzunY8SC3zilLCaTPTyY6A/viewform?usp=send_form"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-2 px-5 py-2 bg-[#9d2235] rounded-full text-white text-[13px] font-medium"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Apply
                </motion.a>
              </div>

              <motion.button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>

            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="md:hidden mt-4 pt-4 border-t border-white/10"
              >
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'Team', path: '/team' },
                  { name: 'Sponsors', path: '/sponsors' }
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block py-3 text-sm text-white/70 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </motion.nav>

      <div className="relative">
        <Outlet />
        <ScrollToTop />
      </div>
    </div>
  );
}

const navLinks = [
  { name: 'About', path: '/#about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Our Team', path: '/team' },
  { name: 'Sponsors', path: '/sponsors' }
];