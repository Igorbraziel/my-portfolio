import profileLogo from "../../assets/images/ProfessionalLogo.png";

export default function Logo() {
  return (
    <img
      className="h-16 w-16 rounded-lg object-cover md:h-18 md:w-18 xl:h-22 xl:w-22"
      src={profileLogo}
      alt="profile picture"
    />
  );
}
