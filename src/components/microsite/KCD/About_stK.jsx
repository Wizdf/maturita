import React from "react";
import PicAbout from "../../../assets/KCD/warhorse.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animations/animation";

const About = () => {
  return (
    <div id="studio" className="bg-[#F2ECB6]">
      <div className="container pt-[150px] pb-[100px] sm:py-20 md:py-24 lg:pt-[145px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="space-y-4 md:space-y-6 flex justify-center flex-col xl:max-w-[500px] mx-auto">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl sm:text-5xl md:text-[5em] font-kcd text-center md:text-left"
            >
              O Warhorse
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-black text-base sm:text-lg md:text-md leading-7 text-center md:text-left"
            >
              Warhorse Studios je české herní studio založené v roce 2011 Danielem Vávrou a Martinem Klímou. Proslavilo se realistickým RPG Kingdom Come: Deliverance, které vyšlo v roce 2018 a získalo si hráče po celém světě díky historické přesnosti, náročným soubojům a silnému příběhu zasazenému do středověkých Čech.
              <br /> <br />
              V roce 2024 vydali očekávané pokračování Kingdom Come: Deliverance II, které rozšiřuje původní svět a přináší ještě hlubší zážitek ze středověkých Čech.
            </motion.p>
            <div className="flex justify-center md:justify-start">
            
            <a target="_blank" href="https://en.wikipedia.org/wiki/Warhorse_Studios">
                <motion.button
                  variants={SlideUp(0.6)}
                  initial="initial"
                  whileInView="animate"
                  className="primary-btn rounded-xl bg-transparent text-black hover:text-white hover:bg-black mt-6 sm:mt-8 md:mt-4 shadow-[5px_5px_0px_0px_#6c6c6c]"
                >
                  Zjistit Více
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
