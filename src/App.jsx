import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import OurBenefits from './Components/OurBenefits'
import Reviews from './Components/Reviews'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

export default function App() {
    const [expandResidential, setExpandResidential] = useState(false)
    const [expandCommercial, setExpandCommercial] = useState(false)
    const [expandSolar, setExpandSolar] = useState(false)
    return (
        <>
            <Navbar {...{ expandResidential, setExpandResidential }} />
            <Hero {...{ expandResidential, setExpandResidential }} />
            <Services {...{ expandResidential, expandCommercial, expandSolar, setExpandResidential, setExpandCommercial, setExpandSolar }} />
            <OurBenefits />
            <Reviews />
            <br id='gallery'></br>
            <Gallery />
            <Contact />
            <Footer {...{ expandResidential, expandCommercial, expandSolar, setExpandResidential, setExpandCommercial, setExpandSolar }} />
        </>
    )
}
