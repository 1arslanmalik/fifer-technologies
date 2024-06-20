"use client"

import React from 'react'
import './Hero.css'
import { HeroData } from '@/src/utils/data'
import { motion } from 'framer-motion'

const Hero = () => {

    const variants = (delay) => ({
        initial: {
            y: "18rem"
        },
        animate: {
            y: "0rem",
            transition: {
                type: "spring",
                damping: 25,
                duration: 2.5,
                delay
            }
        }
    })

    const imgVariants = () => ({
        initial: {
            y: "18rem"
        },
        animate: {
            y: "0rem",
            transition: {
                type: "spring",
                duration: 2,
                stiffness: 30,
            }
        }
    })

    return (
        <div className=" bg-blacklite flex items-start">
            <div className="container">
                {/* <img src="hero/hero-arrow.png" alt="" className="h-arrow" /> */}
                <div className="h-container">
                    {/* left Side */}
                    <div className="h-left">
                        <div className="image-row mt-10">
                            {
                                HeroData.slice(0, 3).map((person, i) => (
                                    <div className='person-pill' key={i}>
                                        <motion.div
                                            initial={"initial"}
                                            animate={"animate"}
                                            variants={variants()}
                                            style={{ backgroundColor: person.bg }}
                                            className="person-pill-bg">
                                            <motion.img
                                                initial={"initial"}
                                                animate={"animate"}
                                                variants={imgVariants()}
                                                src={person.src}
                                                alt={person.src} />
                                        </motion.div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="image-row mx-2">
                            {
                                HeroData.slice(3, 6).map((person, i) => (
                                    <div className='person-pill' key={i}>
                                        <motion.div
                                            initial={"initial"}
                                            animate={"animate"}
                                            variants={variants()}
                                            style={{ backgroundColor: person.bg }}
                                            className="person-pill-bg">
                                            <motion.img
                                                initial={"initial"}
                                                animate={"animate"}
                                                variants={imgVariants()}
                                                src={person.src}
                                                alt={person.src} />
                                        </motion.div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* right Side */}
                    <div className="h-right">
                        <div className="flex flex-col text-5xl font-bold space-y-5 w-3/4 h-title">
                            <span className="">Leverage Your</span>
                            <div className="uppercase text-white bg-ultra-violet pt-2 px-2 flex items-center no-wrap">
                                <span className="truncate no-wrap">Digital Business</span>
                            </div>
                            <span className="">Today !</span>
                        </div>

                        <div className="h-description text-white text-3xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, architecto. Doloremque
                        </div>
                        <div className="fund-button w-full text-white font-md flex justify-center p-0 m-0">
                            <button className="uppercase  bg-ultra-violet w-full text-[1em] font-bold px-2 py-3 rounded-full">Get Started</button>
                        </div>
                        {/* <EmailBox /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero