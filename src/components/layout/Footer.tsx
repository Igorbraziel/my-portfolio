import { useSettingsData } from "../../data/settings";
import { useUserData } from "../../data/user";
import CountriesSelector from "../ui/CountriesSelector";
import SocialMedia from "../ui/SocialMedia";

interface FooterProps {
  countryCode: string;
  setCountryCode: (arg0: string) => void;
}

export default function Footer({ countryCode, setCountryCode}: FooterProps) {
  const user = useUserData();
  const settings = useSettingsData();
  
  return (
    <footer className="w-full space-y-4 bg-indigo-400 px-2 py-3 text-center text-[12px] sm:space-y-2.5 sm:px-3 sm:py-4 sm:text-xs md:col-span-2 md:space-y-3 md:px-4 md:py-5 md:text-sm lg:space-y-3.5 lg:px-5 lg:py-6 lg:text-base dark:bg-slate-600">
      <CountriesSelector
        setSelectedValue={setCountryCode}
        defaultCountryCode={countryCode}
        countries={[
          { code: "en", name: "United States", emoji: "🇺🇸"  },
          { code: "pt", name: "Brasil", emoji: "🇧🇷" },
          { code: "es", name: "España", emoji: "🇪🇸" },
        ]}
      />
      <div>
        <p>{settings.footer.kindText} {user.address}</p>
        <p>
          <strong>©️</strong> {new Date().getFullYear()} by{" "}
          <strong>{user.name}</strong>, {settings.footer.copyrightMessage}
        </p>
      </div>
      <SocialMedia />
    </footer>
  );
}
