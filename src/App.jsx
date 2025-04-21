import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import NavBar from "./components/main_page/Navbar";
import Hero from "./components/main_page/Herosekce/Hero";
import Newsletter from "./components/main_page/Footer/Newsletter";
import About from "./components/main_page/About";
import Me from "./components/main_page/Me/Me";
import MicrositeNav from "./components/main_page/Microsite/MicrositeNav";
import Kontakt from "./components/main_page/Contact/Kontakt";
import Footer from "./components/main_page/Footer/Footer";
import Sitemapa from "./components/main_page/Sitemap/Sitemapa";
import KcdPage from './components/microsite/KCD/Kingdom';
import MafiaPage from './components/microsite/MafiaM/Mafia';
import ArmaPage from './components/microsite/ArmaM/Arma';
import EurotruckPage from './components/microsite/Eurotruck/EuroT';
import Top from "./components/Top";

function App() {
  return (
    <Router>
      <Top />
      <div className="bg-[#780000] min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar /> 
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
          {/* ✅ Microsite linky */}
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
