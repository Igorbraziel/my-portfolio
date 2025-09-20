import type React from "react";

type TitleProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

export default function Title<T extends React.ElementType = "h1">({
  children,
  as,
  ...props
}: TitleProps<T>) {
  const Component = as || "h1";

  return (
    <Component
      className={`font-title my-1 bg-gradient-to-r from-violet-950 via-blue-950 to-fuchsia-950 bg-clip-text p-1 text-center text-2xl font-bold text-transparent uppercase sm:my-2 sm:text-3xl md:my-3 md:text-4xl lg:my-4 lg:p-1.5 lg:text-5xl dark:from-violet-200 dark:via-blue-200 dark:to-fuchsia-200 ${props?.className}`}
    >
      {children}
    </Component>
  );
}
