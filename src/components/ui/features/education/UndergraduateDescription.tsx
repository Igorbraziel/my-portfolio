import type { Graduation } from "../../../../data/user";

export default function UndergraduateDescription({
  graduation,
}: {
  graduation: Graduation;
}) {
  return (
    <p className="px-0.5 py-1.5 text-sm font-semibold tracking-wide text-gray-800 sm:py-2 sm:text-base md:px-1 md:py-2.5 md:text-lg lg:text-xl dark:tracking-wider dark:text-gray-200">
      {graduation.description}
    </p>
  );
}
