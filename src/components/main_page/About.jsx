import React from "react";
import { motion } from "framer-motion";
import { SlideUp, SlideRight, FadeIn } from "../animations/animation"; // 🎬 Importy animací

const AboutSection = () => {
  return (
    <section
      id="uvod"
      className="relative bg-[#a1d4e9] rounded-t-2xl text-white py-28 px-6 md:px-20 overflow-hidden text-lg"
    >
      {/* 🎨 Dekorativní rozmazané kruhy v pozadí */}
      <motion.div
        variants={FadeIn(0.3)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-white opacity-20 rounded-full blur-[150px] pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto flex flex-col md:flex-row items-start gap-40">
        {/* Textová část s animací po krocích */}
        <motion.div
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="flex-1 mt-10"
        >
          <motion.p
            variants={FadeIn(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="text-sm uppercase tracking-widest mb-3"
          >
            Kdo jsme a proč to děláme
          </motion.p>

          <motion.h1
            variants={SlideRight(0.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="text-6xl font-orbi mb-8"
          >
            O nás
          </motion.h1>

          <motion.p
            variants={FadeIn(0.6)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="leading-8 px-2"
          >
            NeoBohemia je kreativní spojení médií, gamingu a stylu – vznikla s cílem oslavit legendární tituly české herní scény.
            Od kultovní Mafie přes realistický svět Kingdom Come až po vojenské mise v Armě a přežití v DayZ, propojujeme hráče s kulturou, která tyto hry formovala.
            <br /><br />
            Pomocí interaktivního obsahu, exkluzivního merche a úcty k herní historii stavíme most mezi minulostí a budoucností českého gamingu.
            Ať už jsi fanoušek od první hodiny, nebo právě objevuješ tyto světy, NeoBohemia je tu pro tebe. Objevuj, propojuj se a staň se součástí naší herní cesty.
          </motion.p>
        </motion.div>

        {/* Obrázek s jemným přiblížením */}
        <motion.img
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          src="/crown.png"
          alt="Your description"
          className="w-[390px] h-[500px] object-cover rounded-md shrink-0"
        />
      </div>
    </section>
  );
};

export default AboutSection;
