import { motion } from "motion/react";
import { memo, useMemo } from "react";
import { random } from "../../utils/random";
import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

const Star = memo(function Star({
  driftX,
  driftY,
}: {
  driftX: number;
  driftY: number;
}) {
  const { top, left, twinkleDuration, driftDurationX, driftDurationY, delay } =
    useMemo(
      () => ({
        top: random(0, 100) + "vh",
        left: random(0, 100) + "vw",
        twinkleDuration: random(2, 6),
        driftDurationX: random(100, 200), // Longer duration for slower drift
        driftDurationY: random(100, 200),
        delay: random(0, 10),
      }),
      [],
    );

  // Base style for the central bar of the star
  const starBaseStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "4px",
    height: "4px",
    backgroundColor: "white",
    borderRadius: "2px",
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
          ease: "linear",
        },
        y: {
          duration: driftDurationY,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        },
      }}
    >
      <div style={starBaseStyle} />
    </motion.div>
  );
});

export const CosmicBackground = memo(function CosmicBackground() {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isLaptop = useMediaQuery("(min-width: 1024px)");

  const starNumber = isTablet ? 100 : isLaptop ? 150 : 100;

  const foregroundStars = useMemo(
    () =>
      [...Array(starNumber)].map((_, i) => (
        <Star key={`l1-${i}`} driftX={100} driftY={250} />
      )),
    [starNumber],
  );

  const midGroundStars = useMemo(
    () =>
      [...Array(starNumber)].map((_, i) => (
        <Star key={`l2-${i}`} driftX={60} driftY={30} />
      )),
    [starNumber],
  );

  const backgroundStars = useMemo(
    () =>
      [...Array(starNumber)].map((_, i) => (
        <Star key={`l3-${i}`} driftX={20} driftY={10} />
      )),
    [starNumber],
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 -z-10 h-screen w-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, oklch(13% 0.028 261.692) 0%, oklch(20.8% 0.042 265.755) 100%)",
      }}
    >
      {/* Layer 1: Foreground stars - largest, brightest, and fastest drift */}
      <div
        className="absolute inset-0 opacity-80"
        style={{ transform: "scale(1)" }}
      >
        {foregroundStars}
      </div>

      {/* Layer 2: Mid-ground stars - medium size, brightness, and speed */}
      <div
        className="absolute inset-0 opacity-50"
        style={{ transform: "scale(0.6)" }}
      >
        {midGroundStars}
      </div>

      {/* Layer 3: Background stars - smallest, dimmest, and slowest drift */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ transform: "scale(0.3)" }}
      >
        {backgroundStars}
      </div>
    </div>
  );
});
