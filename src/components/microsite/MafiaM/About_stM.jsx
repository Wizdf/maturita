import React from "react";
import PicAbout from "../../../assets/Mafie/illusion-softworks.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animations/animation";

const About = () => {
  return (
    <div id="studio" className="bg-[#FEFAE0]">
      <div className="container pt-[150px] pb-[100px] sm:py-20 md:py-24 lg:pt-[145px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="space-y-4 md:space-y-6 flex justify-center flex-col xl:max-w-[500px] mx-auto">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl sm:text-5xl md:text-[5em] font-roadrage text-center md:text-left"
            >
              O Illusion Softworks
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 text-base sm:text-lg md:text-md leading-7 text-center md:text-left"
            >
              Illusion Softworks bylo české herní studio založené v roce 1997. Proslavilo se hrou Mafia: The City of Lost Heaven (2002), která se stala celosvětovým hitem díky silnému příběhu a realistickému zpracování mafie 30. let.
              <br /> <br />
              Studio vytvořilo i další úspěšné tituly, jako Hidden & Dangerous a Vietcong. V roce 2008 bylo koupeno společností Take-Two Interactive a přejmenováno na 2K Czech. Později se sloučilo se studiem Hangar 13, které pokračuje ve vývoji série Mafia.
            </motion.p>
            <div className="flex justify-center md:justify-start">
            

                <motion.button
                  variants={SlideUp(0.6)}
                  initial="initial"
                  whileInView="animate"
                  className="primary-btn rounded-xl bg-transparent text-black hover:text-white hover:bg-green-300 mt-6 sm:mt-8 md:mt-4 shadow-[5px_5px_0px_0px_#6c6c6c]"
                >
                  Zjisti Více
                </motion.button>
            </div>
          </div>

          <div className="flex justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={PicAbout}
              alt="About Us"
              className="w-[90%] sm:w-[80%] md:w-[95%] lg:w-full mx-auto md:max-w-[80%] lg:max-w-[100%] pt-8 md:pt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
