"use client"

import "../page.css"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-gradient-to-br from-russian-violet via-ultra-violet to-african-violet min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center mb-12"
        >
          Get in Touch
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2"
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
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <motion.a
                    key={social}
                    href={`https://${social}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-blacklite bg-opacity-70 p-3 rounded-full text-lavender hover:text-lilac transition-colors duration-300"
                  >
                    <FaPaperPlane className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:w-1/2"
          >
            
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
                className="bg-gradient-to-r from-lilac to-lavender text-russian-violet font-bold py-3 px-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;