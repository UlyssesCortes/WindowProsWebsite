import React from 'react'
import '../CSS/Hero.css'
import '../CSS/MobileSize.css'
import { motion, useScroll, useSpring } from "framer-motion";


export default function Hero({ expandResidential, setExpandResidential }) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 160,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <main className='hero' id='hero'>
            <motion.div className="progress-bar" style={{ scaleX }} />

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
                    <a className='quoteHeroBtn links' href="#services"
                        onClick={() => setExpandResidential(!expandResidential)}
                    >Get a quote</a>
                    <button className='joinUsHeroBtn links' onClick={() => window.open("https://www.indeed.com/cmp/Window-Pros-1/jobs", "_blank")}>Join Us</button>
                </div>
            </div>

            <div className='heroRight'>
                <div className='windowImg'></div>
            </div>
        </main>
    )
}
