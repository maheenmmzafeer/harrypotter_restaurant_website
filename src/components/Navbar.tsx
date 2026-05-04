'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change or hash link click
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        backgroundColor: scrolled ? "rgba(5, 5, 5, 0.85)" : "rgba(5, 5, 5, 0)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        borderBottom: scrolled ? "1px solid rgba(197, 160, 89, 0.1)" : "1px solid rgba(197, 160, 89, 0)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group relative z-[120]">
            <motion.div 
              className="text-3xl filter drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]"
              whileHover={{ rotate: [-5, 5, -5], scale: 1.1 }}
            >
              🧙
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-[0.2em] text-[#f3eacb] group-hover:text-[#c5a059] transition-colors uppercase leading-tight" style={{ fontFamily: "var(--font-cinzel)" }}>
                The Smokey
              </span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-[#c5a059]/70 uppercase leading-none" style={{ fontFamily: "var(--font-cinzel)" }}>
                Cauldron
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.3em] text-[#f3eacb]/70 hover:text-[#c5a059] transition-all relative group"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            
            <Link
              href="#reservation"
              className="ml-4 px-8 py-3 bg-transparent border border-[#c5a059]/40 text-[#c5a059] rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#c5a059] hover:text-[#050505] transition-all duration-300"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Book Table
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-[120] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span 
              className="w-6 h-0.5 bg-[#c5a059] rounded-full"
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            />
            <motion.span 
              className="w-6 h-0.5 bg-[#c5a059] rounded-full"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span 
              className="w-6 h-0.5 bg-[#c5a059] rounded-full"
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            />
          </button>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-[#050505] flex flex-col items-center justify-center gap-10"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-2xl font-black uppercase tracking-[0.4em] text-[#f3eacb] hover:text-[#c5a059]"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="#reservation"
                className="mt-4 px-10 py-4 bg-[#c5a059] text-[#050505] rounded-full font-black uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-cinzel)" }}
                onClick={() => setIsOpen(false)}
              >
                Reserve Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
