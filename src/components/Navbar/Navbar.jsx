"use client"

import React, { useState } from 'react'
import './Navbar.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link } from 'react-scroll'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
    const [navStyle, setNavStyle] = useState("");
    const { scrollYProgress } = useScroll();
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.2) {
            setNavStyle("sticky");
        } else {
            setNavStyle("")
        }
    })

    return (
        <div className={`n-wrapper ${navStyle} bg-russian-violet`}>
            {/* <h1>asasassa</h1> */}
            <div className="flex flex-col md:flex-row justify-evenly bg-ultra-violet bg-opacity-20">
                <div className="h-full flex items-center w-full md:w-screen justify-evenly py-2">
                    <div className="flex md:flex-row items-center md:mx-4">
                        <div className="mx-3 flex items-center">
                            <FaLocationDot />
                        </div>
                        <h1 className="text-white text-xs sm:text-sm md:text-base">1129 Main Street, Vancouver BC V6A4B6</h1>
                    </div>
                    <div className="flex md:flex-row items-center md:mx-4">
                        <div className="mx-3 flex items-center">
                            <MdEmail />
                        </div>
                        <h1 className="text-white text-xs sm:text-sm md:text-base">johndoe@gmail.com</h1>
                    </div>
                </div>
            </div>
            {/* desktop version */}
            <div className="container">
                <div className="n-container">
                    {/* left side */}
                    <div className="n-logo">
                        <span className="text-3xl">FIFER TECHNOLOGIES</span>
                    </div>

                    {/* right side */}
                    <div className="n-right">
                        <div className="n-menu">
                            <Link to="wwd-wrapper" spy={true} smooth={true} >
                                <span className="">Home</span>
                            </Link>
                            <Link to="hiw-wrapper" spy smooth offset={100} >
                                <span>About Us</span>
                            </Link>
                            <Link to="wwi-wrapper" spy smooth >
                                <span>Services</span>
                                {/* dropdown here */}
                            </Link>
                            <Link to="t-wrapper" spy smooth offset={100} >
                                <span>Testimonials</span>
                            </Link>
                        </div>
                        <div className="fund-button bg-african-violet text-black font-bold font-md flex justify-center">
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile version */}
            <div className="nm-container">
                {/* logo */}
                <span>FIFER TECHNOLOGIES</span>

                {/* menu icon */}
                {
                    !mobileMenuOpened ?
                        <BiMenuAltRight
                            size={30}
                            onClick={() => setMobileMenuOpened(true)}
                        /> :
                        <RxCross2
                            size={30}
                            onClick={() => setMobileMenuOpened(false)}
                        />
                }

                {/* mobile menu */}
                <div className="nm-menu"
                    style={{ transform: mobileMenuOpened && "translateX(0%)" }}
                >
                    <span>What we do</span>
                    <span>How it works</span>
                    <span>Who we invest in</span>
                    <span>Testimonials</span>
                    <div className="m-funded-button">
                        Get Funded
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar