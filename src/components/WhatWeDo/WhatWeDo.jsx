'use client'

import React from 'react'
import './WhatWeDo.css'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '../../utils/animation'
import { FaCode, FaMobileAlt } from "react-icons/fa";
import { BsFillMegaphoneFill } from "react-icons/bs";

const WhatWeDo = () => {
    return (
        <div className="wwd-wrapper bg-platinum">
            <div className="container mx-auto px-4 services">
                <div className="wwd-container">
                    {/* Head of section */}
                    <div className="flex flex-col items-center justify-start text-center mb-12">
                        <motion.h1
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={tagVariants}
                            className='rounded-sm bg-russian-violet text-white text-3xl sm:text-6xl px-4 pt-2 font-bold'
                        >
                            What We Do
                        </motion.h1>

                        <motion.span
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={titleVariants}
                            className='title text-md sm:text-3xl mt-6'
                        >
                            <p className="text-gray-700 leading-relaxed max-w-2xl">
                                Our brand specializes in -
                            </p>
                        </motion.span>
                    </div>

                    <div className="wwd-content flex flex-col lg:flex-row items-center lg:items-start gap-8">
                        {/* Left side - Service blocks */}
                        <div className="wwd-left flex-1">
                            {/* <div className="wwd-blocks grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8"> */}
                            <div className="wwd-blocks flex flex-col sm:grid-cols-2 lg:grid-cols-1 gap-8">
                                <ServiceBlock
                                    icon={<FaCode className="h-8 w-8" />}
                                    title="Web Development"
                                    description="Create powerful, responsive websites that drive results."
                                />
                                <ServiceBlock
                                    icon={<FaMobileAlt className="h-8 w-8" />}
                                    title="Mobile Development"
                                    description="Build engaging mobile experiences for your audience."
                                />
                                <ServiceBlock
                                    icon={<BsFillMegaphoneFill className="h-8 w-8" />}
                                    title="Digital Marketing"
                                    description="Amplify your online presence with strategic campaigns."
                                />
                            </div>
                        </div>

                        {/* Right side - Image */}
                        <div className="wwd-right flex-1">
                            <motion.img 
                                variants={containerVariants(0.5)}
                                initial="offscreen"
                                whileInView={"onscreen"}
                                src="persons.png"
                                alt="What We Do"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        
                    </div>
                    <motion.span
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={titleVariants}
                            className='title text-sm sm:text-2xl mt-6'
                        >
                            <p className="text-gray-700 leading-relaxed max-w-2xl">
                                From stunning websites to impactful digital marketing, we craft solutions that elevate your brand.
                            </p>
                        </motion.span>
                </div>
            </div>
        </div>
    )
}

const ServiceBlock = ({ icon, title, description }) => (
    <motion.div
        variants={desVariants}
        initial="offscreen"
        whileInView="onscreen"
        className="wwd-block bg-russian-violet text-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg"
    >
        <div className="flex items-center mb-4">
            <div className="text-white mr-4 bg-ultra-violet p-3 rounded-full">
                {icon}
            </div>
        </div>
        <div className="flex flex-col">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-african-violet">{description}</p>
        </div>
    </motion.div>
)

export default WhatWeDo