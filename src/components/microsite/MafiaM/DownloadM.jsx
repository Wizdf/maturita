import React from "react";
import MouseImageTrail from "./Mousetrail";
import { motion } from "framer-motion";
import { SlideUp, ZoomIn } from "../../animations/animation";

import img1 from "../../../assets/Mafie/aboutmafia.jpg";
import img2 from "../../../assets/Mafie/header.jpg";
import img3 from "../../../assets/Mafie/mafia2.jpg";
import img4 from "../../../assets/Mafie/mafia3.jpg";
import img5 from "../../../assets/Mafie/mafia4.png";
import img6 from "../../../assets/Mafie/mafiamain.jpg";
import img7 from "../../../assets/Mafie/mafia.png";

const Download = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[img1, img2, img3, img4, img5, img6, img7]}
    >
      <section id="download" className="min-h-screen w-full bg-white flex flex-col items-center justify-center gap-10 px-4 py-10 text-center">
        {/* 🏛 Nadpis sekce */}
        <motion.h1
          variants={ZoomIn(0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="text-4xl sm:text-6xl font-mafia tracking-tight text-black"
        >
          STÁHNUTÍ
        </motion.h1>

        {/* 🎥 Video trailer */}
        <motion.div
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-lg"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/-ttlTThOWp8?si=C0Nfu5a6O5lPsmuy"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>

        {/* 📂 Odkaz ke stáhnutí */}
        <motion.a
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          href="https://store.steampowered.com/franchise/mafia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" />
            </svg>
            Download
            <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
              Download
            </div>
          </button>
        </motion.a>
      </section>
    </MouseImageTrail>
  );
};

export default Download;
