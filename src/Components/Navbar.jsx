import React, { useState, useEffect } from 'react'
import '../CSS/Navbar.css'
import HamburgerNav from './HamburgerNav';

export default function Navbar({ expandResidential, setExpandResidential }) {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 780) {
                setIsSmallScreen(true);
            } else {
                setIsSmallScreen(false);
            }
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <nav className='navBar' id='top'>
            <div className='leftNav'>
                <a className='title ' href="#">WindowPros</a>
            </div>

            {!isSmallScreen ?
                <div className="rightNav">
                    <a href='#services' className='links'>Services</a>
                    <a href='#reviews' className='links'>Reviews</a>
                    <a className=' links' href="#services"
                        onClick={() => setExpandResidential(!expandResidential)}
                    >Get a quote</a>
                    <a href='#contact' className='links contactLink'>ContactUs</a>
                </div>
                : <HamburgerNav />}
        </nav>
    )
}
