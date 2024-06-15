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
        <div className={`n-wrapper ${navStyle}`}>
            {/* <h1>asasassa</h1> */}
            <div className="flex justify-evenly bg-black">
                    <div className="text-white h-full flex py-1 items-center w-screen justify-evenly">
                        <div className="flex">
                            <div className="mx-5 flex items-center">
                                <FaLocationDot />
                            </div>
                            <h1>1129 Main Street, Vancouver BC V6A4B6</h1>
                        </div>
                        <div className="flex">
                            <div className="mx-5 flex items-center">
                                <MdEmail />
                            </div>
                            <h1>johndoe@gmail.com</h1>
                        </div>
                    </div>
                    {/* <div className="bg-black text-white h-full flex py-1 items-center w-full">

                    </div> */}
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
                                <span>Home</span>
                            </Link>
                            <Link to="hiw-wrapper" spy smooth offset={100} >
                                <span>How it works</span>
                            </Link>
                            <Link to="wwi-wrapper" spy smooth >
                                <span>Who we invest in</span>
                            </Link>
                            <Link to="t-wrapper" spy smooth offset={100} >
                                <span>Testimonials</span>
                            </Link>
                        </div>
                        <div className="fund-button">
                            Get Funded
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