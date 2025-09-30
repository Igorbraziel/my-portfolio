import type { Experience } from "../../../../data/user";

interface VerticalLineProps {
  experiences: Experience[];
}

export default function ExperienceVerticalLine({
  experiences,
}: VerticalLineProps) {
  return (
    <div
      className={`absolute left-0 h-full w-1 -translate-x-1/2 transform from-violet-400/90 via-fuchsia-400/90 to-purple-400/90 bg-gradient-to-b dark:from-violet-600/50 dark:via-fuchsia-600/50 dark:to-purple-600/50 ${experiences.length > 1 ? "sm:left-1/2" : ""}`}
    ></div>
  );
}
