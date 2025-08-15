import { useUserData } from "../../data/user";
import Typewriter from "./TypeWriter";

export default function Intro() {
  const user = useUserData();

  return (
    <div className="mb-4 flex flex-wrap w-full justify-center rounded-sm border border-neutral-400 dark:border-neutral-600 dark:bg-slate-800 bg-neutral-200 py-2 shadow-md dark:shadow-slate-700 shadow-stone-800">
      <Typewriter text={user.shortResume} speed={30} className="w-[70%] text-xs tracking-widest" />
    </div>
  );
}
