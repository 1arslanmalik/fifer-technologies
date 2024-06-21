// "use client"

// import React from 'react'
// import './Hero.css'
// import { HeroData } from '@/src/utils/data'
// import { motion } from 'framer-motion'
// import { FaRocket, FaChartLine, FaUsers } from 'react-icons/fa'

// const Hero = () => {
//     const variants = (delay) => ({
//         initial: { y: "18rem" },
//         animate: {
//             y: "0rem",
//             transition: {
//                 type: "spring",
//                 damping: 25,
//                 duration: 2.5,
//                 delay
//             }
//         }
//     })

//     const imgVariants = () => ({
//         initial: { y: "18rem" },
//         animate: {
//             y: "0rem",
//             transition: {
//                 type: "spring",
//                 duration: 2,
//                 stiffness: 30,
//             }
//         }
//     })

//     return (
//         <div className="bg-blacklite min-h-screen flex items-center">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex flex-col lg:flex-row items-center justify-between py-8 lg:py-16">
//                     {/* Left Side */}
//                     <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
//                         <div className="flex justify-center lg:justify-start">
//                             <div className="image-row mt-4 lg:mt-8">
//                                 {HeroData.slice(0, 3).map((person, i) => (
//                                     <div className='person-pill' key={i}>
//                                         <motion.div
//                                             initial="initial"
//                                             animate="animate"
//                                             variants={variants(i * 0.1)}
//                                             style={{ backgroundColor: person.bg }}
//                                             className="person-pill-bg">
//                                             <motion.img
//                                                 initial="initial"
//                                                 animate="animate"
//                                                 variants={imgVariants()}
//                                                 src={person.src}
//                                                 alt={person.src}
//                                                 className="w-full h-full object-cover" />
//                                         </motion.div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="flex justify-center lg:justify-start">
//                             <div className="image-row mx-2 mt-2 lg:mt-4">
//                                 {HeroData.slice(3, 6).map((person, i) => (
//                                     <div className='person-pill' key={i}>
//                                         <motion.div
//                                             initial="initial"
//                                             animate="animate"
//                                             variants={variants((i + 3) * 0.1)}
//                                             style={{ backgroundColor: person.bg }}
//                                             className="person-pill-bg">
//                                             <motion.img
//                                                 initial="initial"
//                                                 animate="animate"
//                                                 variants={imgVariants()}
//                                                 src={person.src}
//                                                 alt={person.src}
//                                                 className="w-full h-full object-cover" />
//                                         </motion.div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Side */}
//                     <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center flex-col items-center">
//                         <div className="flex flex-col text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold space-y-2 sm:space-y-3 lg:space-y-5 w-full lg:w-3/4 h-title mb-6 sm:mb-8">
//                             <span className="text-white">Leverage Your</span>
                            // <div className="uppercase text-white bg-ultra-violet pt-1 sm:pt-2 px-2 flex sm:text-start ms-center">
                            //     <span className="truncate">Digital Business</span>
                            // </div>
//                             <span className="text-white">Today!</span>
//                         </div>

//                         <div className="h-description text-white text-lg text-center sm:text-xl  md:text-2xl lg:text-3xl mb-6 sm:mb-8">
//                             Empower your business with cutting-edge digital solutions
//                         </div>

//                         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0 space-x-5">
//                             <div className="flex items-center">
//                                 <FaRocket className="text-ultra-violet text-2xl sm:text-3xl mr-2" />
//                                 <span className="text-white text-sm sm:text-base">Launch Fast</span>
//                             </div>
//                             <div className="flex items-center">
//                                 <FaChartLine className="text-ultra-violet text-2xl sm:text-3xl mr-2" />
//                                 <span className="text-white text-sm sm:text-base">Grow Quickly</span>
//                             </div>
//                             <div className="flex items-center">
//                                 <FaUsers className="text-ultra-violet text-2xl sm:text-3xl mr-2" />
//                                 <span className="text-white text-sm sm:text-base">Scale Easily</span>
//                             </div>
//                         </div>

//                         <div className="fund-button w-full text-white font-md flex justify-center p-0 m-0">
//                             <button className="uppercase bg-ultra-violet w-full sm:w-auto text-sm sm:text-base font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 ease-in-out">
//                                 Get Started With Us
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Hero


"use client"

import React from 'react'
import './Hero.css'
import { HeroData } from '@/src/utils/data'
import { motion } from 'framer-motion'
import { FaRocket, FaChartLine, FaUsers } from 'react-icons/fa'

const Hero = () => {
    const variants = (delay) => ({
        initial: { y: "18rem" },
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
        initial: { y: "18rem" },
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
        <div className="bg-blacklite flex items-center">
            <div className="container mx-auto px-4 sm:px-6 py-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between py-8 lg:py-16">
                    {/* Left Side */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <div className="flex justify-center lg:justify-start">
                            <div className="image-row mt-4 lg:mt-8">
                                {HeroData.slice(0, 3).map((person, i) => (
                                    <div className='person-pill' key={i}>
                                        <motion.div
                                            initial="initial"
                                            animate="animate"
                                            variants={variants(i * 0.1)}
                                            style={{ backgroundColor: person.bg }}
                                            className="person-pill-bg">
                                            <motion.img
                                                initial="initial"
                                                animate="animate"
                                                variants={imgVariants()}
                                                src={person.src}
                                                alt={person.src}
                                                className="w-full h-full object-cover" />
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <div className="image-row mx-2 mt-2 lg:mt-4">
                                {HeroData.slice(3, 6).map((person, i) => (
                                    <div className='person-pill' key={i}>
                                        <motion.div
                                            initial="initial"
                                            animate="animate"
                                            variants={variants((i + 3) * 0.1)}
                                            style={{ backgroundColor: person.bg }}
                                            className="person-pill-bg">
                                            <motion.img
                                                initial="initial"
                                                animate="animate"
                                                variants={imgVariants()}
                                                src={person.src}
                                                alt={person.src}
                                                className="w-full h-full object-cover" />
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center lg:items-start">
                        <div className="flex flex-col text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold space-y-2 sm:space-y-3 lg:space-y-5 w-full lg:w-3/4 h-title mb-6 sm:mb-8 text-center lg:text-left">
                            <span className="text-white">Leverage Your</span>
                            <div className="uppercase text-white bg-ultra-violet pt-1 sm:pt-2 px-2 flex sm:text-start ms-center">
                                <span className="pt-1">Digital Business</span>
                            </div>
                            <span className="text-white">Today!</span>
                        </div>

                        <div className="h-description text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 text-center lg:text-left">
                            Empower your business with cutting-edge digital solutions
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center mb-8 sm:mb-10 space-y-4 sm:space-y-0 sm:space-x-6 w-full">
                            <div className="flex items-center">
                                <FaRocket className="text-ultra-violet text-2xl sm:text-3xl mr-2" />
                                <span className="text-white text-sm sm:text-base">Launch Fast</span>
                            </div>
                            <div className="flex items-center">
                                <FaChartLine className="text-ultra-violet text-2xl sm:text-3xl mr-2" />
                                <span className="text-white text-sm sm:text-base">Grow Quickly</span>
                            </div>
                            <div className="flex items-center">
                                <FaUsers className="text-ultra-violet text-2xl sm:text-3xl mr-2" />
                                <span className="text-white text-sm sm:text-base">Scale Easily</span>
                            </div>
                        </div>

                        <div className="fund-button w-full sm:w-auto text-white font-md flex justify-start items-start">
                            <button className="uppercase bg-ultra-violet w-full sm:w-auto text-sm sm:text-base font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 ease-in-out">
                                Get Started With Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero