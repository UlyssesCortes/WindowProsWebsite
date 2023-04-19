import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';
import '../CSS/Contact.css'


export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleNameInput = (event) => {
        setName(event.target.value)
    }

    const handleEmailInput = (event) => {
        setEmail(event.target.value)
    }

    const handleSubjectInput = (event) => {
        setSubject(event.target.value)
    }

    const handleMessageInput = (event) => {
        setMessage(event.target.value)
    }

    return (
        <>
            <div className='contactFormSec' id='contact'>
                <div className='avatar'>
                    <Spline scene="https://prod.spline.design/wpLwgZHZEi4N2iWv/scene.splinecode" />
                </div>
                <form className='formSec'>
                    <section className='topFormSec'>
                        <input className='nameInp' type="text" placeholder='Name'></input>
                        <input className='emailInp' type="text" placeholder='Email'></input>
                    </section>
                    <input className='subInp' type="text" placeholder='Subject'></input>
                    <input className='mesInp' type="text" placeholder='Message'></input>
                    <button className='sendBtn' type='submit'>SEND</button>
                </form>
            </div>
        </>
    )
}
