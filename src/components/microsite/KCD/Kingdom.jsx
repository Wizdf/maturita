import React from 'react'
import Navbar from "../components_mc/Navbar_mc"
import Hero from "./HeroK"
import AboutSt from "./About_stK"
import About from "./AboutK"
import Merch from "./MerchK"
import Download from "./DownloadK"
import Footer from "../components_mc/Footer_mc"

const Kingdom = () => {
  return (
    <div className='bg-[#780000]'>
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

export default Kingdom