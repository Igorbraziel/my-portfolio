import type { PropsWithChildren } from "react";

export default function Title({ children }: PropsWithChildren) {
  return (
    <h1 className="font-title bg-gradient-to-r from-purple-500 via-blue-500 bg-clip-text px-0.5 text-3xl font-black tracking-widest text-transparent sm:mb-0.5 sm:py-0.5 sm:text-4xl md:py-1 md:text-5xl lg:mb-1 lg:py-1.5 lg:text-6xl dark:from-violet-800 dark:via-fuchsia-900 dark:to-indigo-800">
      { children }
    </h1>
  );
}
