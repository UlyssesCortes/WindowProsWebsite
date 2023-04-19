import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import OurBenefits from './Components/OurBenefits'
import Reviews from './Components/Reviews'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Services />
    <OurBenefits />
    <Reviews />
    <Gallery />
    <Contact />
    <Footer />
  </React.StrictMode>,
)
