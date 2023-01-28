import React from "react";
import hero from "../assets/hero.png";
import {BsInstagram} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const Hero = () => {
  const social_media = [
   <BsInstagram/>, 
    <BsFacebook/>,
    <BsLinkedin/>,
    <BsTwitter/>,
    <BsGithub/>
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full ">
        <div className="flex items-center justify-center w-11/12">
        <img src={hero} alt="" className="md:w-8/12  rounded-xl mb-5 md:mb-0 " />

          </div>

      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
           I'm <span>Ahmad Hassoun</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Full-Stack Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}>{icon}</ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
