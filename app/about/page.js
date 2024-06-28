"use client"

import "../page.css"
import { useState } from 'react';
import Image from 'next/image';
import { FaRocket, FaChartLine, FaCogs, FaLightbulb, FaUsers, FaCode, FaUndo, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from "next/navigation";
import Link from "next/link";

const AboutUs = () => {
  const router = useRouter()
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


        <div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap sm:justify-center lg:justify-start gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-russian-violet bg-opacity-70 rounded-2xl p-6 text-center transition duration-300 ease-in-out hover:shadow-2xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <service.icon className="text-lavender text-5xl mb-6 mx-auto" />
                  <h4 className="font-bold text-lilac text-xl mb-4">{service.title}</h4>
                  <p className="text-platinum text-sm">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* refund policy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-lilac to-lavender rounded-3xl transform"></div>
          {/* <div className="absolute inset-0 bg-gradient-to-r from-lilac to-lavender rounded-3xl transform -skew-y-3"></div> */}

          <Link
            href={"/refund-policy"}
            className="w-full h-full"
          >
            <div className="relative bg-blacklite bg-opacity-90 rounded-3xl shadow-2xl overflow-hidden backdrop-filter backdrop-blur-lg p-8 sm:p-12">
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-between"
              >
                <div className="mb-6 sm:mb-0 sm:mr-8">
                  <motion.div
                  // animate={{ rotate: isHovering ? 360 : 0 }}
                  // transition={{ duration: 0.5 }}
                  >
                    <FaUndo className="text-lavender text-6xl sm:text-7xl mb-4" />
                  </motion.div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-lilac mb-4">90-Day Satisfaction Guarantee</h3>
                  <p className="text-platinum text-lg sm:text-xl mb-2">
                    Your trust is our priority. Enjoy peace of mind with our 90-day refund policy.
                  </p>
                  <span className="text-white underline bg-african-violet bg-opacity-50 rounded-sm px-1 text-md sm:text-xl mb-6">
                    read more about the policy
                  </span>
                </div>
                <motion.div
                  className="flex flex-col items-center"
                  animate={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-ultra-violet flex items-center justify-center mb-4">
                    <span className="text-4xl sm:text-5xl font-bold text-lavender">90</span>
                  </div>
                  <span className="text-lilac text-xl sm:text-2xl font-semibold">Days</span>
                </motion.div>
              </motion.div>
              {/* <div className="mt-8">
        <h4 className="text-lilac text-xl sm:text-2xl font-semibold mb-4">Why Choose Us?</h4>
        <ul className="text-platinum">
          {['Risk-free investment', 'Customer-first approach', 'Transparent process'].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <FaCheckCircle className="text-lavender mr-2" />
              {item}
            </motion.li>
          ))}
        </ul>
      </div> */}
              {/* <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 bg-gradient-to-r from-lilac to-lavender text-russian-violet font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
      >
        Explore Our Refund Terms
      </motion.button> */}
            </div>
          </Link>



        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 sm:mt-8 md:mt-10 text-center py-10"
        >
          <p className="text-white text-2xl sm:text-2xl mb-6 sm:mb-8">Ready to elevate your digital presence?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/contact")}
            className="bg-gradient-to-r from-lilac to-lavender text-russian-violet font-bold text-sm sm:text-base md:text-lg py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full shadow-lg hover:shadow-2xl transition duration-300 ease-in-out w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0"
          >
            Get Started With Us Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;