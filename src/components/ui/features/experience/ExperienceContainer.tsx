import type React from "react";

interface ExperienceContainerProps {
  index: number;
  children: React.ReactNode;
}

export default function ExperienceContainer({
  index,
  children
}: ExperienceContainerProps) {
  return (
    <div
      className={`relative mb-10 flex w-full ${
        (index + 1) % 2 === 0 ? "justify-start" : "justify-end"
      }`}
    >
      {children}
    </div>
  );
}
