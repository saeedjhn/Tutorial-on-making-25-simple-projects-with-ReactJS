import { Icon } from "react-icons-kit";
import {
  instagram,
  facebook,
  linkedin,
  twitter,
  menu,
} from "react-icons-kit/feather/";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/projects",
    text: "Projects",
  },
  {
    id: 3,
    url: "/contant-us",
    text: "Content-Us",
  },
  {
    id: 4,
    url: "/about",
    text: "About",
  },
];

export const social = [
  {
    id: 1,
    url: "",
    icon: <Icon icon={instagram} size={18} />,
  },
  {
    id: 2,
    url: "",
    icon: <Icon icon={facebook} size={18} />,
  },
  {
    id: 3,
    url: "",
    icon: <Icon icon={twitter} size={18} />,
  },
  {
    id: 4,
    url: "",
    icon: <Icon icon={linkedin} size={18} />,
  },
];

export const btnIcon = <Icon icon={menu} size={24} />;
