import { serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg fontOvo"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl fontOvo"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 , delay:0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 fontOvo"
      >
        Asa Front-End Developer with one year of experience, I have developed
        and maintained responsive web applications using React.js and modern
        front-end technologies. I am proficient in JavaScript (ES6+), HTML5,
        CSS3, and Tailwind CSS, with hands-on experience in state management
        using Redux and Context API.
      </motion.p>
      <motion.div 
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{ duration: 0.6 , delay:0.9 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => {
          return (
            <motion.div
            whileHover={{scale : 1.05}}
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12 hover:-translate-y-1 
              hover:shadow-black cursor-pointer hover:bg-lightHover duration-500 dark:hover:bg-dartHover dark:hover:shadow-white"
            >
              <Image src={icon} alt="" className="w-10" />
              <h3 className="text-lg my-4 text-gray-700 dark:text-white ">
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                {description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Services;
