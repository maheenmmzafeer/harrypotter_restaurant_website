'use client';

import { motion } from "framer-motion";
import { restaurant } from "@/lib/data";

export default function ContactSection() {
  return (
    <section id="reservation" className="relative py-24 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Reservation Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] rounded-3xl p-10 border border-[#c5a059]/20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl">🦉</div>
            
            <h2 
              className="text-3xl md:text-4xl font-black text-[#f3eacb] mb-6 uppercase tracking-tight"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              SEND AN OWL
            </h2>
            <p className="text-white/40 mb-10 leading-relaxed" style={{ fontFamily: "var(--font-fell)" }}>
              Planning a feast? Secure your table in our enchanted halls. For groups larger than 6, please contact us via WhatsApp for special arrangements.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-[#050505] transition-all">
                  📞
                </div>
                <div>
                  <p className="text-[#f3eacb]/40 text-[10px] uppercase tracking-widest font-bold">Call Us</p>
                  <p className="text-white font-bold">{restaurant.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-[#050505] transition-all">
                  📍
                </div>
                <div>
                  <p className="text-[#f3eacb]/40 text-[10px] uppercase tracking-widest font-bold">Location</p>
                  <p className="text-white font-bold">{restaurant.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-[#050505] transition-all">
                  🕒
                </div>
                <div>
                  <p className="text-[#f3eacb]/40 text-[10px] uppercase tracking-widest font-bold">Timing</p>
                  <p className="text-white font-bold">{restaurant.hours.weekday} (Daily)</p>
                </div>
              </div>
            </div>

            <motion.a
              href="https://wa.me/923125555666" // Placeholder WhatsApp
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(197, 160, 89, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="mt-12 w-full block py-5 bg-[#c5a059] text-[#050505] text-center rounded-2xl font-black uppercase tracking-[0.2em] transition-all"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Book via WhatsApp
            </motion.a>
          </motion.div>

          {/* Map/Visual Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/5 relative h-[500px] lg:h-auto"
          >
            {/* Mock Map Visual */}
            <div className="absolute inset-0 bg-[#111] flex flex-col items-center justify-center text-center p-12">
              <div className="text-6xl mb-6 opacity-20">🗺️</div>
              <h3 className="text-[#f3eacb] text-xl font-bold mb-4 uppercase tracking-widest" style={{ fontFamily: "var(--font-cinzel)" }}>
                Find us in F-6
              </h3>
              <p className="text-white/30 text-sm max-w-sm mb-8" style={{ fontFamily: "var(--font-fell)" }}>
                We are located in the heart of F-6 Markaz, Islamabad. Look for the glowing lanterns and the smokey aroma of the cauldron.
              </p>
              <div className="w-48 h-px bg-gradient-to-r from-transparent via-[#c5a059]/30 to-transparent" />
              
              {/* Fake Map Elements */}
              <div className="mt-12 grid grid-cols-3 gap-4 opacity-10">
                <div className="w-20 h-20 border border-white rounded-lg" />
                <div className="w-20 h-20 border border-white rounded-lg bg-white/20" />
                <div className="w-20 h-20 border border-white rounded-lg" />
              </div>
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
