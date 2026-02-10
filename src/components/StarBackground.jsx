import React, { useMemo, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const AdvancedStarBackground = () => {
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  
  const staticStars = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: `static-${i}`,
      size: Math.random() * 1.5 + 0.5,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
  }, []);


  const fallingStars = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: `falling-${i}`,
      size: Math.random() * 2 + 1,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.2,
    }));
  }, []);

  const shootingStars = useMemo(() => {
    return Array.from({ length: 2 }).map((_, i) => ({
      id: `shooting-${i}`,
      left: `${Math.random() * 80}%`,
      top: `${Math.random() * 40}%`,
      duration: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 30 + 10, 
    }));
  }, []);

  return (
    <div
      className="star-bg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        overflow: 'hidden',
        background: 'transparent',
      }}
    >
      {/* Interactive Mouse Glow - Uses motion values directly to avoid re-renders */}
      <motion.div
        style={{
          position: 'absolute',
          left: springX,
          top: springY,
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(79, 140, 255, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
          zIndex: 0,
        }}
      />

      {/* Static Twinkling Stars */}
      {staticStars.map((star) => (
        <motion.div
          key={star.id}
          animate={{
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            opacity: 0.3,
            willChange: 'opacity',
          }}
        />
      ))}

      {/* Falling Stars */}
      {fallingStars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, star.opacity, star.opacity, 0]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: star.left,
            width: star.size,
            height: star.size * 3,
            backgroundColor: '#4F8CFF',
            borderRadius: '50%',
            willChange: 'transform, opacity',
            // Simplified shadows for performance
            boxShadow: '0 0 4px rgba(79, 140, 255, 0.4)',
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ x: '-10%', y: '-10%', opacity: 0 }}
          animate={{
            x: ['0%', '150%'],
            y: ['0%', '150%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            repeatDelay: Math.random() * 20 + 20,
            ease: "easeOut"
          }}
          style={{
            position: 'absolute',
            left: star.left,
            top: star.top,
            width: '2px',
            height: '80px',
            background: 'linear-gradient(to bottom, transparent, #4F8CFF, #ffffff)',
            transform: 'rotate(-45deg)',
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
};

export default AdvancedStarBackground;
