import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn, SlideUp } from '../../animations/animation';

// ✅ Import obrázků pozadí
import img1 from '../../../assets/Mafie/aboutmafia.jpg';
import img2 from '../../../assets/Arma/aboutarma.webp';
import img3 from '../../../assets/KCD/aboutkcd.webp';
import img4 from '../../../assets/Eurotruck/abouteurot.png';

// ✅ Pole karet seřazené M → A → K → E
const cards = [
  { letter: 'M', label: 'MAFIA', border: '#800020', path: '/mafia', img: img1 },
  { letter: 'A', label: 'ARMA', border: '#655949', path: '/arma', img: img2 },
  { letter: 'K', label: 'KCO', border: '#DFB51E', path: '/kcd', img: img3 },
  { letter: 'E', label: 'EUROTRUCK', border: '#E5E88F', path: '/eurotruck', img: img4 },
];

const Sitemap = () => {
  return (
    <div
      id="sitemap"
      className="min-h-[90vh] bg-[#a1d4e9] flex flex-col items-center justify-center space-y-16 px-4 py-4 overflow-x-auto"
    >
      {/* ✅ Popis sekce */}
      <motion.p
        variants={FadeIn(0.4)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        className="text-l text-white uppercase tracking-widest mb-3"
      >
        Prohlédněte si naše stránky jednoduše
      </motion.p>

      {/* ✅ Nadpis sekce */}
      <motion.h1
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        className="text-white text-5xl font-orbi tracking-widest"
      >
        SITEMAP
      </motion.h1>

      {/* ✅ Render jednotlivých boxů */}
      <div className="flex flex-wrap justify-center gap-12">
        {cards.map(({ letter, label, border, path, img }, index) => (
          <Card
            key={letter}
            letter={letter}
            label={label}
            border={border}
            path={path}
            img={img}
            delay={0.3 + index * 0.15}
          />
        ))}
      </div>
    </div>
  );
};

// ✅ Komponenta pro jednu kartu
const Card = ({ letter, label, border, path, img, delay }) => {
  return (
    <motion.div
      variants={SlideUp(delay)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false }}
    >
      <Link to={path} className="focus:outline-none">
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable={false}
          className="transition-transform hover:scale-105"
        >
          <div
            className="w-[358px] h-[470px] rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer relative bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${img})`, // ✅ Použití importovaného obrázku
              border: `2px solid ${border}`,
              boxShadow: '0px 4px 4px #E8CDCD',
            }}
          >
            {/* ✅ Překrytí pro lepší čitelnost */}
            <div className="absolute inset-0 bg-black/50 rounded-2xl backdrop-brightness-75"></div>

            {/* ✅ Obsah boxu */}
            <div className="relative z-10">
              <div className="text-7xl font-bold font-orbi text-white">{letter}</div>
              <div className="text-lg font-orbi text-white mt-3 tracking-wider">{label}</div>
            </div>
          </div>
        </Tilt>
      </Link>
    </motion.div>
  );
};

export default Sitemap;
