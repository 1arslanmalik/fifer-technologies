"use client"

import "../page.css"
import { useState } from 'react';
import { FaRocket, FaChartLine, FaCogs, FaMobile, FaPalette, FaLaptopCode } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    { icon: FaChartLine, title: 'Digital Marketing', description: 'Strategies that amplify your brand and drive measurable results.', image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { icon: FaMobile, title: 'App Development', description: 'iOS and Android apps for various industries and purposes.', image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { icon: FaCogs, title: 'Software Development', description: 'Custom software that streamlines processes and boosts efficiency.', image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { icon: FaLaptopCode, title: 'Web Development', description: 'Responsive websites using HTML, CSS, JavaScript, and PHP.', image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { icon: FaPalette, title: 'Graphic Designing', description: 'High-quality design and visual content that conveys your message.', image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { icon: FaRocket, title: 'Website Design', description: `Elegant, functional websites to improve your company's success.`, image: `https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1` }
  ];

  return (
    <section className="bg-gradient-to-br from-russian-violet via-ultra-violet to-african-violet min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center mb-12"
        >
          Our Services
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blacklite bg-opacity-70 rounded-xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <service.icon className="text-lilac text-4xl mb-4" />
              <h3 className="text-2xl font-bold text-platinum mb-2">{service.title}</h3>
              <p className="text-lavender">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeService && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
              onClick={() => setActiveService(null)}
            >
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center py-5"
        >
          <p className="text-platinum text-2xl mb-6">Ready to transform your digital presence?</p>
          <Link
            href={"/contact"}
            className="bg-gradient-to-r from-lilac to-lavender text-russian-violet font-bold px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Let&apos;s Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;