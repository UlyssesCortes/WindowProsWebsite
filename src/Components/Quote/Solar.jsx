import React from 'react'

export default function Solar({ setExpandResidential, expandResidential }) {
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
