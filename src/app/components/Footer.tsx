import { motion } from 'motion/react';
import { Mail, Linkedin, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const APPLY_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScgKzQqDRFuLBFW52iPGPvB7fC86KuCEkrTX5nL5x4dUa3Qmw/viewform';

export function Footer() {
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
              USC's student-run medical device design club, based in Los Angeles since 2015.
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
              {[
                { label: 'Projects', to: '/projects' },
                { label: 'Team', to: '/team' },
                { label: 'Sponsors', to: '/sponsors' },
                { label: 'Contact', to: 'mailto:medesign@usc.edu' },
              ].map((link) =>
                link.to.startsWith('mailto:') ? (
                  <a
                    key={link.label}
                    href={link.to}
                    className="block text-sm text-white/50 hover:text-white transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="block text-sm text-white/50 hover:text-white transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold mb-4 text-sm" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
              JOIN THE TEAM
            </h4>
            <p className="text-xs text-white/50 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              We recruit new members every semester — no medical device experience required.
            </p>
            <motion.a
              href={APPLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, x: 3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#9d2235] rounded-full text-white text-sm font-medium"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Apply now
              <ArrowRight size={14} />
            </motion.a>
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
