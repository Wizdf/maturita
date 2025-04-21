import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideUp } from '../../animations/animation'; // ✅ animation import
import ThreeModel from './Message'; // Adjust path if needed

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
  };

  return (
    <div className="text-white min-h-screen flex items-center justify-center p-4">
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
        className="w-full max-w-4xl rounded-3xl border border-gray-800 p-8"
      >
        <motion.h1
          variants={SlideUp(0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="text-center text-3xl font-orbi font-bold mb-8 tracking-wider"
        >
          KONTAKT NA NÁS
        </motion.h1>

        <div className="flex flex-row flex-wrap md:flex-nowrap">
          {/* Left Side - Form */}
          <div className="flex-1 pr-8">
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
                  rows="3"
                  className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none pb-2"
                />
              </motion.div>

              <motion.button
                variants={SlideUp(0.8)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }}
                type="submit"
                className="w-40 bg-gray-200 text-black font-medium py-2 px-4 rounded-full hover:bg-gray-300 transition duration-200 font-orbi"
              >
                ODESLAT
              </motion.button>
            </form>
          </div>

          {/* Divider */}
          <div className="w-px bg-gray-700 my-6 md:my-0 mx-4"></div>

          {/* Right Side */}
          <motion.div
            variants={SlideUp(0.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="flex-1 pl-8"
          >
            <h2 className="text-xl font-orbi font-bold mb-6">MÁTE ZÁJEM O SPOLUPRÁCI</h2>
            <p className="text-sm mb-6">
              Máte otázky, nápady nebo se chcete spojit?<br />
              Neošidíme je o komenty a váš názor nás zajímá.<br />
              Napiš nám a buď součástí české herní legendy!<br />
              Nebo se nám ozvěte na našich jiných platformách
            </p>

            <div className="flex space-x-4 mb-6">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>

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
