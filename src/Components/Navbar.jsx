import React from 'react'
import '../CSS/Navbar.css'

export default function Navbar() {
    return (
        <section className='navBar'>
            <div className='leftNav'>
                <p className='title'>WindowPros</p>
            </div>
            <div className="rightNav">
                <a href='#quote' className='links'>Get a quote</a>
                <a href='#reviews' className='links'>Reviews</a>
                <a href='#services' className='links'>Services</a>
                <a href='#contact' className='links contactLink'>ContactUs</a>
            </div>
        </section>
    )
}
