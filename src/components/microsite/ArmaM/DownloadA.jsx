import React from "react";
import { motion } from "framer-motion";
import { SlideUp, ZoomIn } from "../../animations/animation";
import MouseImageTrail from "./Mousetrail";

import img1 from "../../../assets/Arma/aboutarma.webp";
import img2 from "../../../assets/Arma/headera.jpeg";
import img3 from "../../../assets/Arma/arma2.jpg";
import img4 from "../../../assets/Arma/arma3.jpg";
import img5 from "../../../assets/Arma/arma1.jpg";
import img6 from "../../../assets/Arma/armamain.jpg";
import img7 from "../../../assets/Arma/arma.png";

const Download = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[img1, img2, img3, img4, img5, img6, img7]}
    >
      <section id="download" className="min-h-screen w-full flex flex-col items-center justify-center gap-10 px-6 py-14 text-center">
        {/* 🧲 Nadpis sekce */}
        <motion.h1
          variants={ZoomIn(0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="text-5xl md:text-7xl font-arma tracking-tight text-white"
        >
          STahnout
        </motion.h1>

        {/* 🎥 YouTube iframe s animací */}
        <motion.div
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/0AiUXvtw3ug?si=P7WwmM0caXgkgrBK"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>

        {/* 📦 Tlačítko ke stažení */}
        <motion.a
          variants={SlideUp(0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          href="https://store.steampowered.com/franchise/BohemiaInteractive"
          target="_blank"
        >
          <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" />
            </svg>
            Stáhnout
            <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
              Stáhnout 
            </div>
          </button>
        </motion.a>
      </section>
    </MouseImageTrail>
  );
};

export default Download;
