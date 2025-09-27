import InfoBox from "./InfoBox";
import InfoTitle from "./InfoTitle";
import InfoText from "./InfoText";

import { useSettingsData } from "../../../../data/settings";
import { useUserData } from "../../../../data/user";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import SensorsIcon from "@mui/icons-material/Sensors";

import { motion } from "motion/react";
import CopyText from "../../CopyText";

export default function ContactInfo() {
  const { settings } = useSettingsData();
  const {
    contactLabels: { location, contact, network },
  } = settings;
  const { media, address } = useUserData();

  const emailText = "braziel@discente.ufg.br";
  const phoneNumber = "+55 (62) 98508-7202";

  return (
    <div className="flex flex-col gap-4">
      <InfoBox>
        <InfoTitle>
          <LocationOnIcon fontSize="inherit" />
          {location}
        </InfoTitle>
        <InfoText>{address}</InfoText>
      </InfoBox>
      <InfoBox>
        <InfoTitle>
          <MailIcon fontSize="inherit" /> {contact}
        </InfoTitle>
        <InfoText>
          <CopyText text={phoneNumber} />
        </InfoText>
        <InfoText>
          <CopyText text={emailText} />
        </InfoText>
      </InfoBox>
      <InfoBox>
        <InfoTitle>
          <SensorsIcon fontSize="inherit" />
          {network}
        </InfoTitle>
        <div className="xs:gap-3 ml-2 flex gap-2 py-1 md:gap-4">
          {media.map((md, index) => (
            <motion.a
              target="_blank"
              key={index}
              href={md.profileURL}
              className="cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              {
                <md.mediaIcon
                  className={`xs:w-5.5 xs:h-5.5 h-5 w-5 shadow-md shadow-gray-800 sm:h-6 sm:w-6 lg:h-7 lg:w-7 xl:h-7.5 xl:w-7.5 dark:shadow-sm dark:shadow-gray-400 ${md.name == "GitHub" ? "rounded-full border-2 border-gray-950 bg-black dark:border-gray-100 dark:bg-white" : "rounded-sm border-2 border-gray-950 bg-gray-50 dark:border-gray-50 dark:bg-gray-950"}`}
                />
              }
            </motion.a>
          ))}
        </div>
      </InfoBox>
    </div>
  );
}
