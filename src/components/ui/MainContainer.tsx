import type { PropsWithChildren } from "react";

export default function MainContainer({ children }: PropsWithChildren) {
  return (
    <main className="mx-auto mt-0 flex w-full max-w-250 flex-1 flex-col px-4 py-2 sm:w-[80%] sm:px-5 sm:py-3 md:space-y-2 md:py-4 lg:px-6 lg:py-5 xl:px-9 xl:py-6">
      {children}
    </main>
  );
}
