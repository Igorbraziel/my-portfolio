import * as React from "react";

type LogoProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  withCircle?: boolean; // toggle background circle
};

/**
 * IRB Monogram Logo (custom SVG)
 * - Uses CSS variables for gradient colors:
 *   --logo-from, --logo-mid, --logo-to
 * - Example Tailwind usage:
 *   <IRBLogo size={48} className="block" style={{ ['--logo-from' as any]:'#60a5fa', ['--logo-mid' as any]:'#a78bfa', ['--logo-to' as any]:'#f472b6' }} />
 */
const IBLogo: React.FC<LogoProps> = ({ size = 32, withCircle = true, ...props }) => (
  <svg
    viewBox="0 0 256 256"
    width={size}
    height={size}
    role="img"
    aria-label="IRB monogram logo"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="irb_g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="var(--logo-from, #60a5fa)"/>
        <stop offset="50%" stopColor="var(--logo-mid, #a78bfa)"/>
        <stop offset="100%" stopColor="var(--logo-to, #f472b6)"/>
      </linearGradient>
    </defs>

    {withCircle && <circle cx="128" cy="128" r="120" fill="url(#irb_g)" />}

    {/* Monogram shapes (use currentColor if you prefer to tint with Tailwind) */}
    <g fill="white" fillOpacity="0.9">
      <rect x="116" y="56" width="24" height="144" rx="12" />
      <path d="M116 56h36c28 0 50 22 50 50s-22 50-50 50h-36v-28h36c12 0 22-10 22-22s-10-22-22-22h-36V56z"/>
      <path d="M116 128h40c24 0 44 20 44 44 0 5-1 10-3 14h-34c7-3 11-10 11-18 0-10-8-18-18-18h-40v-22z"/>
    </g>
  </svg>
);

export default IBLogo;
