import React from 'react'
import '../CSS/Gallery.css'


export default function Gallery() {
    return (
        <main className='gallery'>
            <section className='subHeader'>
                <p className='sectionTitle'>Gallery</p>
                <p>Our Customers</p>
            </section>
            <section className='galleryContainer'>

                <div className='piller1 img'></div>

                <section className='middleImgs'>
                    <section className='topImg'>
                        <div className='rectangle img'></div>
                        <div className='rombus img'></div>
                        <div className='square img'></div>
                    </section>

                    <section className='bottomImg'>
                        <div className='rombus2 img'></div>
                        <div className='square2 img'></div>
                        <div className='rectangle2 img'></div>
                    </section>
                </section>

                <div className='piller2 img'></div>
            </section>

        </main>
    )
}
