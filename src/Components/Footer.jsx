import React from 'react'
import '../CSS/Footer.css'

export default function Footer() {
    return (
        <section className='footer'>
            <div className='footerColumn'>
                <p className='linkTtitle'>Services</p>
                <div className='linksFooter'>
                    <a>Residential</a>
                    <a>Commercial</a>
                    <a>Solar Panel</a>
                </div>
            </div>
            <div className='footerColumn'>
                <p className='linkTtitle'>Testimonials</p>
                <div className='linksFooter'>
                    <a>Yelp</a>
                    <a>Clients</a>
                    <a>Commercial</a>
                </div>
            </div>
            <div className='footerColumn'>
                <p className='linkTtitle'>Contact Us</p>
                <div className='linksFooter'>
                    <a>Join Us</a>
                    <a>760-685-4653</a>
                    <a>john@windowprosofsandiego.com</a>
                </div>
            </div>
            <div className='footerColumn'>
                <p className='linkTtitle'>Social Media</p>
                <div className='linksFooter'>
                    <a>Facebook</a>
                    <a>Linkedin</a>
                    <a>Indeed</a>
                </div>
            </div>
        </section>
    )
}
