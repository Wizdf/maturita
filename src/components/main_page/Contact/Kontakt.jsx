import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideUp } from '../../animations/animation'; // ✅ import animací
import ThreeModel from './Message'; // ✅ 3D komponenta vedle formuláře
import { FaInstagram, FaEnvelope, FaGlobe } from 'react-icons/fa'; // ✅ Import ikon

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id='kontakt' className="text-white bg-[#a1d4e9] min-h-screen flex items-center justify-center px-4 py-10">
      {/* ✅ Google font pro Orbitron */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
        .font-orbi {
          font-family: 'Orbitron', sans-serif;
        }
      `}</style>

      <motion.div
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        className="w-full max-w-6xl rounded-3xl border border-gray-800 p-6 sm:p-10"
      >
        {/* ✅ Nadpis sekce */}
        <motion.h1
          variants={SlideUp(0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="text-center text-3xl sm:text-4xl font-orbi font-bold mb-10 tracking-wider"
        >
          KONTAKT NA NÁS
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* ✅ Levá část – Formulář */}
          <div className="flex-1">
            <motion.h2
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }}
              className="text-xl font-orbi font-bold mb-6"
            >
              NAPIŠTE NÁM ZDE
            </motion.h2>

            <form onSubmit={handleSubmit}>
              <motion.div
                variants={SlideUp(0.5)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}
                className="mb-6"
              >
                <label htmlFor="name" className="block text-sm mb-1">JMÉNO A PŘÍJMENÍ</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none pb-2"
                />
              </motion.div>

              <motion.div
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}
                className="mb-6"
              >
                <label htmlFor="email" className="block text-sm mb-1">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none pb-2"
                />
              </motion.div>

              <motion.div
                variants={SlideUp(0.7)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}
                className="mb-6"
              >
                <label htmlFor="message" className="block text-sm mb-1">ZPRÁVA</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none pb-2"
                />
              </motion.div>

              {/* ✅ Odesílací tlačítko */}
              <motion.button
                variants={SlideUp(0.8)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}
                type="submit"
                className="w-full bg-[#780000] text-white font-medium py-3 px-4 rounded-full hover:scale-105 hover:bg-[#910000] active:scale-95 transition-all duration-300 font-orbi mt-8 shadow-md"
              >
                ODESLAT
              </motion.button>
            </form>
          </div>

          {/* ✅ Pravá část – Text a 3D model */}
          <motion.div
            variants={SlideUp(0.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="flex-1"
          >
            <h2 className="text-xl font-orbi font-bold mb-6">MÁTE ZÁJEM O SPOLUPRÁCI</h2>
            <p className="text-sm mb-6 leading-relaxed">
              Máte otázky, nápady nebo se chcete spojit?<br />
              Neošidíme je o komenty a váš názor nás zajímá.<br />
              Napiš nám a buď součástí české herní legendy!<br />
              Nebo se nám ozvěte na našich jiných platformách.
            </p>

            {/* ✅ Ikony sociálních sítí */}
            <div className="flex space-x-4 mb-6 text-[#780000]">
              <FaInstagram size={30} className="hover:text-white transition-colors duration-200" />
              <FaEnvelope size={30} className="hover:text-white transition-colors duration-200" />
              <FaGlobe size={30} className="hover:text-white transition-colors duration-200" />
            </div>

            {/* ✅ 3D model */}
            <motion.div
              variants={SlideUp(0.7)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }}
              className="h-64 w-full rounded-xl overflow-hidden border border-gray-500"
            >
              <ThreeModel />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
