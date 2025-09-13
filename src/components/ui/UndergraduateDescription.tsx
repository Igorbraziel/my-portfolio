import type { Graduation } from "../../data/user";

export default function UndergraduateDescription({
  graduation,
}: {
  graduation: Graduation;
}) {
  return (
    <p className="lg:text-xl sm:py-2 md:text-lg md:py-2.5 md:px-1 px-0.5 py-1.5 text-sm font-semibold tracking-wide text-gray-800 sm:text-base dark:tracking-wider dark:text-gray-200">
      {graduation.description}
    </p>
  );
}
