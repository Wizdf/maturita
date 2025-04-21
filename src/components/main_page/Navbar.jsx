import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // ✅ Add this

const navItems = [
  { name: "O nás", link: "/#uvod" },
  { name: "Zakladatel", link: "/#og" },
  { name: "Microsites", link: "/#micronav" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // ✅ Only render NavBar on the homepage
  if (location.pathname !== "/") {
    return null;
  }

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

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
      className="fixed inset-x-0 top-4 z-50 h-20 md:mx-40 mx-5 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="relative flex size-full items-center justify-center">

          {/* Logo - Absolute left */}
          <div className="absolute left-4 flex items-center gap-7">
            <Link to="/">
              <img src="./logo.png" alt="logo" className="w-14" />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item, index) => (
              <HashLink
                key={index}
                smooth
                to={item.link}
                className="nav-hover-btn"
              >
                {item.name}
              </HashLink>
            ))}
          </div>

          {/* Desktop Right Buttons */}
          <div className="absolute right-4 hidden md:flex gap-6">
            <ClippedButton>Kontakt</ClippedButton>
            <ClippedButton>Sitemap</ClippedButton>
          </div>

          {/* Mobile Menu - Absolute right */}
          <div className="absolute right-4 md:hidden">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-2xl focus:outline-none text-white"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            {isMenuOpen && (
              <div
                className="absolute right-0 top-12 bg-white shadow-lg rounded-md p-4 z-50"
                style={{ minWidth: "150px" }}
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
                </ul>
              </div>
            )}
          </div>

        </nav>
      </header>
    </div>
  );
};

const ClippedButton = ({ children }) => {
  return (
    <button className="relative group w-[140px] h-[40px] uppercase text-xs tracking-widest font-medium cursor-pointer">
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 40"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="btnGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1c1c1c" />
            <stop offset="100%" stopColor="#6220fb" />
          </linearGradient>
        </defs>
        <polygon
          points="0,0 200,0 200,25 185,40 15,40 0,25"
          fill="url(#btnGradient)"
          stroke="#fff"
          strokeWidth="1"
          className="transition-all duration-300 group-hover:stroke-[#00e0ff] group-hover:stroke-[2]"
        />
      </svg>
      <span className="relative z-10 text-white px-4 transition-all duration-300 group-hover:tracking-wider">
        {children}
      </span>
    </button>
  );
};

export default NavBar;
