import React ,{useState} from "react";
import { collection, addDoc } from "firebase/firestore";
import { motion } from 'framer-motion';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { BiCurrentLocation } from 'react-icons/bi';
import {db} from '../firebase';
import Modal from './Modal';

const Contact = () => {
  const[name , setName] = useState("");
  const[email , setEmail] = useState({});
  const[message , setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contact_info = [
    { icon: <MdOutlineEmail />, text: 'ahmadhss366@gmail.com' },
    { icon: <BsWhatsapp />, text: '+96176178123' },
    { icon: <BiCurrentLocation />, text: 'Tripoli,Lebanon' },
  ];
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleOnChange = (event) => {
    const {
      target: { name: keyName, value },
    } = event;
  // console.log('handleOnChange:', keyName);

    setMessage((prev) => {
      return { ...prev, [keyName]: value };
    });
    setEmail((prev) => {
      return { ...prev, [keyName]: value };
    });
    setName((prev) => {
      return { ...prev, [keyName]: value };
    });

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail(email.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    await addDoc(collection(db, 'contactdata'), {
      ...email
    }).then(() => {
      setIsModalOpen(true);
    });
    setName({
      name: '',
    });
    setEmail({
      email: '',
    });
    setMessage({
      message: '',
    });
  };



  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <section id="contact" className="py-10 px-3 text-white">
      <motion.div className="text-center mt-8">
        <motion.h3
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 2, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-semibold"
        >
          Contact <span className="text-cyan-600">Me</span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 2, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mt-3 text-lg"
        >
          Get in touch
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            className="flex flex-col flex-1 gap-5"
            id="contactForm"
            name="sentMessage"
            noValidate="noValidate"
            onSubmit={handleSubmit}
          >
            <motion.input
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 2, x: 0 }}
              transition={{ delay: 0.5 }}
              placeholder="Your Name"
              className="form-control"
              id="name"
              type="text"
              name="name"
              value={name.name}
              onChange={handleOnChange}
            />

            <motion.input
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 2, x: 0 }}
              transition={{ delay: 0.5 }}
              type="email"
              placeholder="Your Email Address"
              className="form-control"
              name="email"
              value={email.email}
              onChange={handleOnChange}
              />

            <motion.textarea
            initial = {{opacity:0 ,x:-200}}
            whileInView ={{opacity:2,x:0}}
            transition = {{delay:0.5}}
             placeholder="Your Message" rows={10} 
                    id="message"
                    type="text"
                    name="message"
                    value={message.message}
                    onChange={handleOnChange}
                ></motion.textarea>

            <motion.button 
             initial = {{opacity:0 ,x:-200}}
             whileInView ={{opacity:2,x:0}}
             transition = {{delay:0.5}}
             whileHover ={{scale:1}}
              className="btn-primary w-fit" 
                 type="submit">Send Message</motion.button>
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
       {/* Modal */}
  {isModalOpen && (
    <Modal
      closeModal={closeModal}
      title="Thank you for submitting your message. I'll review it and get back to you as soon as possible."
      message="Thank you!"
    />
  )}
    </section>
  );
};

export default Contact;