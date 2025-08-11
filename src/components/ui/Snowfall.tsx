import { motion } from 'motion/react';
import { random } from '../../utils/random';

const Snowflake = () => {
  const x = random(-10, 110) + 'vw';        // Horizontal position (vw allows it to be responsive)
  const yStart = random(-20, -10) + 'vh';   // Start just above the screen
  const duration = random(10, 25);         // Falling speed
  const delay = random(0, 5);             // Start delay
  const scale = random(0.5, 1.5);          // Size
  const drift = random(-15, 15);           // Side-to-side movement

  return (
    <motion.div
      className="bg-violet-400 rounded-full"
      style={{
        position: 'absolute',
        left: x,
        top: yStart,
        width: `${5 * scale}px`,
        height: `${5 * scale}px`,
        opacity: scale, // Smaller flakes are more transparent
      }}
      animate={{
        y: '110vh', // Animate to just below the viewport
        x: `calc(${x} + ${drift}px)`, // Add side-to-side drift
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      }}
    />
  );
};

interface SnowfallProps {
  count?: number
}

const Snowfall = ({ count = 200 }: SnowfallProps) => {

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[-1] w-screen h-screen overflow-hidden bg-slate-50 pointer-events-none"
    >
      {/* Create an array and map over it to render 'count' snowflakes */}
      {[...Array(count)].map((_, i) => (
        <Snowflake key={i} />
      ))}
    </div>
  );
};

export default Snowfall;