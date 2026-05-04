'use client';

import { motion } from "framer-motion";
import { restaurant } from "@/lib/data";

const FEATURES = [
  {
    icon: "🕯️",
    title: "Enchanted Ambiance",
    description: "Step into a world of floating candles and dark stone, where every corner holds a magical surprise."
  },
  {
    icon: "🧪",
    title: "Potions & Brews",
    description: "Our signature Butterbeer and bubbling elixirs are crafted with secret recipes from the Wizarding world."
  },
  {
    icon: "🍔",
    title: "Magical Cuisine",
    description: "From Charcoal Burgers to Flaming Pasta, our menu is a celebration of flavor and enchantment."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-[#050505]">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c5a059]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8b0000]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p 
              className="text-[#c5a059] text-xs tracking-[0.5em] uppercase font-bold mb-4"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              The Legend of the Cauldron
            </p>
            <h2 
              className="text-4xl md:text-6xl font-black text-[#f3eacb] mb-8 leading-tight"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              WHERE MAGIC MEETS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c5a059] to-[#8a6e34]">
                THE MODERN WORLD
              </span>
            </h2>
            
            <div className="space-y-6 text-white/60 text-lg leading-relaxed" style={{ fontFamily: "var(--font-fell)" }}>
              <p>
                Founded in the heart of Islamabad, The Smokey Cauldron was born from a passion for the mystical and a love for exceptional dining. We've combined the gritty, mysterious aesthetic of the Dark Arts with premium, modern flavors to create something truly unique in F-6 Markaz.
              </p>
              <p>
                Whether you're a long-time fan of the Wizarding world or simply seeking an extraordinary meal in an unforgettable setting, our doors are open. Every detail—from the floating candles to the bubbling potions—is designed to transport you far from the mundane.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 mt-12">
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h4 className="text-[#f3eacb] font-bold text-sm mb-2 uppercase tracking-widest" style={{ fontFamily: "var(--font-cinzel)" }}>
                    {feature.title}
                  </h4>
                  <p className="text-white/40 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/images/gallery/great-hall.png" 
                alt="Inside The Smokey Cauldron" 
                className="w-full aspect-[4/5] object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decorative Frames */}
            <div className="absolute -top-6 -right-6 w-full h-full border border-[#c5a059]/20 rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-[#8b0000]/10 rounded-3xl -z-10" />
            
            {/* Floating Badge */}
            <motion.div 
              className="absolute -bottom-10 -right-10 bg-[#c5a059] p-8 rounded-full shadow-2xl z-20 hidden md:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-[#050505] text-center">
                <p className="text-[10px] font-black tracking-widest uppercase">Est.</p>
                <p className="text-2xl font-black tracking-tighter" style={{ fontFamily: "var(--font-cinzel)" }}>2023</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
