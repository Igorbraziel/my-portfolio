import profileLightLogo from "../../assets/images/IB-logo-192x192.png";
import profileDarkLogo from "../../assets/images/IB-logo-dark-192x192.png";
import { useDarkMode } from "../../hooks/useDarkMode";

export default function Logo() {
  const { isDark } = useDarkMode();

  return (
    <img
      className="h-16 w-16 rounded-lg object-cover md:h-18 md:w-18 xl:h-22 xl:w-22"
      src={!isDark ? profileLightLogo : profileDarkLogo}
      alt="profile picture"
    />
  );
}
