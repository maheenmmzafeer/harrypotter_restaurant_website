'use client';

import { galleryImages, houses } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const GALLERY_ICONS = ["🏰", "🧪", "🚂", "🕯️"];

const SPELLS = [
  "Alohomora 🗝️",
  "Lumos 💡",
  "Expecto Patronum 🌟",
  "Accio 🪄",
  "Incendio 🔥",
  "Revelio 👁️",
  "Wingardium Leviosa ✨",
];

function GalleryCard({
  image,
  icon,
  index,
}: {
  image: { title: string; image?: string; alt: string };
  icon: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const iconY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <motion.div
      ref={cardRef}
      className="group relative overflow-hidden rounded-3xl h-96 border border-white/5 shadow-2xl gpu-layer cursor-pointer"
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background Image */}
      {image.image ? (
        <div className="absolute inset-0">
          <img 
            src={image.image} 
            alt={image.alt} 
            className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        </div>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, #1a1a1a 0%, #050505 100%)`,
          }}
        />
      )}

      {/* Hover Shimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-end justify-end p-8"
      >
        <motion.div
          className="text-5xl filter drop-shadow-[0_0_15px_rgba(197,160,89,0.5)] mb-4"
          style={{ y: iconY }}
        >
          {icon}
        </motion.div>
        <div className="text-right">
          <h3
            className="text-2xl font-bold text-[#f3eacb] mb-2"
            style={{ fontFamily: "var(--font-cinzel, 'Georgia', serif)" }}
          >
            {image.title}
          </h3>
          <p
            className="text-white/60 text-xs max-w-xs leading-relaxed"
            style={{ fontFamily: "var(--font-fell, 'Georgia', serif)", fontStyle: "italic" }}
          >
            {image.alt}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #050505 50%, #080808 100%)" }}
    >
      {/* Background Ambience */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(197,160,89,0.05) 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-yellow-500/50 text-xs tracking-[0.4em] uppercase mb-4 font-bold"
            style={{ fontFamily: "var(--font-cinzel, 'Georgia', serif)" }}
          >
            Capturing the Enchantment
          </p>
          <h2
            className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-[#f3eacb] via-[#c5a059] to-[#8a6e34] bg-clip-text mb-6"
            style={{ fontFamily: "var(--font-cinzel, 'Georgia', serif)" }}
          >
            OUR SPACES
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c5a059]/40" />
            <span className="text-[#c5a059]/60 text-lg">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c5a059]/40" />
          </div>
        </motion.div>

        {/* House Pride */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {houses.map((house, idx) => (
            <motion.div
              key={house.name}
              className="p-8 rounded-3xl text-center cursor-pointer relative overflow-hidden gpu-layer border border-white/5"
              style={{
                background: `linear-gradient(135deg, ${house.color}15 0%, ${house.color}05 100%)`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: `${house.color}25`,
                borderColor: `${house.accent}40`,
                boxShadow: `0 0 40px ${house.color}20`,
              }}
            >
              <motion.h3
                className="text-xl md:text-2xl font-bold mb-1"
                style={{
                  color: house.accent,
                  fontFamily: "var(--font-cinzel, 'Georgia', serif)",
                  filter: `drop-shadow(0 0 10px ${house.accent}40)`,
                }}
              >
                {house.name}
              </motion.h3>
              <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold">
                House Spirit
              </p>
            </motion.div>
          ))}
        </div>

        {/* Spell Ribbon */}
        <div className="mb-20 overflow-hidden py-8 border-y border-white/5 relative">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...SPELLS, ...SPELLS].map((spell, i) => (
              <span
                key={i}
                className="text-white/10 text-sm font-bold uppercase tracking-[0.3em]"
                style={{ fontFamily: "var(--font-cinzel, 'Georgia', serif)" }}
              >
                {spell}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {galleryImages.map((image, idx) => (
            <GalleryCard
              key={image.title}
              image={image}
              icon={GALLERY_ICONS[idx % GALLERY_ICONS.length]}
              index={idx}
            />
          ))}
        </div>

        {/* Instagram Redirect */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a 
            href="https://www.instagram.com/thesmokeycauldronf6/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl border-2 border-[#c5a059]/30 text-[#c5a059] font-bold tracking-widest hover:bg-[#c5a059]/5 hover:border-[#c5a059] transition-all"
            style={{ fontFamily: "var(--font-cinzel, 'Georgia', serif)" }}
          >
            <span>Follow the Magic on Instagram</span>
            <span className="text-2xl">📸</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}


