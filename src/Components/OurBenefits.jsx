import React from 'react'
import '../CSS/OurBenefits.css'

export default function OurBenefits() {
    return (
        <main className='ourBenefits'>
            <section className='subHeader'>
                <p className='sectionTitle'>Our Benefits</p>
                <p>Advantages</p>
            </section>
            <section className='mainContent'>
                <section className='leftOurBenefits'>
                    <div className='benefitsImg'></div>
                </section>

                <section className='rightOurBenefits'>
                    <div>
                        <span className='satisfaction'></span>
                        <p>100% Satisfaction guarantee</p>
                    </div>
                    <div>
                        <span className='team'></span>
                        <p>Highly experienced cleaning team</p>
                    </div>
                    <div>
                        <span className='eco'></span>
                        <p>Green, eco-friendly cleaning</p>
                    </div>
                    <div>
                        <span className='insurance'></span>
                        <p>Insured service against damages</p>
                    </div>

                </section>
            </section>

        </main>
    )
}
