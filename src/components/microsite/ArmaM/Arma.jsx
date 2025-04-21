import React from 'react'
import Navbar from "../components_mc/Navbar_mc"
import Hero from "./HeroA"
import AboutSt from "./About_stA"
import About from "./AboutA"
import Merch from "./MerchA"
import Download from "./DownloadA"
import Footer from "../components_mc/Footer_mc"


const Arma = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <AboutSt/>
      <Merch/>
      <Download/>
      <Footer/>
    </div>
  )
}

export default Arma