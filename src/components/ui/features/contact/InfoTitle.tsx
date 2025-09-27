import type { PropsWithChildren } from "react";

export default function InfoTitle({ children }: PropsWithChildren) {
  return (
    <h3 className="lg:mb-0.5 flex items-center gap-1 text-sm font-semibold sm:text-base md:text-lg lg:text-xl">
      {children}
    </h3>
  );
}
