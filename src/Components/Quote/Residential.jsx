import React from 'react'
import '/root/windowPros3/src/CSS/Residential.css'

export default function Residential({ setExpandResidential, expandResidential }) {
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
                <div className='location'>Location</div>
                <section className='addBtns'>
                    <div className='plusBtn'>+</div>
                    <p className='count'>8</p>
                    <div className='minusBtn'>-</div>
                </section>
            </section>
            <section className='serviceRight'>

            </section>
        </section>
    )
}