"use client";

import { useState } from "react";
import { BsGithub } from "react-icons/bs";

import Frameworks from "./components/Frameworks";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import ProjectImageModal from "./components/ProjectImageModal";

export default function Home() {
  const [assoc, setAssoc] = useState<string | null>(null);

  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imagePath, setImagePath] = useState<
    | {
        project: string;
        index: number;
        maxIndex: number;
      }
    | undefined
  >(undefined);

  return (
    <div className="mx-auto max-w-sm sm:max-w-xl py-10 sm:py-20">
      <ProjectImageModal
        open={imageModalOpen}
        imagePath={imagePath}
        setImageModalOpen={setImageModalOpen}
        setImagePath={setImagePath}
      />
      <main className=" ">
        <header className="flex items-start gap-x-4">
          <div
            className="w-14 h-14 rounded-full aspect-square object-contain"
            style={{
              backgroundImage: "url(/pfp.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="grow">
            <h1 className="text-lg font-medium">Mike Wu</h1>
            <p className="font-light text-white/80">Web / Software Developer</p>
          </div>
          <div className="flex items-center gap-x-2">
            <a
              className="flex items-center gap-x-2 py-2 px-4 rounded bg-white/5 hover:bg-white/20 transition-all"
              href="https://github.com/mik-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub size={16} />
              <p className="text-sm">GitHub</p>
            </a>
          </div>
        </header>

        <section className="mt-10 space-y-2">
          <p className="text-white/80">
            Hi everyone, I am a web and software developer based in The
            Netherlands. I am currently doing my master&apos;s in Computer
            Science (AI Track) at the Delft University of Technology.
          </p>
        </section>

        <Languages setAssoc={setAssoc} assoc={assoc} />

        <Frameworks assoc={assoc} />

        <Projects
          setImageModalOpen={setImageModalOpen}
          setImagePath={setImagePath}
        />
      </main>
    </div>
  );
}
