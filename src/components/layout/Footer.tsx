import { useUserData } from "../../data/user";
import SocialMedia from "../ui/SocialMedia";

export default function Footer() {
  const user = useUserData();

  return (
    <footer className="w-full space-y-2 bg-indigo-400 px-2 py-3 text-center text-[10px] italic sm:space-y-2.5 sm:px-3 sm:py-4 sm:text-xs md:col-span-2 md:space-y-3 md:px-4 md:py-5 md:text-sm lg:space-y-3.5 lg:px-5 lg:py-6 lg:text-base dark:bg-slate-600">
      <div>
        <p>Built with ❤️ in {user.address}</p>
        <p>
          <strong>©️</strong> {new Date().getFullYear()} by <strong>{user.name}</strong>, All
          rights reserved
        </p>
      </div>
      <SocialMedia />
    </footer>
  );
}
