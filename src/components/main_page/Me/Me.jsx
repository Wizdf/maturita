import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaGlobe, FaPinterest } from "react-icons/fa";
import { SlideUp } from "../../animations/animation";

const ProfileSection = () => {
  return (
    <div id="og" className="bg-[#E1E1E1] px-12 py-20 flex flex-col items-center text-center">
      

      
      <div className="flex flex-col md:flex-row items-center mt-8 gap-16">
        
        <motion.img
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          src="/member1.png"
          alt="Member"
          className="w-[350px] h-[450px] bg-gray-300 rounded-lg object-cover"
        />

        
        <motion.div
          variants={SlideUp(0.6)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="text-left max-w-2xl"
        >
          
          <h2 className="text-[3em] md:text-[4em] font-orbi mb-6 tracking-tight">
            Viet Tiep Vu
          </h2>

        
          <p className="text-gray-600 text-xl mb-8">CEO | Coder | Manager</p>

          
          <p className="text-gray-700 text-lg leading-relaxed pr-2 mb-8">
            Jsem hlavním manažerem Ryunome studia, avšak to není vše mám na
            starost také naši celou webovou stránku a její fukčnost také jsem
            vytvořil webový design naší stránky. Využil jsem k tomu mé znalosti
            a kreativitu a schopnost ovládat programy a jazyky jako je Figma,
            ReactJs, Tailwind, GSAP, Photoshop apod.
          </p>

         
          <div className="flex gap-8">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-800 transition-colors"
            >
              <FaInstagram size={40} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-800 transition-colors"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-800 transition-colors"
            >
              <FaGlobe size={40} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-800 transition-colors"
            >
              <FaPinterest size={40} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileSection;
