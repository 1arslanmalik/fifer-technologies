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
    const locations = ["Home", "Services", "Testimonials"]
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const [navStyle, setNavStyle] = useState("");
    const { scrollYProgress } = useScroll();
    const [currentSection, setCurrentSection] = useState("Home");


    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.15) {
            setCurrentSection("Home");
        } else if (latest >= 0.15 && latest < 0.45) {
            setCurrentSection("About Us");
        } else if(latest >= 0.45 && latest < 0.75){
            setCurrentSection("Services");
        }
        else if(latest >= 0.75 && latest < 0.95){
            setCurrentSection("Testimonials");
        }
        else{
            setCurrentSection(null)
        }
    });

    return (
        <div className={`n-wrapper ${navStyle} sticky bg-russian-violet`}>
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
                        <h1 className="text-white text-xs sm:text-sm md:text-base pr-5">johndoe@gmail.com</h1>
                    </div>
                </div>
            </div>
            {/* desktop version */}
            <div className="container">
                <div className="n-container">
                    {/* left side */}
                    <div className="n-logo">
                        <span className="text-3xl text-white">FIFER TECHNOLOGIES</span>
                    </div>

                    {/* right side */}
                    <div className="n-right">
                        <div className="n-menu">
                            <Link to="home" spy={true} smooth={true} >
                                <span
                                    className={`${currentSection === "Home" ? "text-white border-b-2 py-1" : "null"}`}
                                    onClick={() => { setCurrentSection("Home") }}
                                >
                                    Home
                                </span>
                            </Link>
                            <Link to="whoarewe" spy smooth >
                                <span
                                    className={`${currentSection === "About Us" ? "text-white border-b-2 py-1" : "null"}`}
                                    onClick={() => { setCurrentSection("About Us") }}
                                >
                                    About Us
                                </span>
                            </Link>
                            <Link to="services" spy smooth >
                                <span
                                    className={`${currentSection === "Services" ? "text-white border-b-2 py-1" : "null"}`}
                                    onClick={() => { setCurrentSection("Services") }}
                                >
                                    Services
                                </span>
                                {/* dropdown here */}
                            </Link>
                            <Link to="t-wrapper" spy smooth offset={100} >
                                <span
                                    className={`${currentSection === "Testimonials" ? "text-white border-b-2 py-1" : "null"}`}
                                    onClick={() => { setCurrentSection("Testimonials") }}
                                >
                                    Testimonials
                                </span>
                            </Link>
                            <Link to="" spy smooth offset={100} >
                                <span
                                    className={`${currentSection === "Contact Us" ? "text-white border-b-2 py-1" : "null"}`}
                                    onClick={() => { setCurrentSection("Contact Us") }}
                                >
                                    Contact Us
                                </span>
                            </Link>
                        </div>
                        <div className="fund-button bg-ultra-violet text-white font-bold font-md flex justify-center">
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile version */}
            <div className="nm-container">
                {/* logo */}
                <span className="text-white">FIFER TECHNOLOGIES</span>

                {/* menu icon */}
                {
                    !mobileMenuOpened ?
                        <BiMenuAltRight
                            color='white'
                            size={30}
                            onClick={() => setMobileMenuOpened(true)}
                        /> :
                        <div className="bg-african-violet p-2 rounded-full">
                            <RxCross2
                                size={30}
                                onClick={() => setMobileMenuOpened(false)}
                                color='white'
                            />
                        </div>
                }

                {/* mobile menu */}
                <div className="nm-menu bg-african-violet w-1/2 sm:w-1/3 text-black bg-opacity-100"
                    style={{ transform: mobileMenuOpened ? "translateX(0%)" : null }}
                >
                    <span>Home</span>
                    <span>About Us</span>
                    <span>Services</span>
                    <span>Testimonials</span>
                    <span>Contact Us</span>
                </div>

            </div>
        </div>
    )
}

export default Navbar
