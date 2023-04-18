import React from 'react'
import '../CSS/Hero.css'

export default function Hero() {
    return (
        <section className='hero'>
            <div className='heroLeft'>
                <div className='slogan'>
                    <p>Best
                        <br></br>
                        Window Cleaning
                        <br></br>
                        In <span className='sloganSpecial'>Oceanside</span>
                    </p>
                </div>
                <div className='subSlogan'>
                    <p>The best cleaning results are guaranteed by our<br></br>
                        100% happiness guarantee</p>
                </div>
                <div className='heroBtns'>
                    <button className='quoteHeroBtn'>Get A Quote</button>
                    <button className='joinUsHeroBtn'>Join Us</button>
                </div>
            </div>

            <div className='heroRight'>
                <div className='windowImg'></div>
            </div>
        </section>
    )
}
