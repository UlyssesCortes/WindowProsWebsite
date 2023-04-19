import React from 'react'
import '../CSS/Services.css'


export default function Services() {
    return (
        <main className='services' id='services'>
            <div className='subHeaderServ'>
                <p className='sectionTitle'>Services</p>
                <div className='serviceQuote'>
                    <div className='quotes'></div>
                    <p>
                        WindowPros provides with quick
                        <br></br>
                        and excellent results.
                    </p>
                    <div className='avatarImg'></div>
                </div>
            </div>

            <div className='serviceBoxes'>
                <div className='residential serviceBox'>
                    <div className='homeIcon servIcon'></div>
                    <p className='sectionSlogan'><span>Residential</span>
                        <br></br>
                        Home window
                        <br></br>
                        cleaning
                    </p>
                    <section className='bottomCard'>
                        <div className='plusIcon2 '></div>
                        <button className='learnMoreBtn residentialLearn'>Learn More</button>
                    </section>

                </div>
                <div className='serviceBox'>
                    <div className='buildingIcon servIcon'></div>
                    <p className='sectionSlogan'><span>Commercial</span>
                        <br></br>
                        Buildings window
                        <br></br>
                        cleaning
                    </p>
                    <section className='bottomCard'>
                        <div className='plusIcon'></div>
                        <button className='learnMoreBtn'>Learn More</button>
                    </section>

                </div>
                <div className='serviceBox'>
                    <div className='solarIcon servIcon'></div>
                    <p className='sectionSlogan'><span>Solar</span>
                        <br></br>
                        Panel cleaning and
                        <br></br>
                        energi saving
                    </p>
                    <section className='bottomCard'>
                        <div className='plusIcon'></div>
                        <button className='learnMoreBtn'>Learn More</button>
                    </section>
                </div>
            </div>
        </main>
    )
}
