import { SiEthers, SiExpress, SiNextdotjs, SiThreedotjs } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { RiFlutterFill, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { IconType } from "react-icons";
import { BiLogoFirebase } from "react-icons/bi";

export type LibType = {
  icon: IconType;
  name: string;
};

export const lib_data: { [key: string]: LibType } = {
  next: { icon: SiNextdotjs, name: "Next.js" },
  html: { icon: DiHtml5, name: "HTML5" },
  tailwind: { icon: RiTailwindCssFill, name: "Tailwind CSS" },
  threejs: { icon: SiThreedotjs, name: "Three.js" },
  ethers: { icon: SiEthers, name: "Ethers" },
  express: { icon: SiExpress, name: "Express" },
  node: { icon: FaNodeJs, name: "Node.js" },
  flutter: { icon: RiFlutterFill, name: "Flutter" },
  firebase: { icon: BiLogoFirebase, name: "Firebase" },
};
