import React from 'react'
import { motion } from "framer-motion";
import '../CSS/Services.css'
import '../CSS/MobileSize.css'
import Residential from './Quote/Residential';
import Commercial from './Quote/Commercial';
import Solar from './Quote/Solar';


export default function Services({
    expandResidential, setExpandResidential,
    expandCommercial, setExpandCommercial,
    expandSolar, setExpandSolar }) {

    return (
        <>
            <br id='services'></br>
            <main className='services' >
                <div className='subHeaderServ'>
                    <p className='sectionTitle'>Services</p>
                    <div className='serviceQuote'>
                        <div className='quotes'></div>
                        <p>
                            Crystal-clear windows,
                            <br></br>
                            speedy service. A top choice!
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
                                    <div className='subLoganBox'>
                                        Home window
                                        <br></br>
                                        cleaning
                                    </div>
                                </p>
                                <section className='bottomCard'>
                                    <motion.a className='plusIcon2' href="#services"
                                        onClick={() => setExpandResidential(!expandResidential)}
                                    ></motion.a>
                                    <button className='learnMoreBtn serviceLearn'>Learn More</button>
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
                                    <div className='subLoganBox'>
                                        Buildings window
                                        <br></br>
                                        cleaning
                                    </div>
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
                                <p className='sectionSlogan'><span>Solar Panel</span>
                                    <div className='subLoganBox'>
                                        Home window
                                        <br></br>
                                        cleaning
                                    </div>
                                </p>
                                <section className='bottomCard'>
                                    <motion.a className='plusIcon' href="#services"
                                        onClick={() => setExpandSolar(!expandSolar)}
                                    ></motion.a>
                                    <button className='learnMoreBtn'>Learn More</button>
                                </section>
                            </section>
                            : <Solar expandSolar={expandSolar} setExpandSolar={setExpandSolar} />}
                    </motion.div>
                </div>
            </main>
        </>
    )
}
