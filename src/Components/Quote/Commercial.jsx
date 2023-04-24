import React from 'react'
import '/root/windowPros3/src/CSS/Commercial.css'

export default function Commercial({ expandCommercial, setExpandCommercial }) {
    return (
        <section className='commercialExpand'>
            <a className='minusIcon' href="#services"
                onClick={() => setExpandCommercial(!expandCommercial)}
            ></a>
            <section className='commercialLeft'></section>
            <section className='CommercialRight'></section>
        </section>
    )
}
