import { user } from "../../data/user";

export default function UserInformation() {
  return (
    <>
      <h2 className="bold text-sm sm:text-base md:text-lg lg:text-xl">
        {user.name}
      </h2>
      <h3 className="text-[10px] font-light italic sm:text-xs md:text-sm lg:text-base xl:text-lg">
        {user.description}
      </h3>
    </>
  );
}
