import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../animations/animation";

const Newsletter = () => {
  // Stav pro ukládání e-mailu z inputu
  const [email, setEmail] = useState("");

  // Funkce, která se spustí po kliknutí na tlačítko
  const handleClick = () => {
    // Tady můžeš přidat logiku pro odeslání e-mailu (např. do databáze)
    setEmail(""); // Vyčistí input po odeslání
  };

  return (
    <div className="bg-[#780000] text-white max-w-full mx-auto space-y-5 py-14">
      {/* Nadpis */}
      <motion.h1
        variants={SlideUp(0.2)}
        initial="initial"
        whileInView="animate"
        className="text-3xl font-bold font-orbi text-center"
      >
        Připoj se k nám
      </motion.h1>

      {/* Popis pod nadpisem */}
      <motion.p
        variants={SlideUp(0.4)}
        initial="initial"
        whileInView="animate"
        className="max-w-[450px] mx-auto text-sm text-center"
      >
        Zájímají vás novinky herní světa v Čechách? Zapište se a my vám pravidelně
        budeme poskytovat události a novinky ze světa her.
      </motion.p>

      {/* Sekce s inputem a tlačítkem */}
      <motion.div
        variants={SlideUp(0.6)}
        initial="initial"
        whileInView="animate"
        className="!mt-10 flex justify-center"
      >
        {/* Input pro zadání e-mailu */}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Ukládání hodnoty do stavu
          placeholder="Zadejte svůj e-mail"
          className="px-4 py-4 ring-1 ring-gray-300"
        />
        {/* Tlačítko pro odeslání */}
        <button
          className="bg-black text-white px-6 py-4 uppercase"
          onClick={handleClick}
        >
          CHCI NOVINKY
        </button>
      </motion.div>
    </div>
  );
};

export default Newsletter;
