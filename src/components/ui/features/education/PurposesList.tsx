import type { Graduation } from "../../../../data/user";

export default function PurposesList({
  graduation,
}: {
  graduation: Graduation;
}) {
  return (
    <ul className="space-y-1 py-2.5 pl-6 text-xs sm:py-3 sm:text-sm md:text-base lg:text-lg">
      {graduation.mainPurposes.map((purpose, index) => (
        <li
          className="list-item list-disc font-medium tracking-wide text-shadow-stone-600 text-shadow-xs md:tracking-wider dark:text-shadow-stone-200"
          key={index}
        >
          {purpose}
        </li>
      ))}
    </ul>
  );
}
