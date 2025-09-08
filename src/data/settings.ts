import { useTranslation } from "react-i18next";

export function useSettingsData() {
  const { t } = useTranslation("settings");

  return {
    uploadButtonText: t("uploadButtonText"),
    viewButtonText: t("viewButtonText"),
    message404: t("message404"),
    backButtonText: t("backButtonText"),
    about: t("about"),
    footer: t("footer", { returnObjects: true }) as Footer,
    educationLabel: t("educationLabel"),
  };
}

type Footer = {
  kindText: string;
  copyrightMessage: string;
};
