"use client"

import "../page.css"
import { useState } from 'react';
import Image from 'next/image';
import { FaRocket, FaChartLine, FaCogs, FaLightbulb, FaUsers, FaCode } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: FaLightbulb, title: 'Our Vision' },
    { icon: FaUsers, title: 'Our Team' },
    { icon: FaCode, title: 'Our Approach' }
  ];

  const tabContent = [
    {
      title: 'Pioneering Digital Excellence',
      content: 'We envision a world where every business thrives in the digital realm. Our mission is to be the catalyst that transforms your digital presence into a powerful force for growth and innovation.',
      image: 'https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    },
    {
      title: 'Diverse Talents, Unified Purpose',
      content: 'Our team is a melting pot of creative minds, tech wizards, and strategic thinkers. Together, we bring a wealth of experience and fresh perspectives to every project we undertake.',
      image: 'https://images.pexels.com/photos/3183146/pexels-photo-3183146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Agile, Adaptive, Always Ahead',
      content: `We don't just keep up with the digital trends – we set them. Our approach combines cutting-edge technology with creative problem-solving to deliver solutions that are not just current, but future-proof.`,
      image: 'https://images.pexels.com/photos/3184352/pexels-photo-3184352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const services = [
    { icon: FaRocket, title: 'Web Development', description: 'Crafting responsive, intuitive websites that captivate and convert.' },
    { icon: FaChartLine, title: 'Digital Marketing', description: 'Strategies that amplify your brand and drive measurable results.' },
    { icon: FaCogs, title: 'Software Solutions', description: 'Custom software that streamlines processes and boosts efficiency.' }
  ];

  return (
    <section className="bg-gradient-to-br flex flex-col from-russian-violet via-ultra-violet py-12 to-african-violet space-y-10">

      {/* <div className="self-center flex items-center bg-blacklite bg-opacity-70 shadow-2xl overflow-hidden backdrop-filter backdrop-blur-lg">

      <h1 
          className="text-4xl w-screen sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text text-lavender text-center py-10"
        >
          ABOUT US
        </h1>
      </div> */}
      <div className="container mx-auto px-4">

        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl py-3 sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-platinum text-white text-center mb-10 sm:mb-16 md:mb-20"
        >
          Redefining Digital Horizons
        </motion.h2>
        
        <div className="bg-blacklite bg-opacity-70 rounded-3xl shadow-2xl overflow-hidden backdrop-filter backdrop-blur-lg">
          <div className="flex flex-col sm:flex-row border-b border-ultra-violet">
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-3 px-4 sm:py-4 sm:px-6 text-lavender hover:text-platinum transition-colors duration-300 ${activeTab === index ? 'bg-ultra-violet' : ''}`}
              >
                <tab.icon className="inline-block mr-2" />
                <span className="hidden sm:inline">{tab.title}</span>
              </motion.button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 flex flex-col md:flex-row items-center"
            >
              <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-lilac mb-4">{tabContent[activeTab].title}</h3>
                <p className="text-platinum text-base sm:text-lg">{tabContent[activeTab].content}</p>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src={tabContent[activeTab].image}
                  alt={tabContent[activeTab].title}
                  width={500}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="bg-russian-violet bg-opacity-70 rounded-2xl p-6 sm:p-8 text-center transition duration-300 ease-in-out hover:shadow-2xl transform hover:-translate-y-2"
            >
              <service.icon className="text-lavender text-4xl sm:text-5xl mb-4 sm:mb-6 mx-auto" />
              <h4 className="font-bold text-lilac text-xl sm:text-2xl mb-3 sm:mb-4">{service.title}</h4>
              <p className="text-platinum text-sm sm:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center py-10"
        >
          <p className="text-white text-2xl sm:text-2xl mb-6 sm:mb-8">Ready to elevate your digital presence?</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r py-3 leading-10 from-lilac to-lavender text-russian-violet font-bold px-8 sm:py-4 sm:px-10 rounded-full text-base sm:text-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
          >
            Get Started With Us Today :D
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;