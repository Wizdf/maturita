import React from "react";
import PicCareer from "../../../assets/Arma/aboutarma.webp";
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
              O Arma Sérii
            </motion.h1>

            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-sm leading-7"
            >
            Arma je realistická vojenská série od českého studia Bohemia Interactive, která začala v roce 2001 hrou Operation Flashpoint (později přejmenovanou na Arma: Cold War Assault). Série je známá autentickou simulací boje, rozsáhlými otevřenými světy a podporou modifikací.
            <br /><br />
            Hráči se zapojují do taktických operací s důrazem na strategii a spolupráci. Arma 3 (2013) se stala nejúspěšnějším dílem série a dodnes má aktivní komunitu. V roce 2022 studio představilo Arma Reforger jako technologický základ pro budoucí Arma 4.
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
