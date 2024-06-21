import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-gray-300 py-10 bg-russian-violet">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold text-white mb-4">Fifer Technologies</h2>
                        <p className="mb-6">Transforming ideas into digital realities.</p>
                        <div className="flex space-x-4">
                            <FaFacebookF className="text-xl hover:text-blue-400 transition-colors cursor-pointer" />
                            <FaTwitter className="text-xl hover:text-blue-400 transition-colors cursor-pointer" />
                            <FaLinkedinIn className="text-xl hover:text-blue-400 transition-colors cursor-pointer" />
                            <FaInstagram className="text-xl hover:text-pink-400 transition-colors cursor-pointer" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <ul>
                                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
                                {/* <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li> */}
                            </ul>
                            <ul>
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                {/* <li><a href="#" className="hover:text-white transition-colors">Blog</a></li> */}
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <FaMapMarkerAlt className="mr-2" />
                                <span>1129 Main Street, Vancouver BC V6A4B6</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-2" />
                                <a href="mailto:info@innovatetech.com" className="hover:text-white transition-colors">johndoe@gmail.com</a>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="mr-2" />
                                <span>(987) 654-3210</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} TechSolutions. All rights reserved.</p>
                    <div className="mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors mr-4">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;