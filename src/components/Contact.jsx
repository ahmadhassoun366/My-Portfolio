import React from "react";
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { BiCurrentLocation } from 'react-icons/bi';
import { motion } from "framer-motion"

const Contact = () => {

  const contact_info = [
    { icon:<MdOutlineEmail/> , text: "ahmadhss366@gmail.com" },
    {  icon:<BsWhatsapp/> ,text: "+96176178123" },
    { icon:<BiCurrentLocation/>, text: "demo location",
    },
  ];

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <motion.div className="text-center mt-8"
    
       >
        <motion.h3 
         initial = {{opacity:0 ,y:-200}}
         whileInView ={{opacity:2,y:0}}
         transition = {{delay:0.2}}
         className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </motion.h3>
        <motion.p    initial = {{opacity:0 ,y:-200}}
         whileInView ={{opacity:2,y:0}}
         transition = {{delay:0.3}}
         
         className="text-gray-400 mt-3 text-lg">Get in touch</motion.p>

        <motion.div
        initial = {{opacity:0}}
        whileInView ={{opacity:1}}
        transition = {{delay:0.5}}

          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5"  
                id="contactForm" 
                name="sentMessage" 
                noValidate="noValidate">

            <motion.input initial = {{opacity:0 ,x:-200}}
           whileInView ={{opacity:2,x:0}}
           transition = {{delay:0.5}}
                       placeholder="Your Name"  
                        className="form-control"
                        id="name"
                        type="text"
                        name="name" 
                      />

            <motion.input
            initial = {{opacity:0 ,x:-200}}
            whileInView ={{opacity:2,x:0}}
            transition = {{delay:0.5}}
             type="Email" placeholder="Your Email Address"    
                         className="form-control"
                         name="email"                           
                      />

            <motion.textarea
            initial = {{opacity:0 ,x:-200}}
            whileInView ={{opacity:2,x:0}}
            transition = {{delay:0.5}}
             placeholder="Your Message" rows={10} 
                    id="message"
                    type="text"
                    name="message"
                ></motion.textarea>

            <motion.button 
             initial = {{opacity:0 ,x:-200}}
             whileInView ={{opacity:2,x:0}}
             transition = {{delay:0.5}}
             whileHover ={{scale:1}}
              className="btn-primary w-fit"    type="submit">Send Message</motion.button>
          </form>
          <motion.div
           initial = {{opacity:0}}
        whileInView ={{opacity:2}}
        transition = {{delay:0.7}}
         className="flex flex-col  gap-7 ">
          
            {contact_info.map(({ text, icon }) => (
              <div
              
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <motion.div initial = {{opacity:0, x:200}}
                  whileInView ={{opacity:3,x:0}}
                  transition = {{delay:0.9}}
                  className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <icon>{icon}</icon>
                </motion.div>
                <motion.p 
                initial = {{opacity:0, x:200}}
                whileInView ={{opacity:3,x:0}}
                transition = {{delay:1.2}}
                className="md:text-base text-sm  break-words">
                  {text}
                </motion.p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
