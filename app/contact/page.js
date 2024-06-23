"use client"

import "../page.css"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaSpinner } from 'react-icons/fa';
import { IoMdHome } from 'react-icons/io';
import { RiSignalWifiErrorFill } from 'react-icons/ri';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isUploading, setIsUploading] = useState(false);
  const [uploadClicked, setUploadClicked] = useState(false);
  const [tooManyRequests, setTooManyRequests] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      const data = await fetch("/api", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        )
      }
      )
      if (data.status !== 200) {
        setTooManyRequests(true)
      }
      setUploadClicked(true);

    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-russian-violet via-ultra-violet to-african-violet min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center mb-12"
        >
          Get in Touch
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-12 justify-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 max-w-md"
          >
            <h2 className="text-3xl font-bold text-lilac mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center text-platinum">
                <FaEnvelope className="text-2xl mr-4" />
                <span>info@fifertechnologies.com</span>
              </div>
              <div className="flex items-center text-platinum">
                <FaPhone className="text-2xl mr-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-platinum">
                <FaMapMarkerAlt className="text-2xl mr-4" />
                <span>1129 Main Street, Vancouver BC V6A4B6</span>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-lilac mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { name: 'facebook', icon: FaFacebook },
                  { name: 'twitter', icon: FaTwitter },
                  { name: 'linkedin', icon: FaLinkedin },
                  { name: 'instagram', icon: FaInstagram }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={`https://${social.name}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-blacklite bg-opacity-70 p-3 rounded-full text-lavender hover:text-lilac transition-colors duration-300"
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:w-1/2 max-w-md"
          >
            {!uploadClicked ? (
              <form onSubmit={handleSubmit} className="bg-blacklite bg-opacity-70 rounded-xl p-8 shadow-2xl">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-lilac mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-russian-violet bg-opacity-50 rounded-lg py-2 px-4 text-platinum focus:outline-none focus:ring-2 focus:ring-lilac"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-lilac mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-russian-violet bg-opacity-50 rounded-lg py-2 px-4 text-platinum focus:outline-none focus:ring-2 focus:ring-lilac"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-lilac mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-russian-violet bg-opacity-50 rounded-lg py-2 px-4 text-platinum focus:outline-none focus:ring-2 focus:ring-lilac"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isUploading}
                  className={`bg-gradient-to-r from-lilac to-lavender text-russian-violet font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isUploading ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              !tooManyRequests ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-blacklite bg-opacity-70 rounded-xl p-8 shadow-2xl text-center"
                >
                  <FaEnvelope className="text-5xl text-lilac mb-4 mx-auto" />
                  <h2 className="text-2xl font-bold text-lilac mb-4">Thank You!</h2>
                  <p className="text-platinum">Your message has been sent successfully. We&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-blacklite to-purple-900 bg-opacity-70 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl text-center max-w-lg mx-auto w-full overflow-hidden relative"
                >
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <RiSignalWifiErrorFill className="text-red-500 text-6xl sm:text-7xl md:text-8xl" />
                  </motion.div>

                  <motion.h1
                    className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 mt-12 text-white font-bold"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Too Many Requests
                  </motion.h1>

                  <motion.p
                    className="text-lg sm:text-xl text-gray-300 mb-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Our servers are taking a quick breather. Please try again later.
                  </motion.p>

                  <motion.button
                    className="bg-lavender text-russian-violet rounded-full px-6 py-3 text-lg sm:text-xl flex items-center justify-center mx-auto hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IoMdHome className="mr-2" />
                    Return Home
                  </motion.button>

                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;