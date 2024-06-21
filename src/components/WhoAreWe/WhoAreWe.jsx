'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tagVariants } from '@/src/utils/animation';
import "./WhoAreWe.css";
import { slider } from '../../utils/data';
import Image from 'next/image';
import Link from 'next/link';

const WhoAreWe = () => {
    const imageData = slider;
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? imageData.length - 1 : currentSlide - 1);
    };

    const handleNext = () => {
        setCurrentSlide(currentSlide === imageData.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="relative bg-gradient-to-b from-african-violet to-ultra-violet whoarewe">
            <div className="container mx-auto px-4 h-full">
                <div className="flex flex-col items-center justify-center h-full py-5 mt-[8rem]">
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className='w-full h-full'
                    >
                        <div className="flex flex-col items-center space-y-6">
                            <h2 className="text-4xl md:text-6xl font-bold text-white text-center bg-russian-violet rounded-sm pt-2 px-2">
                                Who Are We
                            </h2>

                            <div className="w-full max-w-4xl">
                                <div className="rounded-lg shadow-2xl overflow-hidden">
                                    <div className="relative h-96">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={currentSlide}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute inset-0"
                                            >
                                                <Image
                                                    src={`/slider/${imageData[currentSlide].imageLink}`}
                                                    alt={`Slide`}
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                                                        {imageData[currentSlide].heading}
                                                    </h3>
                                                    <p className="text-md md:text-lg text-gray-200 bg-russian-violet bg-opacity-20 rounded-lg text-lilac">
                                                        {imageData[currentSlide].description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>

                                        <div className="absolute inset-y-0 left-0 flex items-center">
                                            <button onClick={handlePrev} className="bg-black bg-opacity-50 text-white p-2 rounded-r-lg focus:outline-none hover:bg-opacity-75 transition">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="absolute inset-y-0 right-0 flex items-center">
                                            <button onClick={handleNext} className="bg-black bg-opacity-50 text-white p-2 rounded-l-lg focus:outline-none hover:bg-opacity-75 transition">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-3xl text-center">
                                <p className="text-lg md:text-xl text-white leading-relaxed">
                                    We are a digital marketing agency specializing in web development, graphics design, digital marketing, and software development. Our mission is to help businesses grow and succeed in the digital world.
                                </p>
                                <Link href="/about">
                                    <h1 className="inline-block my-5 hover:text-lavender px-4 py-2 text-lg font-semibold text-white bg-black rounded-sm shadow-md hover:bg-gray-800 transition duration-300">
                                        Read more about us
                                    </h1>
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                                {['Web Development', 'Digital Marketing', 'Software Solutions'].map((service, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                                        <h4 className="text-xl font-semibold text-gray-800 mb-2">{service}</h4>
                                        <p className="text-gray-600">Cutting-edge solutions tailored for your business needs.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WhoAreWe;
