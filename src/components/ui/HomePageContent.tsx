import Intro from "./Intro";
import Picture from "./Picture";

export default function HomePageContent() {
  return (
    <div className="flex-1 space-y-7 sm:space-y-0 mt-2 flex flex-col items-center sm:grid sm:grid-cols-[2fr_1fr]">
      <Picture />
      <Intro />
    </div>
  );
}
