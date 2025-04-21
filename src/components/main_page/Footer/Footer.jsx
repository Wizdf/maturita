import React from "react";
import Logo from "/logo_tab.png";
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { motion } from "framer-motion";
import { SlideUp } from "../../animations/animation";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <motion.footer
      variants={SlideUp(0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="bg-[#780000] text-white container max-w-full py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="" className="w-6" />
              <p className="text-xl font-semibold uppercase">Neobohemia</p>
            </div>
            <p>Jaselská 826, 280 90 Kolín 2</p>
            <p>@ 2025 Neobohemia All rights reserved</p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">NAVIGACE</h1>
              <ul className="text-l space-y-4">
                <li>
                  <HashLink smooth to="/#uvod">O nás</HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#og">Zakladatel</HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#micronav">Microsites</HashLink>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">DALŠÍ</h1>
              <ul className="text-l space-y-4">
                <li>
                  <HashLink smooth to="#kontakt">Kontakt</HashLink>
                </li>
                <li>
                  <HashLink smooth to="#sitemap">Sitemap</HashLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">KONTAKT</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="tel:+420604500556">+420 604 500 556</a>
              </li>
              <li className="flex items-center space-x-3">
                <LuMessageSquare />
                <a href="mailto:viet.vu@student.soskolin.cz">Email</a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom section */}
        <p className="text-center text-sm font-semibold border-t-2 pt-5 mt-8">
          &copy; 2025 Neobohemia rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
