import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particleCount = 80;

    particlesRef.current = Array.from(
      { length: particleCount },
      () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,

        // Slow independent movement.
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,

        // Larger nodes matching the original preferred appearance.
        size: Math.random() * 3 + 2.5,

        // Visible but still subtle.
        opacity: Math.random() * 0.35 + 0.4,

        // Cyan / purple.
        hue: Math.random() > 0.5 ? 175 : 265,
      })
    );

    const draw = () => {
      /*
       * Clear the entire canvas every frame.
       *
       * This is important:
       * - no trails
       * - no ghosting
       * - no dark shadows
       * - no polygon buildup
       */
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      const particles = particlesRef.current;

      particles.forEach((particle, i) => {
        /*
         * Autonomous movement only.
         * There is deliberately NO mouse interaction.
         */
        particle.x += particle.vx;
        particle.y += particle.vy;

        /*
         * Wrap around viewport edges.
         */
        if (particle.x < -10) {
          particle.x = window.innerWidth + 10;
        }

        if (particle.x > window.innerWidth + 10) {
          particle.x = -10;
        }

        if (particle.y < -10) {
          particle.y = window.innerHeight + 10;
        }

        if (particle.y > window.innerHeight + 10) {
          particle.y = -10;
        }

        /*
         * Draw larger particle.
         */
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `hsla(
          ${particle.hue},
          80%,
          50%,
          ${particle.opacity}
        )`;

        ctx.fill();

        /*
         * Draw thin connections only.
         *
         * No filled triangles.
         * No gradients filling areas.
         * No shadows.
         */
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.3;

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);

            ctx.strokeStyle = `hsla(
              ${particle.hue},
              80%,
              50%,
              ${opacity}
            )`;

            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;
