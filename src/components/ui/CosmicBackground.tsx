import { motion } from 'motion/react';
import { useMemo } from 'react';
import { random } from '../../utils/random';
import React from 'react';

const Star = ({ driftX, driftY }: {driftX: number; driftY: number }) => {
  const { top, left, twinkleDuration, driftDurationX, driftDurationY, delay } = useMemo(() => ({
    top: random(0, 100) + 'vh',
    left: random(0, 100) + 'vw',
    twinkleDuration: random(2, 6),
    driftDurationX: random(100, 200), // Longer duration for slower drift
    driftDurationY: random(100, 200),
    delay: random(0, 10),
  }), []);

  // Base style for the central bar of the star
  const starBaseStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '4px',
    height: '4px',
    backgroundColor: 'white',
    borderRadius: '2px',
  };

  return (
    <motion.div
      className="absolute"
      style={{ top, left }}
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{
        // Twinkling animation
        opacity: [0, 1, 0],
        // Drifting animation
        x: [0, driftX, 0],
        y: [0, driftY, 0],
      }}
      transition={{
        delay,
        // Apply different transitions for each animated property
        opacity: {
          duration: twinkleDuration,
          repeat: Infinity,
          repeatType: "mirror",
        },
        x: {
          duration: driftDurationX,
          repeat: Infinity,
          repeatType: "mirror",
          ease: 'linear',
        },
        y: {
          duration: driftDurationY,
          repeat: Infinity,
          repeatType: "mirror",
          ease: 'linear',
        },
      }}
    >
      {/* This creates the 6-pointed star shape using 3 overlapping divs */}
      <div style={starBaseStyle} />
      <div style={{ ...starBaseStyle, transform: 'rotate(60deg)' }} />
      <div style={{ ...starBaseStyle, transform: 'rotate(-60deg)' }} />
    </motion.div>
  );
};

export const CosmicBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 -z-10 w-screen h-screen overflow-hidden pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at 50% 50%, oklch(13% 0.028 261.692) 0%, oklch(20.8% 0.042 265.755) 100%)' }}
    >
      {/* Layer 1: Foreground stars - largest, brightest, and fastest drift */}
      <div className="absolute inset-0 opacity-80" style={{ transform: 'scale(1)' }}>
        {[...Array(100)].map((_, i) => <Star key={`l1-${i}`} driftX={100} driftY={50} />)}
      </div>

      {/* Layer 2: Mid-ground stars - medium size, brightness, and speed */}
      <div className="absolute inset-0 opacity-50" style={{ transform: 'scale(0.6)' }}>
        {[...Array(100)].map((_, i) => <Star key={`l2-${i}`} driftX={60} driftY={30} />)}
      </div>
      
      {/* Layer 3: Background stars - smallest, dimmest, and slowest drift */}
      <div className="absolute inset-0 opacity-30" style={{ transform: 'scale(0.3)' }}>
        {[...Array(100)].map((_, i) => <Star key={`l3-${i}`} driftX={20} driftY={10} />)}
      </div>
    </div>
  );
};