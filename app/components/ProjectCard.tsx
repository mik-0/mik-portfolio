import Image from "next/image";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { LibType } from "../constants";

export const ProjectCard = ({
  project,
  setImageModalOpen,
  setImagePath,
}: {
  project: {
    name: string;
    description: string;
    tag: string;
    imagesFolder: string;
    noImages: number;
    libraries: LibType[];
    link?: string;
    linkText?: string;
  };
  setImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setImagePath: React.Dispatch<
    React.SetStateAction<
      | {
          project: string;
          index: number;
          maxIndex: number;
        }
      | undefined
    >
  >;
}) => {
  return (
    <div className="bg-white/[0.07] hover:bg-white/10 duration-300 transition-all rounded p-4">
      <div className="flex items-center gap-x-2 overflow-x-auto mb-4">
        {[...Array(project.noImages)].map((_, index) => (
          <Image
            key={index}
            src={project.imagesFolder + `${index + 1}.jpg`}
            alt={project.name}
            width={200}
            height={100}
            className="rounded transition-all hover:brightness-50 cursor-zoom-in"
            onClick={() => {
              setImageModalOpen(true);
              setImagePath({
                project: project.imagesFolder,
                index: index + 1,
                maxIndex: project.noImages,
              });
            }}
          />
        ))}
      </div>
      <div className="py-1 px-1">
        <h3 className="text-white/80 mb-1">{project.name}</h3>
        <p className="text-white/70 text-sm">{project.description}</p>
        {project.tag && (
          <p className="text-white/40 text-xs mt-4 py-1 px-2 bg-white/5 inline-flex rounded">
            {project.tag}
          </p>
        )}
        <div className="flex items-center gap-x-2 mt-4 text-white/30">
          {project.libraries.map(({ icon: Icon, name }, index) => {
            return (
              <div
                key={index}
                className={`group relative ${
                  index == project.libraries.length - 1 ? "grow" : ""
                }`}
              >
                <Icon size={20} />
                <div className="hidden group-hover:block absolute rounded bottom-full bg-black/75 py-1 px-2 text-sm text-white">
                  {name}
                </div>
              </div>
            );
          })}
          {project.link && (
            <div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <p className="text-sm text-white/50 hover:text-white/70 hover:underline transition-all flex items-center gap-x-1">
                  <span>
                    {project.linkText ? project.linkText : "view project"}
                  </span>{" "}
                  <HiArrowLongRight />
                </p>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
