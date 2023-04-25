import React from 'react'
import '../CSS/Footer.css'

export default function Footer({ expandResidential, setExpandResidential, expandCommercial, setExpandCommercial, expandSolar, setExpandSolar }) {
    return (
        <section className='footer'>

            <div className='footerColumn'>
                <p className='linkTtitle'>Services</p>
                <div className='linksFooter'>
                    <a className='links' href="#services"
                        onClick={() => setExpandResidential(!expandResidential)}
                    >Residential</a>
                    <a className='links' href="#services"
                        onClick={() => setExpandCommercial(!expandCommercial)}
                    >Commercial</a>
                    <a className='links' href="#services"
                        onClick={() => setExpandSolar(!expandSolar)}
                    >Solar Panel</a>
                </div>
            </div>
            <div className='footerColumn'>
                <p className='linkTtitle'>Testimonials</p>
                <div className='linksFooter'>
                    <a onClick={() => window.open("https://www.yelp.com/biz/window-pros-oceanside", "_blank")} className='links'>Yelp</a>

                    <a href='#gallery' className='links'>Clients</a>
                    <a href='#reviews' className='links'>Reviews</a>
                </div>
            </div>
            <div className='footerColumn'>
                <p className='linkTtitle'>Contact Us</p>
                <div className='linksFooter'>
                    <a onClick={() => window.open("https://www.indeed.com/cmp/Window-Pros-1/jobs", "_blank")} className='links'>Join Us</a>
                    <a href="tel:+7606854653" className='links'>760-685-4653</a>
                    <a href="mailto:john@windowprosofsandiego.com" className='links'>john@windowprosofsandiego.com</a>
                </div>
            </div>

        </section>
    )
}
