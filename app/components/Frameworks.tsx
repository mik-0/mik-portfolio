"use client";
import React from "react";
import { BiLogoFirebase } from "react-icons/bi";

import { BsDiscord, BsUnity } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiD3Dotjs,
  SiDotnet,
  SiElectron,
  SiEthers,
  // SiEthers,
  SiExpress,
  SiFlutter,
  SiNextdotjs,
  SiPytorch,
} from "react-icons/si";
const frameworks = [
  {
    icon: <SiNextdotjs size={20} />,
    name: "Next.js",
    assocs: ["tsjs", "htmlcss"],
    borderClass: "border-slate-500",
    shadowClass: "shadow-slate-800",
  },
  {
    icon: <FaReact size={20} />,
    name: "React",
    assocs: ["tsjs", "htmlcss"],
    borderClass: "border-blue-500/50",
    shadowClass: "shadow-blue-700/20",
  },
  {
    icon: <FaNodeJs size={20} />,
    name: "Node.js",
    assocs: ["tsjs"],
    borderClass: "border-green-600/50",
    shadowClass: "shadow-green-800/20",
  },
  {
    icon: <SiExpress size={20} />,
    name: "Express.js",
    assocs: ["tsjs"],
    borderClass: "border-gray-600/50",
    shadowClass: "shadow-gray-800/20",
  },
  {
    icon: <RiTailwindCssFill size={20} />,
    name: "Tailwind",
    assocs: ["tsjs", "htmlcss"],
    borderClass: "border-cyan-500/50",
    shadowClass: "shadow-cyan-700/20",
  },
  {
    icon: <DiMongodb size={20} />,
    name: "MongoDB",
    assocs: ["tsjs"],
    borderClass: "border-green-500/50",
    shadowClass: "shadow-green-700/20",
  },
  {
    icon: <BiLogoFirebase size={20} />,
    name: "Firebase",
    assocs: ["tsjs", "dart"],
    borderClass: "border-orange-500/50",
    shadowClass: "shadow-orange-700/20",
  },
  {
    icon: <BsDiscord size={20} />,
    name: "Discord.js",
    assocs: ["tsjs"],
    borderClass: "border-purple-500",
    shadowClass: "shadow-purple-700/20",
  },
  {
    icon: <SiElectron size={20} />,
    name: "Electron",
    assocs: ["tsjs", "htmlcss"],
    borderClass: "border-gray-500/50",
    shadowClass: "shadow-gray-700/20",
  },
  {
    icon: <SiPytorch size={20} />,
    name: "Pytorch",
    assocs: ["python"],
    borderClass: "border-red-500/50",
    shadowClass: "shadow-red-700/20",
  },
  {
    icon: <SiFlutter size={20} />,
    name: "Flutter",
    assocs: ["dart"],
    borderClass: "border-blue-400/50",
    shadowClass: "shadow-blue-600/20",
  },
  {
    icon: <BsUnity size={20} />,
    name: "Unity",
    assocs: ["csharp"],
    borderClass: "border-black",
    shadowClass: "shadow-black",
  },
  {
    icon: <SiD3Dotjs size={20} />,
    name: "D3",
    assocs: ["tsjs"],
    borderClass: "border-orange-500/50",
    shadowClass: "shadow-orange-700/20",
  },
  {
    icon: <SiEthers size={20} />,
    name: "Ethers",
    assocs: ["tsjs"],
    borderClass: "border-indigo-500/50",
    shadowClass: "shadow-indigo-700/20",
  },
  {
    icon: <SiDotnet size={20} />,
    name: ".NET",
    assocs: ["csharp"],
    borderClass: "border-purple-700/50",
    shadowClass: "shadow-purple-900/20",
  },
  {
    icon: <FiFigma size={20} />,
    name: "Figma",
    assocs: ["tsjs", "htmlcss"],
    borderClass: "border-red-700/50",
    shadowClass: "shadow-red-900/20",
  },
];

const Frameworks = ({ assoc }: { assoc: string | null }) => {
  return (
    <section className="mt-10 space-y-2">
      <h2 className="text-white/70">Frameworks / Libraries</h2>
      <div className="flex w-full flex-wrap gap-2 *:basis-[calc(33.33%-0.5rem)] *:max-w-[calc(33.33%-0.5rem)] sm:*:basis-[calc(25%-0.5rem)] sm:*:max-w-[calc(25%-0.5rem)] *:inline-flex *:items-center *:gap-x-2">
        {frameworks?.map((framework: any, index: number) => (
          <div key={index} className="grow">
            <div
              className={`w-full p-3 flex items-center gap-x-2 transition-all duration-300 rounded border-[1px] border-transparent
                  ${
                    assoc != null
                      ? framework.assocs.includes(assoc)
                        ? "bg-white/[0.15] shadow-xl " +
                          `${framework.shadowClass}`
                        : "bg-white/[0.015] text-white/50"
                      : "bg-white/[0.035]"
                  }`}
            >
              {framework.icon}
              <p>{framework.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Frameworks;
