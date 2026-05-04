'use client';

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import FloatingParticles from "./FloatingParticles";

// Deterministic candle positions
const CANDLES = [
  { left: "8%",  bottom: "15%", delay: 0 },
  { left: "18%", bottom: "25%", delay: 0.5 },
  { left: "78%", bottom: "20%", delay: 0.3 },
  { left: "88%", bottom: "35%", delay: 0.8 },
  { left: "50%", bottom: "8%",  delay: 0.2 },
  { left: "33%", bottom: "12%", delay: 0.7 },
  { left: "66%", bottom: "10%", delay: 0.4 },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax layers for cinematic depth
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background Layer with Parallax */}
      <motion.div 
        style={{ y: yBg, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-[#080808]" />
        
        {/* Animated magical fog/smoke */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            animate={{ 
              x: [-20, 20],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-1/4 w-[150%] h-1/2 bg-gradient-radial from-white/10 to-transparent blur-3xl"
          />
        </div>

        {/* Deterministic Particles */}
        {isMounted && <FloatingParticles count={60} />}
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ y: yText, opacity }}
        className="relative z-10 text-center px-4 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 relative inline-block"
        >
          {/* Glowing Wand Emoji with Pulse */}
          <motion.span 
            className="text-7xl md:text-8xl block filter drop-shadow-[0_0_20px_rgba(197,160,89,0.8)]"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            🪄
          </motion.span>
          <div className="absolute inset-0 bg-yellow-500/20 blur-[60px] -z-10 rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-yellow-500/80 uppercase text-sm md:text-base mb-4 font-bold tracking-[0.3em]"
          style={{ fontFamily: "var(--font-cinzel, 'Georgia', serif)" }}
        >
          F-6 Markaz • Islamabad
        </motion.p>

        <motion.h1 
          className="text-6xl md:text-9xl font-black mb-6 relative"
          style={{ fontFamily: "var(--font-cinzel, 'Georgia', serif)" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#f3eacb] via-[#c5a059] to-[#8a6e34] shimmer">
            THE SMOKEY CAULDRON
          </span>
          <br />
          <span className="text-2xl md:text-4xl text-yellow-100/40 block mt-2 tracking-widest uppercase">
            A Magical Dining Experience
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12"
        >
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(197, 160, 89, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-[#c5a059] to-[#b8860b] text-[#050505] rounded-full font-bold text-lg tracking-widest transition-all shadow-[0_0_20px_rgba(197,160,89,0.2)]"
            style={{ fontFamily: "var(--font-cinzel, 'Georgia', serif)" }}
          >
            DISCOVER MENU
          </motion.a>
          
          <motion.a
            href="#reservation"
            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "#c5a059" }}
            className="px-10 py-4 border-2 border-white/20 text-white rounded-full font-bold text-lg tracking-widest transition-all"
            style={{ fontFamily: "var(--font-cinzel, 'Georgia', serif)" }}
          >
            RESERVE A TABLE
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating Props/Decor Layer */}
      <div className="absolute inset-0 pointer-events-none z-5 overflow-hidden">
        {/* Floating Candles (Emojis) with individual animations */}
        {isMounted && CANDLES.map((candle, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-40 blur-[1px]"
            initial={{ 
              x: candle.left, 
              y: "110%",
              rotate: i * 15
            }}
            animate={{ 
              y: ["110%", "-20%"],
              x: [candle.left, `calc(${candle.left} + ${Math.sin(i) * 5}%)`],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 15 + (i * 2), 
              repeat: Infinity, 
              ease: "linear",
              delay: candle.delay * 10
            }}
          >
            🕯️
            <div className="absolute top-0 left-0 w-full h-full bg-yellow-400/20 blur-xl -z-10" />
          </motion.div>
        ))}

        {/* Static Background Symbols */}
        <motion.div 
          className="absolute top-20 left-20 text-6xl opacity-5"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          ⚡
        </motion.div>
        <motion.div
          className="absolute bottom-24 right-12 text-4xl opacity-15"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          🔮
        </motion.div>
        <motion.div
          className="absolute top-1/3 left-6 text-3xl opacity-10"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute top-1/4 right-8 text-3xl opacity-10"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          🌙
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-yellow-500/40"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll to Enter</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-[#c5a059] to-transparent"
        />
      </motion.div>

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />
    </section>
  );
}
