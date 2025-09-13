import type { Graduation } from "../../data/user";

export default function PurposesList({
  graduation,
}: {
  graduation: Graduation;
}) {
  return (
    <ul className="space-y-1 py-2.5 pl-6 text-xs sm:text-sm md:text-base sm:py-3 lg:text-lg">
      {graduation.mainPurposes.map((purpose, index) => (
        <li
          className="list-item list-disc font-medium tracking-wide md:tracking-wider text-shadow-stone-600 text-shadow-xs dark:text-shadow-stone-200"
          key={index}
        >
          {purpose}
        </li>
      ))}
    </ul>
  );
}
