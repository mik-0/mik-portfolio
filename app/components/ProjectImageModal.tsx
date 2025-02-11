/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { HiX } from "react-icons/hi";

const ProjectImageModal = ({
  open,
  imagePath,
  setImageModalOpen,
  setImagePath,
}: {
  open: boolean;
  imagePath?: {
    project: string;
    index: number;
    maxIndex: number;
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
  if (!open || !imagePath) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/90 flex items-center justify-center z-50">
      <div>
        <HiX
          size={30}
          className="text-white absolute top-10 right-10 cursor-pointer"
          onClick={() => {
            setImageModalOpen(false);
            setImagePath(undefined);
          }}
        />
      </div>
      <div className="flex items-center justify-center gap-x-10">
        {imagePath.index > 1 ? (
          <BiChevronLeft
            className="cursor-pointer"
            size={36}
            onClick={() => {
              setImagePath({
                project: imagePath.project,
                index: imagePath.index - 1,
                maxIndex: imagePath.maxIndex,
              });
            }}
          />
        ) : (
          <div></div>
        )}
        <div className="relative text-white w-[90%] h-[90%] sm:w-[70%] sm:h-[70%] flex items-center justify-between gap-x-2">
          <div>
            <img
              alt="project image"
              src={imagePath.project + `/${imagePath.index}.jpg`}
              className="rounded"
            />
            <div>
              <p className="text-white/70 text-center mt-4">
                {imagePath.index} / {imagePath.maxIndex}
              </p>
            </div>
          </div>
        </div>
        {imagePath.index < imagePath.maxIndex ? (
          <BiChevronRight
            className="cursor-pointer"
            size={36}
            onClick={() => {
              setImagePath({
                project: imagePath.project,
                index: imagePath.index + 1,
                maxIndex: imagePath.maxIndex,
              });
            }}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ProjectImageModal;
