import React, { useState } from 'react'
import { motion } from "framer-motion";
import '../CSS/Services.css'
import Residential from './Quote/Residential';
import Commercial from './Quote/Commercial';
import Solar from './Quote/Solar';


export default function Services() {
    const [expandResidential, setExpandResidential] = useState(false)
    const [expandCommercial, setExpandCommercial] = useState(false)
    const [expandSolar, setExpandSolar] = useState(false)

    return (
        <>
            <br id='services'></br>
            <main className='services' >
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

                    <motion.div className='residential serviceBox'
                        layout
                        data-isOpen={expandResidential}
                    >
                        {!expandResidential ?
                            <section className='content'>
                                <div className='homeIcon servIcon'></div>
                                <p className='sectionSlogan'><span>Residential</span>
                                    <br></br>
                                    Home window
                                    <br></br>
                                    cleaning
                                </p>
                                <section className='bottomCard'>
                                    <motion.a className='plusIcon2' href="#services"
                                        onClick={() => setExpandResidential(!expandResidential)}
                                    ></motion.a>
                                    <button className='learnMoreBtn residentialLearn'>Learn More</button>
                                </section>
                            </section>
                            : <Residential
                                setExpandResidential={setExpandResidential}
                                expandResidential={expandResidential} />}
                    </motion.div>

                    <motion.div className={`commercial serviceBox ${expandCommercial && "black"}`}
                        layout
                        data-isOpen={expandCommercial}
                    >
                        {!expandCommercial ?
                            <section className='content'>
                                <div className='buildingIcon servIcon'></div>
                                <p className='sectionSlogan'><span>Commercial</span>
                                    <br></br>
                                    Buildings window
                                    <br></br>
                                    cleaning
                                </p>
                                <section className='bottomCard'>
                                    <motion.a className='plusIcon' href="#services"
                                        onClick={() => setExpandCommercial(!expandCommercial)}
                                    ></motion.a>
                                    <button className='learnMoreBtn'>Learn More</button>
                                </section>
                            </section>
                            : <Commercial expandCommercial={expandCommercial} setExpandCommercial={setExpandCommercial} />}
                    </motion.div>

                    <motion.div className={`commercial serviceBox ${expandSolar && "black"}`}
                        layout
                        data-isOpen={expandSolar}
                    >
                        {!expandSolar ?
                            <section className='content'>
                                <div className='solarIcon servIcon'></div>
                                <p className='sectionSlogan'><span>Solar</span>
                                    <br></br>
                                    Panel cleaning and
                                    <br></br>
                                    energi saving
                                </p>
                                <section className='bottomCard'>
                                    <motion.a className='plusIcon' href="#services"
                                        onClick={() => setExpandSolar(!expandSolar)}
                                    ></motion.a>
                                    <button className='learnMoreBtn'>Learn More</button>
                                </section>
                            </section>
                            : <Commercial expandCommercial={expandSolar} setExpandCommercial={setExpandSolar} />}
                    </motion.div>
                </div>
            </main>
        </>
    )
}
