import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { SiReact, SiTailwindcss } from "react-icons/si"; // ✅ New icons
import { SlideUp } from "../../animations/animation";

const ProfileSection = () => {
  return (
    <div id="og" className="bg-[#780000] px-12 py-20 flex flex-col items-center text-center">
      
      <div className="flex flex-col md:flex-row items-center mt-8 gap-16">
        
        {/* 🧑‍💻 Fotka zakladatele */}
        <motion.img
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          src="/member1.png"
          alt="Zakladatel"
          className="w-[350px] h-[450px] bg-gray-300 rounded-lg object-cover"
        />

        {/* 📃 Textová část */}
        <motion.div
          variants={SlideUp(0.6)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="text-left max-w-2xl"
        >
          <h2 className="text-[3em] text-white-100 md:text-[4em] font-orbi mb-6 tracking-tight">
            Viet Tiep Vu
          </h2>

          <p className="text-sky-400 text-xl mb-8 font-semibold">Founder | Graphic Designer | Developer</p>

          <p className="text-white text-lg leading-relaxed pr-2 mb-8">
            Jsem zakladatelem NeoBohemia – projektu, který propojuje českou herní scénu s moderním designem a technologií. Navrhuji, kóduji a tvořím celý vizuální a funkční směr značky. Web je postaven pomocí Reactu, Tailwindu a dalších technologií, a reflektuje nejen moji vášeň pro hry, ale i pro detail a kreativitu.
          </p>

          {/* 💻 Tech stack ikony */}
          <div className="flex gap-8">
            <span className="text-cyan-500 hover:text-white transition-colors">
              <SiReact size={40} title="React" />
            </span>
            <span className="text-sky-400 hover:text-white transition-colors">
              <SiTailwindcss size={40} title="Tailwind CSS" />
            </span>
            <a
              href="#"
              className="text-sky-400 hover:text-white transition-colors"
            >
              <FaGithub size={40} />
            </a>
            <a
              href="#"
              className="text-sky-400 hover:text-white transition-colors"
            >
              <FaGlobe size={40} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileSection;
