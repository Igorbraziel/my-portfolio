import type { PropsWithChildren } from "react";

export default function MainContainer({ children }: PropsWithChildren) {
  return (
    <main className="mx-auto mt-0 sm:w-[80%] max-w-250 px-4 py-2 sm:px-5 sm:py-3 md:py-4 lg:px-6 lg:py-5 xl:px-9 xl:py-6 dark:text-neutral-400">
      { children }
    </main>
  );
}
