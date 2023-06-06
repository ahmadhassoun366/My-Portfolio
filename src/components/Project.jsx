import React from "react";
import store from "../assets/store.png";
import Hydra from "../assets/hydra.png";
import recruit from "../assets/recruit.jpg";
import Travel from "../assets/Travel.jpg";
import Tech from "../assets/Tech.png";
import Nexus from "../assets/nexus.png";
import {BsCodeSlash} from 'react-icons/bs';
import { motion} from "framer-motion"

const Project = () => {
    const projects = [
        {
          title: "RecruitWorld",
          subtitle: "Vuejs and Laravel",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
            image: recruit,
          link: "https://github.com/ahmadhassoun366/CV-Analysis-WebApp",
        },
        {
          title: "TravelWorld",
          subtitle: "MERN Stack",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
            image: Travel,
          link: "https://github.com/ahmadhassoun366/Tour-Management",
        },
        {
          title: "TechBazaar",
          subtitle: "React and Django",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
            image: Tech,
          link: "https://github.com/ahmadhassoun366/TechBazaar",
        },
        {
          title: "JobNexus AI",
          subtitle: "React and Django",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
            image: Nexus,
          link: "https://github.com/ahmadhassoun366/JobNexusAi",
        },

        {
          title: "Harvest Shop",
          subtitle: "React and Django",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
            image: store,
          link: "https://github.com/ahmadhassoun366/Harvest-Shop",
        },

        {
          title: "Hydra Tech",
          subtitle: "React and Firebase",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
            image: Hydra,
          link: "https://pythonbootcamp.com",
        },
      ];
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BsCodeSlash className="mx-auto inline-block mb-4" size={60}></BsCodeSlash>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <motion.div className="flex flex-wrap -m-4"
      
         >
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-11/12 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full  object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-2xl title-font font-medium text-cyan-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;