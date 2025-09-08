import PsychologyIcon from "@mui/icons-material/Psychology";
import { useUserData } from "../../data/user";

export default function EducationalCard() {
  const { graduation } = useUserData();

  return (
    <div className="mx-auto my-0 w-full border border-neutral-950 px-3 py-2 backdrop-blur-xs">
      <PsychologyIcon className="border border-purple-900 bg-purple-400" />
      <div className="flex flex-col divide-y divide-indigo-900">
        <div>
          <h3 className="text-lg">{graduation.undergraduateCourse}</h3>
          <h4 className="text-sm">
            {graduation.university} - {graduation.institute}
          </h4>
          <div className="text-xs">
            {graduation.dates.startDate} - {graduation.dates.endDate}{" "}
            <span>{graduation.status}</span>
          </div>
        </div>
        <p className="px-0.5 py-1 text-xs">{graduation.description}</p>
        <ol className="space-y-1 py-1 pl-6 text-xs">
          {graduation.mainPurposes.map((purpose) => (
            <li className="list-item list-disc">{purpose}</li>
          ))}
        </ol>
        <ul className="mt-1 flex gap-2 overflow-x-auto py-1 text-[10px]">
          {graduation.tags.map((tag) => (
            <li className="border border-black rounded-xl px-1.5 py-0.5 whitespace-nowrap">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
