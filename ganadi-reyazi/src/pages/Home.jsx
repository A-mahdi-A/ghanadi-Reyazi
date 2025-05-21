import React from 'react'
import Navbar from '../componnets/Navbar'
import Leftside from '../componnets/sectione 1 Home page/Lindex'
import SectioneOneHome from '../componnets/sectione 1 Home page/SectioneOneHome'
import LernsSectione from '../componnets/Lern Home Page/LernsSectione'
import Books from '../componnets/Books of home page'
import Footer from '../componnets/footer/Footer'


function Home() {
  return (
    <div dir="rtl" lang='fa'>
      <Navbar/>
    <SectioneOneHome/>
    <LernsSectione/>
    <Books/>
    <Footer/>
    </div>
  )
}

export default Home
