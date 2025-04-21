import React from "react";
import PicCareer from "../../../assets/Mafie/aboutmafia.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../animations/animation";

const Career = () => {
  return (
    <div id="game" className="bg-amber-500 text-white">
      <div className="container py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={PicCareer}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>

          <div className="space-y-5 flex justify-center flex-col xl:max-w-[550px]">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-5xl font-bold font-rasa text-amber-950"
            >
              O Mafia Sérii
            </motion.h1>


            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-sm leading-7"
            >
              Mafia je legendární česká herní série, jejíž první díl vyvinulo studio Illusion Softworks a vydal v roce 2002. Hra si získala světový ohlas díky silnému příběhu, realistickému zpracování mafie 30. let a filmové atmosféře. 
              <br /><br />
              Hráči sledují vzestup taxikáře Tommyho Angela v podsvětí města Lost Heaven. Úspěch vedl k pokračováním Mafia II (2010) a Mafia III (2016). V roce 2020 vyšel remake Mafia: Definitive Edition od Hangar 13. Série zůstává ikonou české herní scény.
            </motion.p>

            
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn rounded-xl text-white border-white hover:bg-green-300 bg-transparent hover:text-white mt-5  shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Stáhnout
              </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
