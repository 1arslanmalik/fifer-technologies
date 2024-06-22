"use client"

import React, { useState } from 'react'
import './Navbar.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { IoClose } from "react-icons/io5";
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineCustomerService, AiOutlineContacts } from "react-icons/ai";

const Navbar = () => {
    const route = usePathname();
    useEffect(() => {
        if (route === "/about") {
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
    const [currentSection, setCurrentSection] = useState("Home");
    const router = useRouter()
    const MenuItem = ({ icon, text, onClick }) => (
        <div
            className="flex items-center space-x-4 w-full py-3 px-4 rounded-lg hover:bg-ultra-violet transition-colors cursor-pointer"
            onClick={onClick}
        >
            {icon}
            <span className="text-lg font-medium">{text}</span>
        </div>
    );


    return (
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
                                <>
                                    <div>
                                        <span
                                            className={`${currentSection === "Home" ? "text-white border-b-2 py-1" : "null"}`}
                                            onClick={() => {
                                                setCurrentSection("Home")
                                                router.push("/")
                                            }}
                                        >
                                            Home
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            className={`${currentSection === "About Us" ? "text-white border-b-2 py-1" : "null"}`}
                                            onClick={() => {
                                                setCurrentSection("About Us")
                                                router.push("/about")
                                            }}
                                        >
                                            About Us
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            className={`${currentSection === "Services" ? "text-white border-b-2 py-1" : "null"}`}
                                            onClick={() => {
                                                setCurrentSection("Services")
                                                router.push("/services")
                                            }}
                                        >
                                            Services
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            className={`${currentSection === "Contact Us" ? "text-white border-b-2 py-1" : "null"}`}
                                            onClick={() => {
                                                setCurrentSection("Contact Us")
                                                router.push("/contact")
                                            }
                                            }
                                        >
                                            Contact Us
                                        </span>
                                    </div>
                                    <div className="fund-button bg-ultra-violet text-white font-bold font-md flex justify-center">
                                        <button>Get Started</button>
                                    </div>
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
                                router.push("/");
                                setMobileMenuOpened(false);
                            }}
                        />
                        <MenuItem
                            icon={<AiOutlineInfoCircle size={20} />}
                            text="About Us"
                            onClick={() => {
                                setCurrentSection("About Us");
                                router.push("/about");
                                setMobileMenuOpened(false);
                            }}
                        />
                        <MenuItem
                            icon={<AiOutlineCustomerService size={20} />}
                            text="Services"
                            onClick={() => {
                                setCurrentSection("Services");
                                router.push("/services");
                                setMobileMenuOpened(false);
                            }}
                        />
                        <MenuItem
                            icon={<AiOutlineContacts size={20} />}
                            text="Contact Us"
                            onClick={() => {
                                setCurrentSection("Contact Us");
                                router.push("/contact");
                                setMobileMenuOpened(false);
                            }}
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
