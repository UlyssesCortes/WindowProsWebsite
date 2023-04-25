import React, { useState } from 'react'
import Location from './QuoteElements/Location'
import '/root/windowPros3/src/CSS/Commercial.css'

export default function Commercial({ expandCommercial, setExpandCommercial }) {

    const [location, setLocation] = useState("Location")
    const [showLocations, setShowLocations] = useState(false)
    return (
        <section className='serviceExpand'>
            <section className='serviceLeft'>
                <section className='subNavQuote'>
                    <a className='minusIcon' href="#services"
                        onClick={() => setExpandCommercial(!expandCommercial)}
                    ></a>
                    <button className='learnMoreBtn serviceLearn'>Learn More</button>
                </section>
                <p className='quoteTitle'>Commercial Quote</p>
                <p className='locationTxt' onClick={() => { setShowLocations(!showLocations) }}>{location}<div className={!showLocations ? "downArrow" : "upArrow"}></div></p>

                {showLocations &&
                    <Location setLocation={setLocation} setShowLocations={setShowLocations} showLocations={showLocations} />
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
