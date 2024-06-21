"use client"

import React, { useState } from 'react'
import './Navbar.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { Link } from 'react-scroll'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaArrowLeft, FaHome } from 'react-icons/fa'

const Navbar = () => {
    const route = usePathname();
    useEffect(() => {
        if (route === "/about") {
            setCurrentSection("About Us")
        }
        else {
            setCurrentSection("Home")
        }
    }, [route])
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const { scrollYProgress } = useScroll();
    const [currentSection, setCurrentSection] = useState("");
    const router = useRouter()

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (route !== "/about") {
            if (latest < 0.15) {
                setCurrentSection("Home");
            } else if (latest >= 0.15 && latest < 0.45) {
                setCurrentSection("About Us");
            } else if (latest >= 0.45 && latest < 0.75) {
                setCurrentSection("Services");
            }
            else if (latest >= 0.75 && latest < 0.95) {
                setCurrentSection("Testimonials");
            }
            else {
                setCurrentSection(null)
            }
        }
    });

    return (
        <div className={`n-wrapper sticky bg-russian-violet`}>
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
                            {
                                route !== "/about" ? (
                                    <>
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
                                        <div className="fund-button bg-ultra-violet text-white font-bold font-md flex justify-center">
                            <button>Get Started</button>
                        </div>
                                    </>
                                    
                                )
                                    :
                                    (
                                        <div className="flex items-center justify-center py-2 px-4 underline">

                                            <Link to="whoarewe" spy smooth className="underline flex items-center justify-center hover:bg-african-violet hover:bg-opacity-10 transition-colors duration-300">
                                            <FaArrowLeft className="mr-2 text-xl underline" />

                                                <span
                                                    className="text-white font-semibold text-lg"
                                                    onClick={() => { router.push("/") }}
                                                    >
                                                    Return Home
                                                </span>
                                                    {/* <FaHome className=" m-2 mb-3 text-xl" /> */}
                                            </Link>
                                        </div>
                                    )
                            }
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
