import React from 'react'

export default function DeskNav({ expandResidential, setExpandResidential }) {
    return (
        <div className="rightNav">
            <a href='#services' className='links'>Services</a>
            <a href='#reviews' className='links'>Reviews</a>
            <a className=' links' href="#services"
                onClick={() => setExpandResidential(!expandResidential)}
            >Get a quote</a>
            <a href='#contact' className='links contactLink'>ContactUs</a>
        </div>
    )
}
