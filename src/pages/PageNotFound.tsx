import { useNavigate } from "react-router";
import MainContainer from "../components/ui/MainContainer";
import { useSettingsData } from "../data/settings";
import Button from "../components/ui/Button";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";

export default function PageNotFound() {
  const navigate = useNavigate();
  const { settings } = useSettingsData();

  return (
    <MainContainer>
      <div className="mt-4 flex flex-1 flex-col items-center justify-center gap-5 md:gap-7 lg:gap-9">
        <h1 className="font-title text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
          {settings.message404}
        </h1>
        <Button type="normal" size="extra-large" onClick={() => navigate(-1)}>
          <ArrowBackSharpIcon fontSize="large" /> {settings.backButtonText}
        </Button>
      </div>
    </MainContainer>
  );
}
