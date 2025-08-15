import type { PropsWithChildren } from "react";

export default function MainContainer({ children }: PropsWithChildren) {
  return (
    <main className="md:space-y-2 flex-1 flex flex-col mx-auto mt-0 sm:w-[80%] max-w-250 px-4 py-2 sm:px-5 sm:py-3 md:py-4 lg:px-6 lg:py-5 xl:px-9 xl:py-6">
      { children }
    </main>
  );
}
