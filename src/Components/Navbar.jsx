import React from 'react'
import '../CSS/Navbar.css'

export default function Navbar({ expandResidential, setExpandResidential }) {
    return (
        <nav className='navBar' id='top'>
            <div className='leftNav'>
                <p className='title'>WindowPros</p>
            </div>
            <div className="rightNav">
                <a href='#services' className='links'>Services</a>
                <a href='#reviews' className='links'>Reviews</a>
                <a className=' links' href="#services"
                    onClick={() => setExpandResidential(!expandResidential)}
                >Get a quote</a>
                <a href='#contact' className='links contactLink'>ContactUs</a>
            </div>
        </nav>
    )
}
