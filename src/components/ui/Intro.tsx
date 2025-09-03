import { useUserData } from "../../data/user";
import Typewriter from "./TypeWriter";

export default function Intro() {
  const user = useUserData();

  return (
    <div className="xs:text-sm mb-6 flex w-[70%] flex-wrap justify-center rounded-sm border border-neutral-400 bg-neutral-200 px-5 py-3 text-xs font-bold tracking-widest shadow-md shadow-stone-800 sm:px-8 sm:py-5 sm:text-sm md:w-[65%] md:px-10 md:py-7 md:text-lg lg:px-12 lg:py-8 lg:text-xl xl:px-12 xl:py-10 xl:text-2xl dark:border-neutral-600 dark:bg-slate-800 dark:text-slate-100 dark:shadow-slate-700">
      <Typewriter text={user.shortResume} speed={30} />
    </div>
  );
}
