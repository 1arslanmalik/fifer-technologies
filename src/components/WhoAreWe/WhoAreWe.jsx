'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tagVariants } from '@/src/utils/animation';
import "./WhoAreWe.css";
import { slider } from '../../utils/data';
import Image from 'next/image';

const WhoAreWe = () => {
    // const imageData = [
    //     {
    //         imageLink: 'https://images.pexels.com/photos/23020607/pexels-photo-23020607/free-photo-of-a-sunset-with-birds-flying-over-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //         heading: 'Sunset Over the Ocean',
    //         description: 'Experience the breathtaking beauty of a sunset over the vast ocean, with birds gracefully soaring against the golden sky.'
    //     },
    //     {
    //         imageLink: 'https://images.pexels.com/photos/25243802/pexels-photo-25243802/free-photo-of-coolangatta-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //         heading: 'Coolangatta Beach',
    //         description: 'Discover the stunning Coolangatta Beach, where crystal-clear waters meet pristine golden sands, creating a perfect seaside escape.'
    //     },
    //     {
    //         imageLink: 'https://images.pexels.com/photos/17966146/pexels-photo-17966146/free-photo-of-trona-pinnacles-in-californian-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //         heading: 'Trona Pinnacles in the Desert',
    //         description: 'Explore the unique and otherworldly Trona Pinnacles, a geological marvel in the heart of the Californian desert.'
    //     },
    // ];

    // console.log(slider)
    const imageData = slider;



    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? imageData.length - 1 : currentSlide - 1);
    };

    const handleNext = () => {
        setCurrentSlide(currentSlide === imageData.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="relative bg-african-violet whoarewe">
            <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className='w-full'
            >
                <div className="w-full bg-african-violet relative flex justify-center items-center flex-col sm:flex-col py-5 space-y-10">
                    <div className="text-center w-full sm:w-1/2 flex flex-col items-center justify-center px-4">
                        <span className="rounded-sm flex items-center pt-2 bg-russian-violet text-white z-10 text-2xl sm:text-6xl px-2 uppercase font-bold opacity-100">
                            Who Are We
                        </span>
                    </div>
                    {/* Overlay Div */}
                    <div className="relative z-10 flex items-end justify-center w-full sm:w-full px-4">
                        <div className="bg-white p-4 sm:p-8 rounded-md shadow-lg flex flex-col w-full mx-2 sm:mx-5 ">
                            <div className="relative w-full h-1/2">
                                <div className="w-full overflow-hidden h-full">
                                    <div className="relative h-full">
                                        <AnimatePresence mode="wait" className="h-1/2">
                                            <motion.div
                                                key={currentSlide}
                                                className="w-full h-full"
                                                transition={{
                                                    duration: 0.5,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                <div className="relative h-96 rounded-3xl overflow-hidden">
                                                    <Image
                                                        // src={(imageData[currentSlide].imageLink)}
                                                        src={`/slider/${imageData[currentSlide].imageLink}`}
                                                        alt={`Slide`}
                                                        layout="fill"
                                                        objectFit="cover"
                                                    />
                                                    <div className="absolute inset-0 bg-black opacity-50 rounded-3xl h-full"></div>
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                        <motion.div
                                            className="absolute inset-0 flex flex-col items-center justify-center w-full"
                                            initial={{ opacity: 0, y: '100%' }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                            <div className="flex flex-col justify-center items-center w-9/10">
                                                <motion.h1
                                                    className="text-lavender text-md sm:text-5xl font-bold text-center"
                                                    initial={{ opacity: 0, y: '100%' }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.4 }}
                                                >
                                                    {imageData[currentSlide].heading}
                                                </motion.h1>
                                                <motion.p
                                                    className="text-white text-xs font-regular sm:text-lg sm:font-bold text-center"
                                                    initial={{ opacity: 0, y: '100%' }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.6 }}
                                                >
                                                    {imageData[currentSlide].description}
                                                </motion.p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4">
                                    <motion.button
                                        onClick={handlePrev}
                                        className="bg-gray-800 text-white rounded-full p-1 sm:p-2 focus:outline-none bg-russian-violet"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ x: -100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <svg className="w-4 sm:w-6 h-4 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </motion.button>
                                    <motion.button
                                        onClick={handleNext}
                                        className="bg-gray-800 text-white rounded-full p-1 sm:p-2 focus:outline-none bg-russian-violet"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ x: 100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <svg className="w-4 sm:w-6 h-4 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center w-full my-2">
                        <div className="flex items-center text-center my-2">
                            <p className="text-sm sm:text-3xl sm:w-full text-white text-center bg-ultra-violet py-4">
                                We are a digital marketing agency specializing in web development, graphics design, digital marketing, and software development. Our mission is to help businesses grow and succeed in the digital world.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default WhoAreWe;
