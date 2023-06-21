import React, { useState, useEffect } from 'react'
import Location from './QuoteElements/Location'
import '/root/windowPros3/src/CSS/Commercial.css'

export default function Commercial({ expandCommercial, setExpandCommercial }) {

    const [location, setLocation] = useState("Location")
    const [showLocations, setShowLocations] = useState(false)
    const [windowCount, setWindowCount] = useState(1)
    const [price, setPrice] = useState("150")

    useEffect(() => {
        if (windowCount <= 8) {
            setPrice("150")
        }
        if (windowCount > 8 && windowCount < 14) {
            setPrice("250")
        }
        if (windowCount > 14) {
            setPrice("350")
        }
    }, [windowCount])
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
                <br></br>
                <p className='quoteSubSlogan'>Window Cleaning</p>

                <p className='locationTxt' onClick={() => { setShowLocations(!showLocations) }}>{location}<div className={!showLocations ? "downArrow" : "upArrow"}></div></p>

                {showLocations &&
                    <Location setLocation={setLocation} setShowLocations={setShowLocations} showLocations={showLocations} />
                }

                {!showLocations &&
                    <section className='addBtns'>
                        <div className='plusBtn' onClick={() => { setWindowCount(windowCount + 1) }}>+</div>
                        <p className='count'>{windowCount}</p>
                        <div className='minusBtn' onClick={() => { windowCount > 0 && setWindowCount(windowCount - 1) }}>-</div>
                    </section>
                }
            </section>


            <section className='serviceRight'>
                <div className='totalPrice'>
                    <p className='price'>${price}</p>
                    <div className='sendBtnContainer'>
                        <a className='sendQuoteBtn' href='#contact'>Send quote!</a>
                    </div>
                </div>
            </section>
        </section>
    )
}
