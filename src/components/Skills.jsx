import React from "react";
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    {
      icon: <SiHtml5/>,
      level: "Advance",
      count: 100,
      name: "HTML"
    },
    {
      icon: <SiCss3/>,
      level: "Expect",
      count: 95,
      name:"CSS"
    },
    {
      icon:<IoLogoJavascript/>,
      level: "Advance",
      count: 90,
      name:"JavaScript"
    },
    {
      icon: <FaReact/>,
      level: "Intermediate",
      count: 75,
      name:"React js"
    },
    {
      icon: <FaAngular/>,
      level: "Beginner",
      count: 50, 
      name:"Angular"
    }
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map(({ count, icon,level,name}) => (
            <div
             
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${count}%,#ddd ${count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <icon >{icon}</icon>
                </div>
              </div>
              <p className="text-2xl mt-3 font-bold">{name}</p>
              <p className="text-xl mt-3">{level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
