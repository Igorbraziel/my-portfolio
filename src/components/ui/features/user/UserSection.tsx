import { useSettingsData } from "../../../../data/settings";
import { useUserData } from "../../../../data/user";
import Typewriter from "../../TypeWriter";

export default function UserSection() {
  const user = useUserData();
  const { settings } = useSettingsData();

  return (
    <section className="my-4 space-y-2 text-neutral-950 dark:text-neutral-50">
      <h3 className="text-2xl font-black text-slate-800 sm:text-3xl lg:text-4xl dark:text-slate-400">
        {settings.about}
      </h3>
      <p className="text-base font-medium md:text-lg lg:text-xl xl:text-2xl">
        <Typewriter text={user.about} speed={30} />
      </p>
    </section>
  );
}
