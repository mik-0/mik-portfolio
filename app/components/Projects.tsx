import React from "react";
import { lib_data } from "../constants";
import { ProjectCard } from "./ProjectCard";

const Projects = ({
  setImageModalOpen,
  setImagePath,
}: {
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
    <section className="mt-10 space-y-2">
      <h2 className="text-white/70">Projects</h2>
      <ProjectCard
        project={{
          name: "Encryst",
          description: "A landing page for a digital marketing agency.",
          tag: "Freelance Work",
          imagesFolder: "/projects/encryst/",
          noImages: 6,
          libraries: [
            lib_data.next,
            lib_data.html,
            lib_data.tailwind,
            lib_data.threejs,
          ],
          link: "https://encryst.netlify.app/",
          linkText: "visit site",
        }}
        setImageModalOpen={setImageModalOpen}
        setImagePath={setImagePath}
      />
      <ProjectCard
        project={{
          name: "SecureSECO DAO",
          description:
            "Bachelors final project (Utrecht University). Platform for a Decentralized Autonomous Organization (DAO). Developed an on-chain proof-of-work verification process that enables users to get rewarded for mining.",
          tag: "Bachelor's Final Project / Internship",
          imagesFolder: "/projects/dao/",
          noImages: 3,
          libraries: [
            lib_data.next,
            lib_data.html,
            lib_data.tailwind,
            lib_data.ethers,
            lib_data.express,
            lib_data.node,
          ],
          link: "https://softwareprojecten.sites.uu.nl/2023/09/01/secureseco-dao/",
          linkText: "view project (uu.nl)",
        }}
        setImageModalOpen={setImageModalOpen}
        setImagePath={setImagePath}
      />
      <ProjectCard
        project={{
          name: "Halos.GG",
          description:
            "GPT platform where users can get paid by performing small tasks. Also includes admin / staff panel.",
          tag: "Freelance Work",
          imagesFolder: "/projects/halos/",
          noImages: 4,
          libraries: [
            lib_data.next,
            lib_data.html,
            lib_data.tailwind,
            lib_data.ethers,
            lib_data.express,
            lib_data.node,
          ],
          link: "https://halos.gg/",
          linkText: "visit site",
        }}
        setImageModalOpen={setImageModalOpen}
        setImagePath={setImagePath}
      />
      <ProjectCard
        project={{
          name: "Piano School Mobile App (iOS / Android)",
          description:
            "Mobile app made for piano school Wei Wei Piano for general information and for teachers to interact with their students, e.g. by providing homework or feedback on lessons. Front-end + Back-end.",
          tag: "Freelance Work",
          imagesFolder: "/projects/wwp/",
          noImages: 1,
          libraries: [
            lib_data.flutter,
            lib_data.firebase,
            lib_data.express,
            lib_data.node,
          ],
          link: "https://apps.apple.com/no/app/wei-wei-piano/id1484076815?platform=iphone",
          linkText: "view in app store (iOS)",
        }}
        setImageModalOpen={setImageModalOpen}
        setImagePath={setImagePath}
      />
    </section>
  );
};

export default Projects;
