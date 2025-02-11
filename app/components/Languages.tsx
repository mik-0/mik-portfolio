import React from "react";
import { DiPython } from "react-icons/di";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import {
  SiCsharp,
  SiDart,
  SiJavascript,
  SiPhp,
  SiTypescript,
} from "react-icons/si";
import { MagicCard, MagicContainer } from "./Magic";

const Languages = ({
  assoc,
  setAssoc,
}: {
  assoc: string | null;
  setAssoc: (assoc: string | null) => void;
}) => {
  const mouseOver = (assoc: string) => {
    setAssoc(assoc);
  };

  const mouseOut = () => {
    setAssoc(null);
  };

  const getAssocClass = (inAssoc: string | null) => {
    if (assoc == null) {
      return "";
    }

    if (assoc === inAssoc) {
      return "";
    } else {
      return "opacity-[.65]";
    }
  };

  return (
    <section
      className="mt-10 space-y-2"
      style={
        {
          "--card": "10 0% 13%",
        } as React.CSSProperties
      }
    >
      <h2 className="text-white/70">Programming Languages</h2>
      <MagicContainer className="grid grid-cols-6 grid-rows-6 gap-2 h-[450px] *:transition-all *:duration-500 *:p-6 *:flex *:flex-col *:justify-between">
        <MagicCard
          className={`col-span-3 row-span-4 rounded hover:brightness-200 ${getAssocClass(
            "tsjs"
          )}`}
          onMouseOver={() => mouseOver("tsjs")}
          onMouseOut={mouseOut}
        >
          <div className="flex items-center gap-x-2">
            <SiTypescript size={30} />
            <SiJavascript size={30} />
          </div>
          <div>
            <p>TypeScript / JavaScript</p>
            <p className="text-white/50 text-sm">Web Development</p>
          </div>
        </MagicCard>
        <MagicCard
          className={`col-span-3 row-span-2 col-start-4 rounded hover:brightness-200 ${getAssocClass(
            "python"
          )}`}
          onMouseOver={() => mouseOver("python")}
          onMouseOut={mouseOut}
        >
          <DiPython size={20} />
          <div>
            <p>Python</p>
            <p className="text-white/50 text-sm">AI + Data Visualization</p>
          </div>
        </MagicCard>
        <MagicCard
          className={`col-span-3 row-span-2 col-start-4 row-start-3 rounded hover:brightness-200 ${getAssocClass(
            "csharp"
          )}`}
          onMouseOver={() => mouseOver("csharp")}
          onMouseOut={mouseOut}
        >
          <SiCsharp size={20} />
          <div>
            <p>C#</p>
            <p className="text-white/50 text-sm">Application Development</p>
          </div>
        </MagicCard>

        <MagicCard
          className={`col-span-4 row-span-2 row-start-5 rounded hover:brightness-200 ${getAssocClass(
            "htmlcss"
          )}`}
          onMouseOver={() => mouseOver("htmlcss")}
          onMouseOut={mouseOut}
        >
          <div className="flex items-center gap-x-2">
            <FaHtml5 size={20} />
            <FaCss3 size={20} />
          </div>
          <div>
            <p>HTML / CSS / JSX</p>
            <p className="text-white/50 text-sm">Web Development</p>
          </div>
        </MagicCard>
        <MagicCard
          className={`col-span-2 col-start-5 row-start-5 items-center gap-x-4 !justify-normal !flex-row rounded hover:brightness-200 ${getAssocClass(
            "dart"
          )}`}
          onMouseOver={() => mouseOver("dart")}
          onMouseOut={mouseOut}
        >
          <SiDart size={20} />
          <div>
            <p>Dart</p>
            <p className="text-white/50 text-sm">
              Mobile <span className="hidden sm:inline">Dev</span>
            </p>
          </div>
        </MagicCard>
        <MagicCard
          className={`col-span-2 col-start-5 row-start-6 items-center gap-x-4 !justify-normal !flex-row rounded hover:brightness-200 ${getAssocClass(
            "php"
          )}`}
          onMouseOver={() => mouseOver("php")}
          onMouseOut={mouseOut}
        >
          <SiPhp size={20} />
          <div>
            <p>PHP</p>
            <p className="text-white/50 text-sm">
              Back-end <span className="hidden sm:inline">Dev</span>
            </p>
          </div>
        </MagicCard>
      </MagicContainer>
    </section>
  );
};

export default Languages;
