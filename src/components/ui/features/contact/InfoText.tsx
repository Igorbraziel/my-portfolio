import type { PropsWithChildren } from "react";

export default function InfoText({ children }: PropsWithChildren) {
  return (
    <div className="ml-2 pl-1 text-[10px] text-gray-700 dark:text-gray-400 sm:text-xs lg:text-sm xl:text-base">
      {children}
    </div>
  );
}
