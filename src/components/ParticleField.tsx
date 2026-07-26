import { useEffect, useRef } from 'react';

interface ParticleFieldProps {
  darkMode: boolean;
  /** Visual intensity — 'primary' for hero emphasis, 'faint' for restrained site-wide ambience */
  variant?: 'primary' | 'faint';
  className?: string;
  /** If true, sizes to the full viewport height instead of the parent container (for a fixed, site-wide layer) */
  fullViewport?: boolean;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

/**
 * Lightweight canvas particle field evoking a sparse evidence/knowledge graph:
 * slow-drifting nodes with faint connecting traces when close together.
 * Tunable constants are grouped at the top of the component.
 */
export default function ParticleField({ darkMode, variant = 'primary', className = '', fullViewport = false }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---- Tunable parameters ----------------------------------------------
    const isMobile = window.innerWidth < 768;
    const DENSITY = variant === 'primary' ? (isMobile ? 22000 : 15000) : (isMobile ? 40000 : 26000); // px^2 per node — higher = sparser
    const MAX_SPEED = variant === 'primary' ? 0.05 : 0.03; // px per ms, slow drift
    const CONNECT_DISTANCE = isMobile ? 90 : 130; // px, max distance to draw a trace
    const NODE_RADIUS = [0.6, 1.6] as const; // min/max px
    const BASE_OPACITY = variant === 'primary' ? 0.55 : 0.28;
    const LINE_OPACITY = variant === 'primary' ? 0.16 : 0.08;
    const POINTER_RADIUS = 140; // px, gentle influence radius
    const POINTER_STRENGTH = 0.02;
    // ------------------------------------------------------------------------

    const inkColor = darkMode ? '237, 237, 232' : '23, 24, 26';
    const accentColor = darkMode ? '111, 189, 179' : '61, 110, 104';

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let rafId = 0;
    let lastTime = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (fullViewport) {
        width = window.innerWidth;
        height = window.innerHeight;
      } else {
        const rect = canvas.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
      }
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      const count = Math.max(8, Math.round((width * height) / DENSITY));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * MAX_SPEED,
        vy: (Math.random() - 0.5) * MAX_SPEED,
        r: NODE_RADIUS[0] + Math.random() * (NODE_RADIUS[1] - NODE_RADIUS[0]),
      }));
    };

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, width, height);

      // Update + draw nodes
      for (const n of nodes) {
        // Gentle pointer influence
        const dx = n.x - mouseRef.current.x;
        const dy = n.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < POINTER_RADIUS && dist > 0.01) {
          const force = (1 - dist / POINTER_RADIUS) * POINTER_STRENGTH;
          n.vx += (dx / dist) * force;
          n.vy += (dy / dist) * force;
        }

        n.x += n.vx * dt;
        n.y += n.vy * dt;

        // Damping to keep drift calm
        n.vx *= 0.995;
        n.vy *= 0.995;

        // Wrap around edges
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${inkColor}, ${BASE_OPACITY})`;
        ctx.fill();
      }

      // Connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DISTANCE) {
            const alpha = (1 - dist / CONNECT_DISTANCE) * LINE_OPACITY;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${accentColor}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    };

    const loop = (time: number) => {
      const dt = Math.min(time - lastTime, 48);
      lastTime = time;
      draw(dt);
      rafId = requestAnimationFrame(loop);
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handlePointerLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    resize();
    window.addEventListener('resize', resize);

    if (reducedMotion) {
      // Render a single static frame, no animation loop, no pointer interaction
      draw(0);
    } else {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerleave', handlePointerLeave);
      rafId = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [darkMode, variant, fullViewport]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`${fullViewport ? 'fixed top-0 left-0' : 'absolute inset-0'} w-full h-full pointer-events-none ${className}`}
    />
  );
}
