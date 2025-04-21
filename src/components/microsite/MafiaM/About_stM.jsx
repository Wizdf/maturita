import React from "react";
import PicAbout from "../../../assets/Mafie/2kczech.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animations/animation";

const About = () => {
  return (
    <div id="studio" >
      <div className="container pt-[150px] pb-[100px] sm:py-20 md:py-24 lg:pt-[145px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="space-y-4 md:space-y-6 flex justify-center flex-col xl:max-w-[500px] mx-auto">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl sm:text-5xl md:text-[5em] font-mafia text-white text-center md:text-left"
            >
              O 2K Czech
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-white text-base sm:text-lg md:text-md leading-7 text-center md:text-left"
            >
2K Czech bylo české herní studio založené v roce 1997. Proslavilo se titulem Mafia: The City of Lost Heaven (2002), který zaujal realistickým ztvárněním mafiánského prostředí 30. let a silným příběhem.
<br /> <br />
 Studio stálo i za hrami Hidden & Dangerous a Vietcong. Roku 2008 ho koupila společnost Take-Two Interactive a přejmenovala na 2K Czech. Později došlo ke sloučení se studiem Hangar 13, které dnes pokračuje ve vývoji série Mafia.            </motion.p>
            <div className="flex justify-center md:justify-start">
            
            <a target="_blank" href="https://en.wikipedia.org/wiki/2K_Czech">
                <motion.button
                  variants={SlideUp(0.6)}
                  initial="initial"
                  whileInView="animate"
                  className="primary-btn rounded-xl bg-transparent text-white hover:text-white hover:bg-black mt-6 sm:mt-8 md:mt-4 shadow-[5px_5px_0px_0px_#6c6c6c]"
                >
                  Zjisti Více
                </motion.button>
                </a>
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
