import { useTranslation } from "react-i18next";

export function useSettingsData() {
  const { t } = useTranslation("settings");

  return {
    settings: t("settings", { returnObjects: true }) as Settings,
  };
}

type Settings = {
  uploadButtonText: string;
  viewButtonText: string;
  message404: string;
  backButtonText: string;
  about: string;
  footer: Footer;
  educationLabel: string;
  durationText: string;
  hoursText: string;
  technologiesText: string;
  certificatesText: string;
};

type Footer = {
  kindText: string;
  copyrightMessage: string;
};
