import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // ✅ Added for anchor navigation

// Page Sections (main page)
import NavBar from "./components/main_page/Navbar";
import Hero from "./components/main_page/Herosekce/Hero";
import Parallax from './components/main_page/Parallax';
import Newsletter from "./components/main_page/Footer/Newsletter";
import About from "./components/main_page/About";
import Me from "./components/main_page/Me/Me";
import MicrositeNav from "./components/main_page/Microsite/MicrositeNav";
import Kontakt from "./components/main_page/Contact/Kontakt";
import Footer from "./components/main_page/Footer/Footer";
import Sitemapa from "./components/main_page/Sitemap/Sitemapa";

// Microsite Pages
import KcdPage from './components/microsite/KCD/Kingdom';
import MafiaPage from './components/microsite/MafiaM/Mafia';
import ArmaPage from './components/microsite/ArmaM/Arma';
import EurotruckPage from './components/microsite/Eurotruck/EuroT';

// Scroll Reset
import Top from "./components/Top";

function App() {
  return (
    <Router>
      <Top />
      <div className="bg-[#780000] min-h-screen">
        <Routes>
          {/* ✅ Homepage route with NavBar + sections */}
          <Route
            path="/"
            element={
              <>
                <NavBar /> {/* Only on homepage */}
                <Hero />
                <About />
                <Me />
                <Sitemapa />
                <MicrositeNav />
                <Kontakt />
                <Newsletter />
                <Footer />
              </>
            }
          />
          {/* ✅ Microsites */}
          <Route path="/kcd" element={<KcdPage />} />
          <Route path="/mafia" element={<MafiaPage />} />
          <Route path="/arma" element={<ArmaPage />} />
          <Route path="/eurotruck" element={<EurotruckPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
