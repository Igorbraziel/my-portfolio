import profilePicture from "../../assets/images/profile_picture.jpg";

export default function Logo() {
  return <img
    className="h-15 w-15 rounded-full object-cover object-left sm:h-20 sm:w-20 md:h-25 md:w-25 lg:h-30 lg:w-30"
    src={profilePicture}
    alt="profile picture"
  />;
}
