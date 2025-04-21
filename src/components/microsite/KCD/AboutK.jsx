import React from "react";
import PicCareer from "../../../assets/KCD/aboutkcd.webp";
import { motion } from "framer-motion";
import { SlideUp } from "../../animations/animation";
import { HashLink } from "react-router-hash-link";

const Career = () => {
  return (
    <div id="game" className="bg-[#F2ECB6] text-black">
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

          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-5xl font-bold font-rasa text-amber-950"
            >
              O KCD Sérii
            </motion.h1>

            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-l leading-7"
            >
              Vítej v srdci středověkých Čech, kde svět není černobílý a každý krok má svou váhu. Kingdom Come tě zavede do doby, kdy přežití záviselo na tvé vůli, meči a cti.
Objev realistický RPG svět bez magie, zato s hlubokými příběhy, historickou přesností a výzvami, které tě nenechají v klidu.
Poznej středověk tak, jak ho hry ještě neukázaly. <br /><br />
Nejsi hrdina. Jsi syn kováře, vržený do chaosu občanské války. V zemi rozervané válkou, vírou a krví budeš muset zvolit vlastní cestu.
Bojuj, přežij, rozhoduj. V tomto světě se nehraje na dobro a zlo – jen na následky.
Historie ještě nikdy nebyla tak osobní.
            </motion.p>

            
            <HashLink smooth to="#download">
            <motion.button
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="primary-btn rounded-xl text-black border-black bg-transparent hover:bg-black hover:text-white mt-5 shadow-[5px_5px_0px_0px_#6c6c6c]"
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
