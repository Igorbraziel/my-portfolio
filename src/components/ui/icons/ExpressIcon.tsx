import type React from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";

export default function ExpressIcon(props: React.SVGProps<SVGSVGElement>) {
  const { isDark } = useDarkMode();

  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28.777,14.416l4.9814,18.591"
        fill="none"
        stroke={!isDark ? "#000000" : "#FFFFFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.248,14.416,23.287,33.007"
        fill="none"
        stroke={!isDark ? "#000000" : "#FFFFFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.022,14.416H14.193"
        fill="none"
        stroke={!isDark ? "#000000" : "#FFFFFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.038,23.711H11.209"
        fill="none"
        stroke={!isDark ? "#000000" : "#FFFFFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.055,33.007H8.226"
        fill="none"
        stroke={!isDark ? "#000000" : "#FFFFFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="24"
        cy="24"
        r="21.5"
        fill="none"
        stroke={!isDark ? "#000000" : "#FFFFFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
