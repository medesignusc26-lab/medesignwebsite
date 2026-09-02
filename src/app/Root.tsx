import { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Menu, X, Heart } from 'lucide-react';
import heartbeatPattern from '@/assets/d65ffa27844b18f43e95a2810cbd35d1a78b65f0.png';
import ScrollToTop from './components/ScrollToTop';
import { AuroraBackground } from './components/AuroraBackground';

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
          {/* Heartbeat pattern icon */}
          <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto">
            <div className="absolute inset-0 blur-xl bg-[#9d2235]/30 rounded-full scale-125" />
            <img
              src={heartbeatPattern}
              alt="Heartbeat Pattern"
              className="relative w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(157, 34, 53, 0.8)) drop-shadow(0 0 40px rgba(157, 34, 53, 0.4))'
              }}
            />
          </div>

          {/* Loading bar */}
          <motion.div
            className="mt-8 h-0.5 bg-white/10 rounded-full overflow-hidden max-w-[200px] md:max-w-xs mx-auto"
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
  const location = useLocation();
  const isHomePage = location.pathname === '/';
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

  // Fade the red hero glow (radial gradient, cursor spotlight, moving
  // orbs) out as the user scrolls past it, so only the landing hero
  // carries the glow and everything below is plain dark background.
  const heroGlowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleScroll() {
      if (!heroGlowRef.current) return;
      const fadeDistance = window.innerHeight * 0.9;
      const progress = Math.min(window.scrollY / fadeDistance, 1);
      heroGlowRef.current.style.opacity = String(1 - progress);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (showLoading) {
    return <LoadingScreen isMobile={isMobile} />;
  }

  return (
    <div className="relative bg-black text-white overflow-hidden min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Ambient hero glow - HOME PAGE ONLY, fades out as you scroll past the hero */}
      {isHomePage && (
        <>
          <div ref={heroGlowRef}>
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
          </div>

          {/* Ambient aurora background - DESKTOP ONLY, fades itself out on scroll */}
          {!isMobile && <AuroraBackground />}
        </>
      )}

      {/* Navigation - asymmetric design */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div>
            <div className="relative flex items-center justify-center">
              {/* Desktop Menu - centered */}
              <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) =>
                  link.path.startsWith('mailto:') ? (
                    <a
                      key={link.name}
                      href={link.path}
                      className="text-[13px] text-white/70 hover:text-white transition-colors relative group"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#9d2235] transition-all duration-300 group-hover:w-full" />
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-[13px] text-white/70 hover:text-white transition-colors relative group"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#9d2235] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  )
                )}
              </div>

              <motion.button
                className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 p-2"
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
                  { name: 'Sponsors', path: '/sponsors' },
                  { name: 'Contact', path: 'mailto:medesign@usc.edu' }
                ].map((item) =>
                  item.path.startsWith('mailto:') ? (
                    <a
                      key={item.name}
                      href={item.path}
                      className="block py-3 text-sm text-white/70 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block py-3 text-sm text-white/70 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                )}
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
  { name: 'Sponsors', path: '/sponsors' },
  { name: 'Contact', path: 'mailto:medesign@usc.edu' }
];