import React from "react";
import PicCareer from "../../../assets/Eurotruck/abouteurot.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animations/animation";
import { HashLink } from "react-router-hash-link";

const Career = () => {
  return (
    <div id="game" className="bg-[#D9DDD9] text-black">
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
              className="text-5xl font-bold font-euro text-black"
            >
              O Eurotruck Simulatoru
            </motion.h1>

            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-l leading-7"
            >
              Euro Truck Simulator je populární série simulátorů kamionové dopravy od českého studia SCS Software. První díl vyšel v roce 2008, ale skutečný průlom přišel s Euro Truck Simulator 2 (2012), který si získal miliony hráčů díky realistické jízdní fyzice, detailní mapě Evropy a rozsáhlým možnostem úprav kamionů.
              <br />
              Hra nabízí relaxační, ale zároveň propracovaný zážitek z řízení nákladních vozidel, rozvážení zakázek a budování vlastní dopravní společnosti. Díky pravidelným aktualizacím a rozšířením si ETS2 udržuje silnou komunitu a zůstává jedním z nejúspěšnějších simulátorů na trhu.
            </motion.p>

            <HashLink smooth to="#download">
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn rounded-xl text-black border-black hover:bg-white bg-transparent hover:text-black   mt-5  shadow-[5px_5px_0px_0px_#6c6c6c]"
              >
                Stáhnout
              </motion.button>
              </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
