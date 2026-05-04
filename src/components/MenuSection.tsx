'use client';

import { menuItems } from "@/lib/data";
import { motion } from "framer-motion";
import { useState } from "react";

const CATEGORY_ICONS: Record<string, string> = {
  "Starters & Platters": "🥘",
  "Main Courses": "🍖",
  "Potions & Beverages": "🍺",
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displayedItems = activeCategory
    ? menuItems.filter((cat) => cat.category === activeCategory)
    : menuItems;

  return (
    <section
      id="menu"
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080808 0%, #050505 40%, #0a0a0a 100%)" }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(197,160,89,0.15) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(197,160,89,0.1) 0%, transparent 50%)`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-yellow-500/60 text-sm tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-cinzel, 'Georgia', serif)" }}
          >
            F-6 Markaz • Islamabad
          </p>
          <h2
            className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-[#f3eacb] via-[#c5a059] to-[#8a6e34] bg-clip-text mb-4"
            style={{ fontFamily: "var(--font-cinzel, 'Georgia', serif)" }}
          >
            THE MENU
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#c5a059]" />
            <span className="text-[#c5a059]">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#c5a059]" />
          </div>
          <p
            className="text-white/60 text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-fell, 'Georgia', serif)", fontStyle: "italic" }}
          >
            Explore our artisanal potions and enchanted dishes
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            onClick={() => setActiveCategory(null)}
            className="px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer uppercase tracking-widest"
            style={{
              background: activeCategory === null
                ? "linear-gradient(135deg, #c5a059, #8a6e34)"
                : "rgba(197,160,89,0.05)",
              color: activeCategory === null ? "#050505" : "#c5a059",
              border: "1px solid rgba(197,160,89,0.2)",
              fontFamily: "var(--font-cinzel, 'Georgia', serif)",
              boxShadow: activeCategory === null ? "0 0 20px rgba(197,160,89,0.3)" : "none",
            }}
          >
            All
          </button>
          {menuItems.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(
                activeCategory === cat.category ? null : cat.category
              )}
              className="px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer uppercase tracking-widest"
              style={{
                background: activeCategory === cat.category
                  ? "linear-gradient(135deg, #c5a059, #8a6e34)"
                  : "rgba(197,160,89,0.05)",
                color: activeCategory === cat.category ? "#050505" : "#c5a059",
                border: "1px solid rgba(197,160,89,0.2)",
                fontFamily: "var(--font-cinzel, 'Georgia', serif)",
                boxShadow: activeCategory === cat.category ? "0 0 20px rgba(197,160,89,0.3)" : "none",
              }}
            >
              {CATEGORY_ICONS[cat.category] || "✨"} {cat.category}
            </button>
          ))}
        </motion.div>

        {/* Menu Categories */}
        <div className="space-y-12">
          {displayedItems.map((category, idx) => (
            <motion.div
              key={category.category}
              className="rounded-3xl p-8 border border-white/5 shadow-2xl gpu-layer"
              style={{
                background: "rgba(10, 10, 10, 0.7)",
                backdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-10">
                <span className="text-4xl filter drop-shadow-[0_0_10px_rgba(197,160,89,0.3)]">{CATEGORY_ICONS[category.category] || "✨"}</span>
                <h3
                  className="text-2xl md:text-3xl font-bold text-[#f3eacb]"
                  style={{ fontFamily: "var(--font-cinzel, 'Georgia', serif)" }}
                >
                  {category.category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[#c5a059]/20 to-transparent ml-4" />
              </div>

              {/* Items grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.name}
                    className="group relative rounded-2xl p-5 cursor-default transition-all duration-300"
                    style={{
                      background: "rgba(197,160,89,0.02)",
                      border: "1px solid rgba(197,160,89,0.05)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: itemIdx * 0.05 }}
                    whileHover={{
                      backgroundColor: "rgba(197,160,89,0.06)",
                      borderColor: "rgba(197,160,89,0.2)",
                      y: -4,
                    }}
                  >
                    {/* Gold accent bar */}
                    <div
                      className="absolute left-0 top-4 bottom-4 w-1 rounded-full transition-all duration-300 group-hover:h-full group-hover:top-0 group-hover:bottom-0"
                      style={{ background: "linear-gradient(180deg, #c5a059, #8a6e34)" }}
                    />
                    <div className="pl-5">
                      <div className="flex justify-between items-start mb-2">
                        <h4
                          className="text-base md:text-lg font-bold text-white group-hover:text-[#f3eacb] transition-colors"
                          style={{ fontFamily: "var(--font-cinzel, 'Georgia', serif)" }}
                        >
                          {item.name}
                        </h4>
                        <span
                          className="text-[#c5a059] font-black text-sm ml-4 whitespace-nowrap"
                          style={{ fontFamily: "var(--font-cinzel, 'Georgia', serif)" }}
                        >
                          {item.price}
                        </span>
                      </div>
                      <p
                        className="text-white/40 text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-fell, 'Georgia', serif)", fontStyle: "italic" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Menu Link */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a 
            href="#full-menu" 
            className="text-[#c5a059]/60 hover:text-[#c5a059] text-xs font-bold uppercase tracking-[0.4em] transition-colors flex flex-col items-center gap-3"
            style={{ fontFamily: "var(--font-cinzel, 'Georgia', serif)" }}
          >
            <span>Click to explore the complete grimoire</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-lg"
            >
              📜
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}


