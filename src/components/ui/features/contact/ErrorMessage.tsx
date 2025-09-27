interface ErrorMessageProps {
  text: string;
}

export default function ErrorMessage({ text }: ErrorMessageProps) {
  return (
    <p className="xs:text-xs mt-1 inline-block rounded-2xl bg-red-300/50 px-2 py-0.5 text-[10px] text-red-900 sm:px-3 sm:py-1.5 md:text-sm lg:text-base dark:bg-red-600/50 dark:text-red-100">
      {text}
    </p>
  );
}
