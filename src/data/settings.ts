import { useTranslation } from "react-i18next";

export function useSettingsData() {
  const { t } = useTranslation("settings");

  return {
    settings: t("settings", { returnObjects: true }) as Settings,
  };
}

type Settings = {
  contactLabels: ContactLabels;
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
  copiedText: string;
};

type ContactLabels = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  location: string;
  contact: string;
  network: string;
  buttonText: string;
  submittingText: string;
  errorMessages: {
    name: string;
    email: string;
    message: string;
    nameMaxLength: string;
    emailMaxLength: string;
    subjectMaxLength: string;
    messageMaxLength: string;
    invalidEmail: string;
    invalidPhone: string;
  };
  successToast: string;
  errorToast: string;
};

type Footer = {
  kindText: string;
  copyrightMessage: string;
};
