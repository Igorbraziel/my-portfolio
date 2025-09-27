import { useUserData } from "../../../../data/user";
import RotatingText from "../../RotatingText";


export default function UserInfo() {
  const user = useUserData();
  return (
    <div className="text-center md:mb-8 lg:mb-10 xl:mb-12">
      <h2 className="font-title text-3xl font-bold uppercase sm:text-4xl lg:text-5xl">
        {user.name}
      </h2>
      <RotatingText textList={user.subtitles} />
    </div>
  );
}
