import React from 'react'

export default function Location({ showLocations, setShowLocations, setLocation }) {

    const showLocationFun = () => {
        setShowLocations(!showLocations)
    }

    return (
        <section className='locations'>
            <div className='locationContailer'>
                <p className='location' onClick={() => { setLocation("Oceanside"), showLocationFun() }}>Oceanside</p>
                <span className='dotLoc'></span>
            </div>
            <div className='locationContailer'>
                <p className='location' onClick={() => { setLocation("Vista"), showLocationFun() }}>Vista</p>
                <span className='dotLoc'></span>
            </div>
            <div className='locationContailer'>
                <p className='location' onClick={() => { setLocation("San Marcos"), showLocationFun() }}>San Marcos</p>
                <span className='dotLoc'></span>
            </div>
            <div className='locationContailer'>
                <p className='location' onClick={() => { setLocation("Escondido"), showLocationFun() }}>Escondido</p>
                <span className='dotLoc'></span>
            </div>
            <div className='locationContailer'>
                <p className='location' onClick={() => { setLocation("Carlsbad"), showLocationFun() }}>Carlsbad</p>
                <span className='dotLoc'></span>
            </div>
            <div className='locationContailer'>
                <p className='location' onClick={() => { setLocation("Del Mar"), showLocationFun() }}>Del Mar</p>
                <span className='dotLoc'></span>
            </div>
            <div className='locationContailer'>
                <p className='location' onClick={() => { setLocation("Encinitas"), showLocationFun() }}>Encinitas</p>
                <span className='dotLoc'></span>
            </div>
            <div className='locationContailer'>
                <p className='location' onClick={() => { setLocation("Other"), showLocationFun() }}>Other</p>
                <span className='dotLoc'></span>
            </div>
        </section>
    )
}
