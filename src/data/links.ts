import CabinIcon from "@mui/icons-material/Cabin";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SchoolIcon from "@mui/icons-material/School";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import EngineeringIcon from '@mui/icons-material/Engineering';
import InfoIcon from '@mui/icons-material/Info';


export const links = [
  {
    label: "home",
    path: "/homepage",
    icon: CabinIcon,
  },
  {
    label: "about",
    path: "/about",
    icon: InfoIcon,
  },
  {
    label: "education",
    path: "/education",
    icon: SchoolIcon,
  },
  {
    label: "skills",
    path: "/skills",
    icon: EngineeringIcon,
  },
  {
    label: "projects",
    path: "/projects",
    icon: LibraryBooksIcon,
  },

  {
    label: "contact",
    path: "/contact",
    icon: ContactMailIcon,
  },
];
