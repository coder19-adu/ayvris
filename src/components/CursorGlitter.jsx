import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CursorGlitter() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    let lastSpawn = 0;

    const handleMove = (e) => {
      const now = Date.now();

      // Throttle for smoother performance
      if (now - lastSpawn < 25) return;
      lastSpawn = now;

      const id = `${now}-${Math.random()}`;

      const particle = {
        id,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 10 + 12,
        drift: (Math.random() - 0.5) * 40,
        rotation: Math.random() * 180 - 90,
      };

      setParticles((prev) => [...prev.slice(-40), particle]);

      setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => p.id !== id)
        );
      }, 1800);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              opacity: 1,
              scale: 1,
              x: particle.x,
              y: particle.y,
              rotate: 0,
            }}
            animate={{
              opacity: [1, 1, 1, 0.7, 0],
              scale: 0.4,
              x: particle.x + particle.drift,
              y: particle.y + 80,
              rotate: particle.rotation,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute select-none"
            style={{
              fontSize: `${particle.size}px`,
              fontWeight: 300,
              color: "#ffffff",
            }}
          >
            +
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}