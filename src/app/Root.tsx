import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router';
import { motion } from 'motion/react';
import { Menu, X, Heart } from 'lucide-react';
import heartbeatPattern from '@/assets/d65ffa27844b18f43e95a2810cbd35d1a78b65f0.jpg';
import ScrollToTop from './components/ScrollToTop';

function LoadingScreen({ isMobile }: { isMobile: boolean }) {
  return (
    <motion.div 
      className="fixed inset-0 bg-black flex items-center justify-center z-[100]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Simple gradient background - no animation on mobile */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(157, 34, 53, 0.15) 0%, rgba(0, 0, 0, 1) 70%)',
        }}
      />

      {/* Logo */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Heartbeat pattern icon - simplified on mobile */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <div className="absolute inset-0 blur-xl bg-[#9d2235]/30 rounded-full scale-125" />
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-4 border border-white/[0.15]">
                <img 
                  src={heartbeatPattern} 
                  alt="Heartbeat Pattern" 
                  className="w-full h-full object-contain opacity-80"
                />
              </div>
            </div>
          </div>

          <div className="text-xl md:text-2xl tracking-[0.2em] text-[#9d2235] font-medium mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
            USC
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-2" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
            MEDesign
          </h1>
          
          <div
            className="text-xs md:text-sm tracking-[0.3em] text-white/40"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            MEDICAL DEVICE INNOVATION
          </div>

          {/* Loading bar */}
          <motion.div 
            className="mt-6 h-0.5 bg-white/10 rounded-full overflow-hidden max-w-[200px] md:max-w-xs mx-auto"
          >
            <motion.div
              className="h-full bg-[#9d2235]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: isMobile ? 0.8 : 1.5, ease: "easeOut" }}
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
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, isMobile ? 1000 : 2000); // Shorter loading on mobile
    return () => clearTimeout(timer);
  }, [isMobile]);

  // Track mouse position for cursor gradient effect - DISABLED on mobile
  useEffect(() => {
    if (isMobile) return; // Skip on mobile for performance
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (showLoading) {
    return <LoadingScreen isMobile={isMobile} />;
  }

  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Static gradient background on mobile, animated on desktop */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {isMobile ? (
          // Simple static gradient for mobile - no animations
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 30%, rgba(157, 34, 53, 0.12) 0%, rgba(0, 0, 0, 1) 60%)',
            }}
          />
        ) : (
          // Animated gradient for desktop
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(157, 34, 53, 0.12) 0%, rgba(0, 0, 0, 1) 50%)',
                'radial-gradient(circle at 80% 50%, rgba(157, 34, 53, 0.15) 0%, rgba(0, 0, 0, 1) 50%)',
                'radial-gradient(circle at 50% 80%, rgba(157, 34, 53, 0.12) 0%, rgba(0, 0, 0, 1) 50%)',
                'radial-gradient(circle at 20% 50%, rgba(157, 34, 53, 0.12) 0%, rgba(0, 0, 0, 1) 50%)',
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </div>
      
      {/* Cursor gradient effect - DESKTOP ONLY */}
      {!isMobile && (
        <motion.div
          className="fixed pointer-events-none z-[1] hidden md:block"
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
            }}
          />
        </motion.div>
      )}

      {/* Heartbeat pattern - simplified on mobile */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[500px] md:h-[500px]">
          <img 
            src={heartbeatPattern} 
            alt="" 
            className="w-full h-full object-contain opacity-50"
          />
        </div>
      </div>

      {/* Moving gradient orbs - DESKTOP ONLY */}
      {!isMobile && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none hidden md:block">
          <motion.div 
            className="absolute w-[500px] h-[500px] bg-[#9d2235]/10 rounded-full blur-[100px]"
            animate={{
              x: ['-20%', '100%'],
              y: ['-10%', '50%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute w-[600px] h-[600px] bg-[#9d2235]/8 rounded-full blur-[120px]"
            animate={{
              x: ['100%', '-20%'],
              y: ['80%', '-10%'],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </div>
      )}

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