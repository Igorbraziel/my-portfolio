import { user } from "../../data/user";
import SocialMedia from "../ui/SocialMedia";

export default function Footer() {
  return (
    <footer className="md:col-span-2 absolute bottom-0 w-full space-y-1 bg-slate-200 px-2 py-3 text-center text-[10px] font-light italic sm:space-y-2 sm:px-3 sm:py-4 sm:text-xs md:space-y-3 md:px-4 md:py-5 md:text-sm lg:space-y-3.5 lg:px-5 lg:py-6 lg:text-base dark:bg-slate-700">
      <p>Built with ❤️ in {user.address}</p>
      <p>
        ©️ {new Date().getFullYear()} by <strong>{user.name}</strong>, All rights reserved
      </p>
      <SocialMedia />
    </footer>
  );
}
