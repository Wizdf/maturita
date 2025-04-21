import React from "react";
import PicAbout from "../../../assets/Eurotruck/scs.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animations/animation";

const About = () => {
  return (
    <div id="studio">
      <div className="container pt-[150px] pb-[100px] sm:py-20 md:py-24 lg:pt-[145px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="space-y-4 md:space-y-6 flex justify-center flex-col xl:max-w-[500px] mx-auto">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl sm:text-5xl md:text-[5em] font-euro text-white text-center md:text-left"
            >
              O SCS Software
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-white text-base sm:text-lg md:text-md leading-7 text-center md:text-left"
            >
              SCS Software je české herní studio založené v roce 1997, specializující se na dopravní simulátory. Proslavilo se sériemi Euro Truck Simulator a American Truck Simulator, které si získaly miliony hráčů díky realistické jízdní fyzice, detailním mapám a podpoře modifikací.
              <br /><br />
              Studio pravidelně vydává rozšíření a aktualizace, čímž udržuje aktivní komunitu. SCS Software patří mezi nejúspěšnější vývojáře simulátorů na světě a nadále rozšiřuje své populární tituly.
            </motion.p>
            <div className="flex justify-center md:justify-start">
            

                <motion.button
                  variants={SlideUp(0.6)}
                  initial="initial"
                  whileInView="animate"
                  className="primary-btn rounded-xl bg-transparent text-white hover:text-white hover:bg-black mt-6 sm:mt-8 md:mt-4 shadow-[5px_5px_0px_0px_#6c6c6c]"
                >
                  Zjistit Více 
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
