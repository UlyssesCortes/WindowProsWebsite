import React from 'react'
import '../CSS/Reviews.css'


export default function Reviews() {
    return (
        <>
            <br id='reviews'></br>
            <main className='reviewsSection'>
                <section className='subHeader'>
                    <p className='sectionTitle'>Reviews</p>
                    <p>Feedback</p>
                </section>

                <section className='reviews'>
                    <div className='review'>
                        <div className='quotesReview'></div>
                        <p>Not only are the windows spotless and the screens looking like new, you will be treated as a valuable customer. They are careful around your landscape and furnishings, always on time. True pros.
                        </p>
                    </div>
                    <div className='review review2'>
                        <div className='quotesReview'></div>
                        <p>Second time using Window Pros! Adam and Gabe were on time, clean, polite and super nice. My windows, screens and runners are spotless! Can't say enough - highly recommend!
                        </p>
                    </div>
                    <div className='review review2'>
                        <div className='quotesReview'></div>
                        <p>So happy about the job they did, and how nice the two young men who did it are. John, the owner, has taken care of our windows for several years, and I am delighted his business is expanding. Absolutely the best.
                        </p>
                    </div>

                </section>
                <div className='dots'>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                </div>
            </main>
        </>
    )
}
