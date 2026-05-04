'use client';

import { motion } from 'framer-motion';

// Deterministic pseudo-random to avoid SSR/CSR hydration mismatch
function seededRandom(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

interface Particle {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function FloatingParticles({ count = 40 }: { count?: number }) {
  // Generate particles based on count
  const particles: Particle[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${seededRandom(i * 3) * 100}%`,
    top: `${seededRandom(i * 3 + 1) * 100}%`,
    size: seededRandom(i * 3 + 2) * 4 + 1,
    duration: seededRandom(i * 5) * 4 + 3,
    delay: seededRandom(i * 7) * 3,
    opacity: seededRandom(i * 11) * 0.6 + 0.2,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, rgba(255,215,0,${p.opacity}) 0%, rgba(255,215,0,0) 70%)`,
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [p.opacity * 0.4, p.opacity, p.opacity * 0.4],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Larger glowing orbs for depth */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${seededRandom(i * 13 + 100) * 80 + 10}%`,
            top: `${seededRandom(i * 13 + 101) * 80 + 10}%`,
            width: 80 + seededRandom(i * 13 + 102) * 60,
            height: 80 + seededRandom(i * 13 + 102) * 60,
            background: `radial-gradient(circle, rgba(197,160,89,0.1) 0%, rgba(138,100,50,0.02) 60%, transparent 80%)`,
            willChange: 'transform',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, seededRandom(i * 17) * 40 - 20, 0],
          }}
          transition={{
            duration: 8 + seededRandom(i * 19) * 6,
            delay: seededRandom(i * 23) * 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
