import { useMouseParallax } from '@/hooks/use-mouse-parallax';
import { motion } from 'framer-motion';

interface ParallaxBackgroundProps {
  darkMode: boolean;
}

export default function ParallaxBackground({ darkMode }: ParallaxBackgroundProps) {
  const mouse = useMouseParallax(0.015);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Large gradient orb - moves slower */}
      <motion.div
        className={`absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20 ${
          darkMode 
            ? 'bg-gradient-to-br from-chartreuse/30 to-transparent' 
            : 'bg-gradient-to-br from-deepBlue/20 to-transparent'
        }`}
        style={{
          top: '10%',
          left: '5%',
        }}
        animate={{
          x: mouse.x * 0.5,
          y: mouse.y * 0.5,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />

      {/* Medium orb - moves at normal speed */}
      <motion.div
        className={`absolute w-[400px] h-[400px] rounded-full blur-2xl opacity-15 ${
          darkMode 
            ? 'bg-gradient-to-tl from-chartreuse/25 to-transparent' 
            : 'bg-gradient-to-tl from-deepBlue/15 to-transparent'
        }`}
        style={{
          bottom: '20%',
          right: '10%',
        }}
        animate={{
          x: mouse.x * 0.8,
          y: mouse.y * 0.8,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />

      {/* Small accent orb - moves faster */}
      <motion.div
        className={`absolute w-[200px] h-[200px] rounded-full blur-xl opacity-10 ${
          darkMode 
            ? 'bg-chartreuse/20' 
            : 'bg-deepBlue/10'
        }`}
        style={{
          top: '50%',
          right: '30%',
        }}
        animate={{
          x: mouse.x * 1.2,
          y: mouse.y * 1.2,
        }}
        transition={{ type: 'spring', stiffness: 60, damping: 25 }}
      />

      {/* Subtle grid pattern overlay */}
      <div 
        className={`absolute inset-0 opacity-[0.02] ${darkMode ? 'bg-white' : 'bg-black'}`}
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
