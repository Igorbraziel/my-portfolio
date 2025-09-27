import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

interface MainContainerProps {
  className?: string;
}

export default function MainContainer({
  children,
  className = "",
}: PropsWithChildren<MainContainerProps>) {
  const { i18n } = useTranslation();

  return (
    <main
      key={i18n.language}
      className={`mx-auto mt-0 flex w-[90%] max-w-250 flex-1 flex-col px-4 py-2 sm:w-[80%] sm:px-5 sm:py-2.5 md:space-y-2 md:py-3 lg:px-6 lg:py-3.5 xl:px-9 xl:py-4 ${className}`}
    >
      {children}
    </main>
  );
}
