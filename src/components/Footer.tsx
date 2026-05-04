'use client';

import { restaurant } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer 
      id="contact"
      className="relative text-white py-20 px-6 overflow-hidden border-t border-white/5"
      style={{ background: "linear-gradient(180deg, #080808 0%, #050505 100%)" }}
    >
      {/* Subtle Background Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#c5a059]/5 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Identity */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]">🧙</span>
              <div className="flex flex-col">
                <h3 
                  className="text-xl font-black text-[#f3eacb] tracking-[0.1em]"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  THE SMOKEY
                </h3>
                <span 
                  className="text-xs font-bold text-[#c5a059]/70 tracking-[0.4em] uppercase"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  CAULDRON
                </span>
              </div>
            </div>
            <p 
              className="text-white/40 text-sm leading-relaxed italic"
              style={{ fontFamily: "var(--font-fell)" }}
            >
              {restaurant.description}
            </p>
          </div>

          {/* Magical Shortcuts */}
          <div>
            <h4 
              className="text-[#c5a059] font-bold text-sm tracking-[0.3em] uppercase mb-8"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-4 text-sm text-white/50">
              {["Menu", "Gallery", "About", "Reservation"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-[#c5a059] transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c5a059]/0 group-hover:bg-[#c5a059] transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enchanted Hours */}
          <div>
            <h4 
              className="text-[#c5a059] font-bold text-sm tracking-[0.3em] uppercase mb-8"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Opening Hours
            </h4>
            <div className="space-y-4 text-sm text-white/50">
              <div>
                <p className="text-[#f3eacb]/40 text-[10px] uppercase tracking-widest font-bold mb-1">Weekdays</p>
                <p>{restaurant.hours.weekday}</p>
              </div>
              <div>
                <p className="text-[#f3eacb]/40 text-[10px] uppercase tracking-widest font-bold mb-1">Weekends</p>
                <p>{restaurant.hours.weekend}</p>
              </div>
            </div>
          </div>

          {/* Owl Post (Contact) */}
          <div>
            <h4 
              className="text-[#c5a059] font-bold text-sm tracking-[0.3em] uppercase mb-8"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Owl Post
            </h4>
            <div className="space-y-4 text-sm text-white/50">
              <div className="flex gap-3">
                <span className="text-[#c5a059]">📍</span>
                <p>{restaurant.address}</p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#c5a059]">📞</span>
                <p>{restaurant.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-white/20 text-xs tracking-widest uppercase font-bold">
              &copy; {new Date().getFullYear()} The Smokey Cauldron • Islamabad. All rights reserved. 🪄
            </p>
            
            <div className="flex items-center gap-8">
              {[
                { name: "Instagram", icon: "📸", url: "https://www.instagram.com/thesmokeycauldronf6/" },
                { name: "Facebook", icon: "👥", url: "#" },
                { name: "WhatsApp", icon: "💬", url: "#" }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/40 hover:text-[#c5a059] transition-colors text-xs font-bold uppercase tracking-widest"
                  whileHover={{ y: -2 }}
                >
                  <span className="text-lg">{social.icon}</span>
                  <span className="hidden sm:inline">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
