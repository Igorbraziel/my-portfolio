import type React from "react";
import { Link } from "react-router";
import DynamicBackground from "./DynamicBackground";
import EastIcon from "@mui/icons-material/East";
import { useDarkMode } from "../../hooks/useDarkMode";

interface NextPageProps {
  path: string;
  children: React.ReactNode;
}

const lightColors = [
  "linear-gradient(90deg, #e3abe8, #783aa5, #7c78e4)",
  "linear-gradient(90deg, #7c78e4, #d635ae, #7b9ee4)",
  "linear-gradient(90deg, #7b9ee4, #353ad6, #e3abe8)",
];

const darkColors = [
  "linear-gradient(90deg, #66076e, #3e1e55, #090657)",
  "linear-gradient(90deg, #090657, #4d0f3d, #042361)",
  "linear-gradient(90deg, #042361, #0a0b2d, #66076e)",
];

export default function NextPageLink({ path, children }: NextPageProps) {
  const { isDark } = useDarkMode()

  return (
    <div className="flex justify-end">
      <DynamicBackground
        colors={isDark ? darkColors : lightColors}
        className="rounded-xl px-3 py-2 duration-100 hover:scale-110"
      >
        <Link to={path}>
          {children} <EastIcon />
        </Link>
      </DynamicBackground>
    </div>
  );
}
