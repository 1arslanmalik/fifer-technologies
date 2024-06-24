"use client"

import React, { lazy, useState } from 'react'
import './Navbar.css'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react'
import Link from 'next/link';
import {Link as ReactLink} from "react-scroll"


const BiMenuAltRight = lazy(() => import('react-icons/bi').then(module => ({ default: module.BiMenuAltRight })))
const RxCross2 = lazy(() => import('react-icons/rx').then(module => ({ default: module.RxCross2 })))
const FaLocationDot = lazy(() => import('react-icons/fa6').then(module => ({ default: module.FaLocationDot })))
const MdEmail = lazy(() => import('react-icons/md').then(module => ({ default: module.MdEmail })))
const IoClose = lazy(() => import('react-icons/io5').then(module => ({ default: module.IoClose })))
const AiOutlineHome = lazy(() => import('react-icons/ai').then(module => ({ default: module.AiOutlineHome })))
const AiOutlineInfoCircle = lazy(() => import('react-icons/ai').then(module => ({ default: module.AiOutlineInfoCircle })))
const AiOutlineCustomerService = lazy(() => import('react-icons/ai').then(module => ({ default: module.AiOutlineCustomerService })))
const AiOutlineContacts = lazy(() => import('react-icons/ai').then(module => ({ default: module.AiOutlineContacts })))


const Navbar = () => {
    const route = usePathname();
    useEffect(() => {
        if (route === "/") {
            setCurrentSection("Home")
        }
        else if (route === "/about") {
            setCurrentSection("About Us")
        }
        else if (route === "/contact") {
            setCurrentSection("Contact Us")
        }
        else if (route === "/services") {
            setCurrentSection("Services")
        }
        else {
            setCurrentSection("Home")
        }
    }, [route])

    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const [currentSection, setCurrentSection] = useState("");

    const MenuItem = ({ icon, text, href, onClick }) => (
        <div
            className="flex items-center space-x-4 w-full py-3 px-4 rounded-lg hover:bg-ultra-violet transition-colors cursor-pointer"
            onClick={onClick}
        >
            {icon}
            <Link href={href} className="text-lg font-medium">{text}</Link>
        </div>
    );


    return (
        // locationa and email

        <div className={`sticky bg-russian-violet`}>
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
            <div className="uppercase px-5 py-1">
                <div className="n-container w-full">
                    {/* left side */}
                    <div className="n-logo w-full">
                        <span className="text-3xl text-white">FIFER TECHNOLOGIES</span>
                    </div>

                    {/* right side */}
                    <div className="w-full text-sm">
                        <div className="flex justify-end items-center space-x-12 w-full">
                            {
                                <>
                                    <button className='uppercase hover:bg-lavender hover:bg-opacity-20 px-2 rounded-sm py-1'>
                                        <Link
                                            href={"/"}
                                            className={`${currentSection === "Home" ? "text-white border-b-2 py-1 text-sm" : "null"}`}
                                            onClick={() => {
                                                setCurrentSection("Home")
                                            }}
                                        >
                                            Home
                                        </Link>
                                    </button>
                                    <button className='uppercase hover:bg-lavender hover:bg-opacity-20 px-2 rounded-sm py-1'>
                                        <Link
                                            href={"/about"}
                                            className={`${currentSection === "About Us" ? "text-white border-b-2 py-1" : "null"}`}
                                            onClick={() => {
                                                setCurrentSection("About Us")
                                            }}
                                        >
                                            About Us
                                        </Link>
                                    </button>
                                    <button className='uppercase hover:bg-lavender hover:bg-opacity-20 px-2 rounded-sm py-1'>
                                        <Link
                                            href={"/services"}
                                            className={`${currentSection === "Services" ? "text-white border-b-2 py-1" : "null"}`}
                                            onClick={() => {
                                                setCurrentSection("Services")
                                            }}
                                        >
                                            Services
                                        </Link>
                                    </button>
                                    <button className='uppercase hover:bg-lavender hover:bg-opacity-20 px-2 rounded-sm py-1'>
                                        <Link
                                            href={"/contact"}
                                            className={`${currentSection === "Contact Us" ? "text-white border-b-2 py-1" : "null"}`}
                                            onClick={() => {
                                                setCurrentSection("Contact Us")
                                            }
                                            }
                                        >
                                            Contact Us
                                        </Link>
                                    </button>
                                    <Link href="/contact" className="fund-button bg-ultra-violet text-white font-bold font-md flex justify-center hover:shadow-2xl hover:scale-110 transition duration-300 ease-in-out">
                                        <button className='hover:scale-1.5'>Get Started</button>
                                    </Link>
                                </>
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

                {/* Mobile menu */}
                <div
                    className={`
                    fixed top-0 right-0 h-full w-72 bg-russian-violet text-white transform transition-transform duration-300 ease-in-out ${mobileMenuOpened ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-start justify-start pt-16 px-6 shadow-lg z-50`}
                >
                    <button
                        onClick={() => setMobileMenuOpened(false)}
                        className="absolute top-4 right-4 text-white hover:text-lavender transition-colors"
                    >
                        <IoClose size={24} />
                    </button>

                    <div className="w-full space-y-6">
                        <MenuItem
                            icon={<AiOutlineHome size={20} />}
                            text="Home"
                            onClick={() => {
                                setCurrentSection("Home");
                                setMobileMenuOpened(false);
                            }}
                            href={"/"}
                        />
                        <MenuItem
                            icon={<AiOutlineInfoCircle size={20} />}
                            text="About Us"
                            onClick={() => {
                                setCurrentSection("About Us");
                                setMobileMenuOpened(false);
                            }
                            }
                            href={"/about"}
                        />
                        <MenuItem
                            icon={<AiOutlineCustomerService size={20} />}
                            text="Services"
                            onClick={() => {
                                setCurrentSection("Services");
                                setMobileMenuOpened(false);
                            }}
                            href={"/services"}
                        />
                        <MenuItem
                            icon={<AiOutlineContacts size={20} />}
                            text="Contact Us"
                            onClick={() => {
                                setCurrentSection("Contact Us");
                                setMobileMenuOpened(false);
                            }}
                            href={"/contact"}
                        />
                    </div>
                </div>

                {/* Backdrop */}
                {mobileMenuOpened && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setMobileMenuOpened(false)}
                    ></div>
                )}
            </div>
        </div>
    )
}

export default Navbar
