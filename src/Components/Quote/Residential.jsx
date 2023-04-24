import React from 'react'
// import '.../CSS/Residential.css'
import '/root/windowPros3/src/CSS/Residential.css'


export default function Residential({ setExpandResidential, expandResidential }) {
    return (
        <section className='residentailExpand'>
            <a className='minusIcon' href="#services"
                onClick={() => setExpandResidential(!expandResidential)}
            ></a>
            <section className='residentialLeft'></section>
            <section className='residentialRight'></section>
        </section>
    )
}