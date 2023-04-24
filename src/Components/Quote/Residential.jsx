import React, { useState } from 'react'
import '/root/windowPros3/src/CSS/Residential.css'

export default function Residential({ setExpandResidential, expandResidential }) {
    const [location, setLocation] = useState(null)
    const [showLocations, setShowLocations] = useState(false)
    return (
        <section className='serviceExpand'>
            <section className='serviceLeft'>
                <section className='subNavQuote'>
                    <a className='minusIcon' href="#services"
                        onClick={() => setExpandResidential(!expandResidential)}
                    ></a>
                    <button className='learnMoreBtn serviceLearn'>Learn More</button>
                </section>
                <p className='quoteTitle'>Residential Quote</p>
                <p className='locationTxt' onClick={() => { setShowLocations(!showLocations) }}>Location</p>

                {showLocations &&
                    <section className='locations'>
                        <p className='location'><span></span>Oceanside</p>
                        <p className='location'>Vista</p>
                        <p className='location'>San Marcos</p>
                        <p className='location'>Escondido</p>
                        <p className='location'>Carlsbad</p>
                        <p className='location'>Del Mar</p>
                        <p className='location'>Encinitas</p>
                        <p className='location'>Other</p>
                    </section>
                }

                {!showLocations &&
                    <section className='addBtns'>
                        <div className='plusBtn'>+</div>
                        <p className='count'>8</p>
                        <div className='minusBtn'>-</div>
                    </section>
                }
            </section>

            <section className='serviceRight'>
                <div className='totalPrice'>
                    <p>$150</p>
                </div>
            </section>
        </section>
    )
}