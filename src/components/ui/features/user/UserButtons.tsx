import { useSettingsData } from "../../../../data/settings";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import Button from "../../Button";

export default function UserButtons() {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const { settings } = useSettingsData();

  return (
    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:gap-8 lg:gap-12 xl:gap-14">
      <a
        href="/IgorReisBraziel_FullStack.pdf"
        download
        className="flex-1 sm:flex-auto"
      >
        <Button
          extraClassNames="w-full"
          type="normal"
          size={isTablet ? "large" : isLaptop ? "extra-large" : "medium"}
        >
          {settings.uploadButtonText}
        </Button>
      </a>
      <a
        href="https://drive.google.com/file/d/1YOxVL0IN5_mobAu7BO9D-eDZd94hjXW5/view?usp=drive_link"
        target="_blank"
        className="flex-1 sm:flex-auto"
      >
        <Button
          extraClassNames="w-full"
          type="normal"
          size={isTablet ? "large" : isLaptop ? "extra-large" : "medium"}
        >
          {settings.viewButtonText}
        </Button>
      </a>
    </div>
  );
}
