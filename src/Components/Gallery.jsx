import React from 'react'
import '../CSS/Gallery.css'


export default function Gallery() {
    return (
        <main className='gallery' >
            <section className='subHeader'>
                <p className='sectionTitle'>Gallery</p>
                <p>Our Customers</p>
            </section>
            <section className='galleryContainer'>

                <div className='piller1 img'>
                    <div class='overlay'>
                        <p>John</p>
                    </div>
                </div>

                <section className='middleImgs'>
                    <section className='topImg'>
                        <div className='rectangle img'>
                            <div class='overlay'>
                                <p>Clients House</p>
                            </div>
                        </div>
                        <div className='rombus img'>
                            <div class='overlay'>
                                <p>Calvary Chapel</p>
                            </div>
                        </div>
                        <div className='square img'>
                            <div class='overlay'>
                                <p>Stone Brewery</p>
                            </div>
                        </div>
                    </section>

                    <section className='bottomImg'>
                        <div className='rombus2 img'>
                            <div class='overlay'>
                                <p>Pizza Port</p>
                            </div>
                        </div>
                        <div className='square2 img'>
                            <div class='overlay'>
                                <p>Teri Cafe</p>
                            </div>
                        </div>
                        <div className='rectangle2 img'>
                            <div class='overlay'>
                                <p>Oceanside City</p>
                            </div>
                        </div>
                    </section>
                </section>

                <div className='piller2 img'>
                    <div class='overlay'>
                        <p>Carlsbad Client</p>
                    </div>
                </div>
            </section>

        </main>
    )
}
