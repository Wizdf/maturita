import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Navigační položky
const navItems = [
  { name: "O Hře", link: "#game" },
  { name: "O Studiu", link: "#studio" },
  { name: "Merch", link: "#merch" },
];
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navContainerRef = useRef(null);
  const headerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);



  useEffect(() => {
    const header = headerRef.current;

    // ✅ Blur efekt při scrollování
    if (currentScrollY === 0) {
      header?.classList.remove("nav-blur-bg");
    } else {
      header?.classList.add("nav-blur-bg");
    }

    // ✅ Zobrazit / skrýt navigaci při scrollování
    if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // ✅ GSAP animace slide in/out
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 transition-all duration-700"
    >
      <header
        ref={headerRef}
        className="w-full h-full border border-transparent rounded-xl transition-all duration-300"
      >
        <nav className="relative flex size-full items-center justify-center">

          {/* Logo vlevo */}
          <div className="absolute left-10 flex items-center gap-7">
            <Link to="/">
              <img src="./logo.png" alt="logo" className="w-14" />
            </Link>
          </div>

          {/* Navigace – prostředek (desktop) */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item, index) => (
              <HashLink
                key={index}
                smooth
                to={item.link}
                className="nav-hover-link"
              >
                {item.name}
              </HashLink>
            ))}
          </div>

          {/* Tlačítka vpravo (desktop) */}
          <div className="absolute right-10 hidden md:flex gap-6">
            <HashLink
              smooth
              to="#download"
              className="navbutton bg-blue-700 hover:bg-blue-800"
            >
              Stáhnout
            </HashLink>
            <HashLink
              smooth
              to="/"
              className="navbutton bg-[#780000] hover:bg-[#910000]"
            >
              Zpět Domů
            </HashLink>
          </div>

          {/* Mobilní menu (hamburger + obsah) */}
          <div className="absolute right-4 md:hidden">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-2xl focus:outline-none text-white"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* ✅ Mobilní menu – odkazy + tlačítka */}
            {isMenuOpen && (
              <div
                className="absolute right-0 top-12 bg-white shadow-lg rounded-md p-4 z-50 w-44"
              >
                <ul className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <HashLink
                        smooth
                        to={item.link}
                        className="text-black hover:text-blue-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </HashLink>
                    </li>
                  ))}

                  {/* ✅ Nové odkazy pro mobilní menu */}
                  <li>
                    <HashLink
                      smooth
                      to="#download"
                      className="text-black hover:text-blue-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Kontakt
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      smooth
                      to="/"
                      className="text-black hover:text-blue-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Zpět Domů
                    </HashLink>
                  </li>
                </ul>
              </div>
            )}
          </div>

        </nav>
      </header>
    </div>
  );
};

export default NavBar;
