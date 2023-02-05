import React from "react";
import hireMe from "../assets/hireme.png";
import { motion } from "framer-motion"


const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <motion.div 
       initial = {{opacity:0 ,x:-100}}
       whileInView ={{opacity:2,x:0}}
       transition = {{delay:0.5}}
        className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </motion.div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <motion.div  initial = {{opacity:0 ,x:-100}}
       whileInView ={{opacity:2,x:0}}
       transition = {{delay:0.5}}
       >
          <motion.h2 
           initial = {{opacity:0 ,x:-100}}
           whileInView ={{opacity:2,x:0}}
           transition = {{delay:0.7}}
           className="text-2xl font-semibold">
            Do you want any work from me?
          </motion.h2>
          <motion.p initial = {{opacity:0 ,x:-100}}
           whileInView ={{opacity:2,x:0}}
           transition = {{delay:0.7}}
           className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
            soluta quos tempore eos accusamus cupiditate, amet in similique
            sapiente obcaecati odio deleniti architecto corporis ratione.
            Consequatur a quidem maiores!
          </motion.p>
          <button className="btn-primary mt-10">Say Hello</button>
        </motion.div>
        <motion.img
        initial = {{opacity:0 ,y:100}}
        whileInView ={{opacity:2,y:0}}
        transition = {{delay:0.3}}

          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover md:w-8/12	 w-11/12	"
        />
      </div>
    </section>
  );
};

export default Hireme;
