import React from "react";
import { SiCss3 } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { FaLaravel } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { DiNodejsSmall } from 'react-icons/di';
import { SiExpress,SiMongodb } from 'react-icons/si';


const Skills = () => {
  const skills = [
    {
      icon: <SiCss3/>,
      level: "Expert",
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
      name:"React Js"
    },
    {
      icon: <FaLaravel/>,
      level: "Intermediate",
      count: 75, 
      name:"Laravel"
    },
    {
      icon: <SiMongodb/>,
      level: "Intermediate",
      count: 50,
      name: "MongoDB"
    },
    {
      icon: <SiTailwindcss/>,
      level: "Expert",
      count: 100, 
      name:"Tailwind"
    },
    {
      icon: <SiExpress/>,
      level: "Beginner",
      count: 50, 
      name:"Express Js"
    },{
      icon: <DiNodejsSmall/>,
      level: "Beginner",
      count: 50, 
      name:"Node Js"
    },

  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-32 flex-wrap">
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
