import React from 'react';
import hero from "../assets/hero.png";
import {BsInstagram} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import Typewriter from 'typewriter-effect';

const Hero = () => {


  const social_media = [
    { icon:   <BsGithub/>, link: "https://github.com/ahmadhassoun366" },
    { icon:  <BsFacebook/>, link: "https://www.facebook.com/profile.php?id=100008135252627" },
    { icon:  <BsLinkedin/>, link: "https://www.linkedin.com/in/ahmad-hassoun-b325b4167/" },
    { icon:  <BsInstagram/>, link: "https://www.instagram.com/ahmadhasoun_/" },
  
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center justify-center"
    >
     <div className="flex-1 md:mt-0 mt-6 md:ml-24 flex justify-center items-center">
          <div className="lg:w-96 h-full relative sm:w-10/12 w-3/4 max-w-sm aboutImg ">
            <img
              src={hero}
              alt=""
              className="w-full object-cover bg-cyan-600 rounded-xl"
            />
          </div>
        </div>
      <div className="flex-1"  >
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold mt-10">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello 👋!
              <br />
            </span>
            <h1>
            <Typewriter
                  options={{
                    strings: ["It's Ahmad Hassoun" , 'Front-End Developer' ,"Back-End Developer"," MERN-Stack Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
            </h1>
            
          
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
              A Code Wizard      
         </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map(({icon,link}) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
               <a href={link}><ion-icon name={icon}>{icon}</ion-icon></a> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
