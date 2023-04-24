import React from 'react'
import '../CSS/Hero.css'
import { motion, useScroll, useSpring } from "framer-motion";


export default function Hero() {
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
                    <button className='quoteHeroBtn'>Get a quote</button>
                    <button className='joinUsHeroBtn' onClick={() => window.open("https://www.indeed.com/cmp/Window-Pros-1/jobs", "_blank")}>Join Us</button>
                </div>
            </div>

            <div className='heroRight'>
                <div className='windowImg'></div>
            </div>
        </main>
    )
}
