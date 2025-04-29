import React from 'react'
import Navbar from './layouts/Navbar'
import Banner from './layouts/Banner'
import Sarvice from './layouts/Sarvice'
import Clients from './layouts/Clients'
import Skills from './layouts/Skills'
import Contact from './layouts/Contact'
import Footer from './layouts/Footer'
import Works from './layouts/Works'

const Home = () => {
  return (
    <>
    
    <Banner/>
    <Sarvice/>
    <Skills/>
    <Works/>
    <Clients/>
    <Contact/>
   
    </>
  )
}

export default Home