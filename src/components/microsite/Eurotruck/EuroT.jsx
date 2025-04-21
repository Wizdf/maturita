import React from 'react'
import Navbar from "../components_mc/Navbar_mc"
import Hero from "./HeroE"
import AboutSt from "./About_stE"
import About from "./AboutE"
import Merch from "./MerchE"
import Download from "./DownloadE"
import Footer from "../components_mc/Footer_mc"


const EuroT = () => {
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

export default EuroT