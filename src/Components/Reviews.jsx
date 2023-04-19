import React from 'react'
import '../CSS/Reviews.css'


export default function Reviews() {
    return (
        <main className='reviewsSection' id='reviews'>

            <section className='subHeader'>
                <p className='sectionTitle'>Reviews</p>
                <p>Feedback</p>
            </section>
            <section className='reviews'>
                <div className='review'>
                    <div className='quotesReview'></div>
                    <p>Awesome work done by johns
                        workers they finished just in
                        time and left the house
                        spotless!!</p>
                </div>
                <div className='review'>
                    <div className='quotesReview'></div>
                    <p>Awesome work done by johns
                        workers they finished just in
                        time and left the house
                        spotless!!</p>
                </div>
                <div className='review'>
                    <div className='quotesReview'></div>
                    <p>Awesome work done by johns
                        workers they finished just in
                        time and left the house
                        spotless!!</p>
                </div>

            </section>
            <div className='dots'>
                <span className='dot'></span>
                <span className='dot'></span>
                <span className='dot'></span>
            </div>

        </main>
    )
}
