import { BiSolidLandscape } from "react-icons/bi";
import { MdPortrait } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";

// FOR ADMIN LAYOUT
export const SideLinks = [
  {
    name: "Landscape",
    icon: <BiSolidLandscape />,
    link: "",
  },
  {
    name: "Portrait",
    icon: <MdPortrait />,
    link: "/portrait",
  },
  {
    name: "Settings",
    icon: <AiFillSetting />,
    link: "/settings",
  },
];
