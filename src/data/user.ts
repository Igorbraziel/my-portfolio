import { useTranslation } from "react-i18next";

export function useUserData() {
  const { t } = useTranslation("user");

  return {
    name: t("name"),
    subtitles: t("subtitles", { returnObjects: true }) as string[],
    address: t("address"),
    media: t("media", { returnObjects: true }) as SocialMedia[],
  };
}

export type SocialMedia = {
  name: string;
  profileURL: string;
  mediaIcon: string;
  bgColor: string;
  textColor: string;
};
