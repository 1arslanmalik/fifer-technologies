import './Testimonials.css'
import React from 'react'
import SlickSlider from './SlickSlider'
import { motion } from 'framer-motion'
import { FaStar, FaUserCircle, FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  return (
    <div className="t-wrapper bg-gradient-to-b from-gray-100 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="t-container text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-6"
          >
            <FaQuoteLeft className="text-5xl text-russian-violet opacity-20" />
            <h1 className='text-3xl md:text-4xl font-bold text-russian-violet'>
              Testimonials
            </h1>
            <p className='text-lg md:text-xl text-gray-600 max-w-2xl'>
              Access capital that complements traditional funding options.
            </p>
            <span className='text-sm uppercase tracking-wider text-gray-500'>
              What people say about us
            </span>
          </motion.div>
        </div>

        {/* ratings and icons */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 mt-12">
          <motion.div
            className="p-6 bg-white hover:bg-ultra-violet hover:text-white rounded-lg shadow-lg flex flex-col items-center justify-center flex-1 min-h-[200px] transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
          >
            <FaStar className="text-5xl text-yellow-400 mb-4" />
            <span className="text-3xl font-bold text-gray-900 mb-2">4.9</span>
            <span className="text-sm text-gray-600">Average Rating</span>
          </motion.div>
          <motion.div
            className="bg-white hover:bg-ultra-violet hover:text-white   p-6 rounded-lg shadow-lg flex flex-col items-center justify-center flex-1 min-h-[200px] transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
          >
            <FaUserCircle className="text-5xl text-blue-500 mb-4" />
            <span className="text-3xl font-bold text-gray-900 mb-2">10k+</span>
            <span className="text-sm text-gray-600">Happy Clients</span>
          </motion.div>
        </div>

        {/* slider */}
        <div className="mt-16">
          <SlickSlider />
        </div>
      </div>
    </div>
  )
}

export default Testimonials