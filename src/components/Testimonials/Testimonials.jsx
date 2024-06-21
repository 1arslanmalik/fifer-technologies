import './Testimonials.css'
import React from 'react'
import SlickSlider from './SlickSlider'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaQuoteRight, FaStar, FaUserCircle } from 'react-icons/fa'

const Testimonials = () => {
  return (
    <div className="t-wrapper">
      <div className="container">
        <div className="t-container">
          <div className="flex justify-center flex-col items-center space-y-10 mt-5">
            <h1 className='text-4xl text-bold bg-russian-violet text-white rounded-sm px-3 pt-1'>Testimonials</h1>
            <span className='title'>Access capital that complements traditional funding options.</span>
            <span className='des'>What people say about us -</span>
          </div>
        </div>
        {/* {ratings and icons} */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 ">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full md:w-1/4"
            whileHover={{ scale: 1.05 }}
          >
            <FaStar className="text-4xl text-blue-500 mb-2" />
            <span className="text-2xl font-bold text-gray-900">4.9</span>
            <span className="text-sm text-gray-600">Average Rating</span>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full md:w-1/4"
            whileHover={{ scale: 1.05 }}
          >
            <FaUserCircle className="text-4xl text-blue-500 mb-2" />
            <span className="text-2xl font-bold text-gray-900">10k+</span>
            <span className="text-sm text-gray-600">Happy Clients</span>
          </motion.div>
        </div>

        {/* slider */}
        <SlickSlider />
      </div>
    </div>
  )
}


export default Testimonials


// export default Testimonials
// import React from 'react'
// import SlickSlider from './SlickSlider'
// import './Testimonials.css'

// const Testimonials = () => {
//   return (
//     <div className="t-wrapper">
//         <div className="container">
//             <div className="t-container">
//                 <div className="t-head">
//                     <span className='tag'>Testimonials</span>
//                     <span className='title'>Access capital that complements traditional funding options.</span>
//                     <span className='des'>What people say about us</span>
//                 </div>
//             </div>
//             {/* slider */}
//             <SlickSlider/>
//         </div>
//     </div>
//   )
// }

// export default Testimonials





// import React from 'react'
// import SlickSlider from './SlickSlider'
// import { motion } from 'framer-motion'
// import { FaQuoteLeft, FaQuoteRight, FaStar, FaUserCircle } from 'react-icons/fa'
// import { BsPeople } from 'react-icons/bs'
// import Slider from 'react-slick/lib/slider'

// const Testimonials = () => {
//   return (
//     <motion.div
//       className="bg-gray-50 py-16 relative overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="flex flex-col container mx-auto px-4">
//         <motion.div
//           className="text-center mb-12"
//           initial={{ y: -50 }}
//           animate={{ y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <span className='inline-flex items-center bg-gray-200 px-4 py-2 rounded-full font-bold text-gray-700 mb-4'>
//             <FaQuoteLeft className="mr-2" />
//             Testimonials
//             <FaQuoteRight className="ml-2" />
//           </span>
//           <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Access capital that complements traditional funding options.</h2>
//           <p className='text-xl text-gray-600 flex items-center justify-center'>
//             <BsPeople className="mr-2" />
//             What people say about us
//           </p>
//         </motion.div>

// <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
//   <motion.div
//     className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full md:w-1/4"
//     whileHover={{ scale: 1.05 }}
//   >
//     <FaStar className="text-4xl text-blue-500 mb-2" />
//     <span className="text-2xl font-bold text-gray-900">4.9</span>
//     <span className="text-sm text-gray-600">Average Rating</span>
//   </motion.div>
//   <motion.div
//     className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full md:w-1/4"
//     whileHover={{ scale: 1.05 }}
//   >
//     <FaUserCircle className="text-4xl text-blue-500 mb-2" />
//     <span className="text-2xl font-bold text-gray-900">10k+</span>
//     <span className="text-sm text-gray-600">Happy Clients</span>
//   </motion.div>
// </div>
//         {/* <motion.div
//           className="absolute bottom-0 left-0 right-0 bg-blue-500 opacity-10 h-1/2"
//           initial={{ height: 0 }}
//           animate={{ height: '50%' }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         /> */}
//       </div>
//       <SlickSlider />
//     </motion.div>
//   )
// }

// export default Testimonials