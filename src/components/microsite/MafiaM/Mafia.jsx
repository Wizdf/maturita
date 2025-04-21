import React from 'react'
import Navbar from "../components_mc/Navbar_mc"
import Hero from "./HeroM"
import AboutSt from "./About_stM"
import AboutM from "./AboutM"
import Merch from "./MerchM"
import Download from "./DownloadM"
import Footer from "../components_mc/Footer_mc"



const Mafia = () => {
  return (
    <div className='bg-[#780000]'>
      <Navbar/>      
      <Hero/>
      <AboutM/>
      <AboutSt/>
      <Merch/>
      <Download/>
      <Footer/>
    </div>
  )
}

export default Mafia