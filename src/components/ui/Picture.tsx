import profilePicture from "../../assets/images/profile_picture.jpg";

export default function Picture() {
  return (
    <div className="col-start-2 row-start-1 row-end-3 h-45 w-40 rounded-lg bg-gradient-to-tr from-blue-700 via-purple-700 to-zinc-700 p-2 sm:h-70 sm:w-45 md:h-75 md:w-50 lg:w-60 dark:from-blue-900 dark:via-purple-900 dark:to-zinc-900">
      <img
        src={profilePicture}
        alt="Igor Reis Braziel"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
