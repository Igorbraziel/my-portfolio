import type React from "react";
import Button from "../../Button";

interface ProjectLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function ProjectLink({ children, href }: ProjectLinkProps) {
  return (
    <a href={href} target="_blank" className="px-1 py-0.5">
      <Button
        size="extra-small"
        type="normal"
        extraClassNames="!text-xs sm:!text-sm lg:!text-base rounded-xl !tracking-wider hover:text-red-500 dark:hover:text-red-700"
      >
        {children}
      </Button>
    </a>
  );
}
