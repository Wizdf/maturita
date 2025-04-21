import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlideUp } from '../../animations/animation'; // 🎬 Import animací

// 🃏 Změněné pořadí: M → A → K → E
const cards = [
  { letter: 'M', label: 'MAFIA', border: '#800020', path: '/mafia' },
  { letter: 'A', label: 'ARMA', border: '#655949', path: '/arma' },
  { letter: 'K', label: 'KCO', border: '#DFB51E', path: '/kcd' },
  { letter: 'E', label: 'EUROTRUCK', border: '#E5E88F', path: '/eurotruck' },
];

const Sitemap = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-16 px-4 py-10 overflow-x-auto">
      <motion.h1
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        className="text-white text-5xl font-orbi font-bold tracking-widest"
      >
        SITEMAP
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-12">
        {cards.map(({ letter, label, border, path }, index) => (
          <Card key={letter} letter={letter} label={label} border={border} path={path} delay={0.3 + index * 0.15} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ letter, label, border, path, delay }) => {
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
            className="w-64 h-84 rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer"
            style={{
              backgroundColor: '#151030',
              border: `2px solid ${border}`,
              boxShadow: '0px 4px 4px #E8CDCD',
            }}
          >
            {/* 🔤 Velké písmeno označující značku */}
            <div className="text-7xl font-bold font-orbi text-white">{letter}</div>
            {/* 📛 Popisek značky */}
            <div className="text-lg font-orbi text-white mt-3 tracking-wider">{label}</div>
          </div>
        </Tilt>
      </Link>
    </motion.div>
  );
};

export default Sitemap;
