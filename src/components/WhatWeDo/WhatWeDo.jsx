'use client'

import React from 'react'
import './WhatWeDo.css'
import { features } from '@/src/utils/data'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation'
import { FaCode } from "react-icons/fa";
import { BsFillPhoneFill } from "react-icons/bs";

const WhatWeDo = () => {
    return (
        <div className="bg-platinum services">
            <div className="container">
                <div className="wwd-container space-y-5">
                    {/* head of section */}
                    <div className="flex flex-col items-center justify-start">

                        <motion.span
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={tagVariants}
                            className=''
                        >
                            <span className="rounded-sm flex items-center m-0 pb-0 bg-ultra-violet text-white sm:text-5xl text-2xl p-2 uppercase font-bold">
                                What we do
                            </span>
                        </motion.span>

                        <motion.span
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={titleVariants}
                            className='title text-xs gap-0'
                        >
                            <p className="text-md leading-normal py-5">From stunning websites to impactful digital marketing, we craft solutions that elevate your brand.</p>
                        </motion.span>
                    </div>

                    {/* three blocks */}
                    <div className="wwd-blocks flex justify-center w-full space-x-3">
                        {/* first block */}
                        <motion.div
                            variants={desVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            className="wwd-block bg-russian-violet flex"
                        >

                            <div
                                className="flex flex-row items-center justify-center"
                                variants={titleVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                            >
                                <FaCode
                                    className="h-20 w-20"
                                />
                            </div>

                            <div className="flex flex-col justify-start p-2 w-full py-5">
                                <motion.span
                                    variants={titleVariants}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    className="flex justify-start"
                                >
                                    <h1 className="text-platinum uppercase font-bold mt-1 leading-none text-2xl">Web Development</h1>
                                </motion.span>
                                <motion.span
                                    variants={desVariants}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    className="text-blacklite mt-2 flex justify-start"
                                >
                                    <h1 className="text-african-violet flex items-start leading-none">
                                        Fund recurring growth expenses e.g. customer acquisition, inventory
                                    </h1>
                                </motion.span>
                            </div>
                        </motion.div>



                        {/* second block */}

                        <motion.div
                            variants={desVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            className="wwd-block bg-russian-violet flex"
                        >

                            <div
                                className="flex flex-row items-center justify-center"
                                variants={titleVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                            >
                                <FaCode
                                    className="h-20 w-20"
                                />
                            </div>

                            <div className="flex flex-col justify-start p-2 w-full py-5">
                                <motion.span
                                    variants={titleVariants}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    className="flex justify-start"
                                >
                                    <h1 className="text-platinum uppercase font-bold mt-1 leading-none text-2xl">Web Development</h1>
                                </motion.span>
                                <motion.span
                                    variants={desVariants}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    className="text-blacklite mt-2 flex justify-start"
                                >
                                    <h1 className="text-african-violet flex items-start leading-none">
                                        Fund recurring growth expenses e.g. customer acquisition, inventory
                                    </h1>
                                </motion.span>
                            </div>
                        </motion.div>

                        {/* third block */}
                        <motion.div
                            variants={desVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            className="wwd-block bg-russian-violet flex"
                        >

                            <div
                                className="flex flex-row items-center justify-center"
                                variants={titleVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                            >
                                <FaCode
                                    className="h-20 w-20"
                                />
                            </div>

                            <div className="flex flex-col justify-start p-2 w-full py-5">
                                <motion.span
                                    variants={titleVariants}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    className="flex justify-start"
                                >
                                    <h1 className="text-platinum uppercase font-bold mt-1 leading-none text-2xl">Web Development</h1>
                                </motion.span>
                                <motion.span
                                    variants={desVariants}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    className="text-blacklite mt-2 flex justify-start"
                                >
                                    <h1 className="text-african-violet flex items-start leading-none">
                                        Fund recurring growth expenses e.g. customer acquisition, inventory
                                    </h1>
                                </motion.span>
                            </div>
                        </motion.div>

                        {/* <div className="wwd-block">
                            <motion.span
                                variants={titleVariants}
                                initial="offscreen"
                                whileInView={"onscreen"}
                                className='sec-title'>
                                Blue Seed
                            </motion.span>
                            <motion.span
                                variants={desVariants}
                                initial="offscreen"
                                whileInView={"onscreen"}
                                className='text'>
                                Fund one-offs to scale e.g. product, hiring.
                            </motion.span>
                            <div className="block-features">
                                {
                                    features.slice(3, 6).map((feature, i) => (
                                        <motion.div
                                            initial="offscreen"
                                            whileInView={"onscreen"}
                                            variants={containerVariants((i + 1) * 0.1)}
                                            className='block-feature'
                                            key={i}>
                                            <Image src={feature.icon} alt='feature' width={60} height={60} />
                                            <span>{feature.title}</span>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div> */}
                    </div>

                    {/* support block */}
                    <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={containerVariants(0.3)}
                        className="wwd-support">
                        {/* left side */}
                        <div>
                            <span className="sec-title">
                                Blue Growth Support
                            </span>
                            <span className="des">
                                Data Insights and full stack expertise to supercharge growth
                            </span>
                        </div>

                        {/* right side */}
                        <div>
                            <span className='text'>
                                Actionable data insights by connecting revenue, marketing and social media platforms
                            </span>
                            <span className='text'>
                                On demand execution expertise at cost or revenue share across proposition design
                                engineering marketing analytics, partnerships, brand, intellectual property, market expansion,
                                talent management.
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo