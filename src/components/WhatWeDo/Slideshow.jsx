// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "popmotion";

// const images = [
//   'https://images.pexels.com/photos/23020607/pexels-photo-23020607/free-photo-of-a-sunset-with-birds-flying-over-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   'https://images.pexels.com/photos/25243802/pexels-photo-25243802/free-photo-of-coolangatta-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   'https://images.pexels.com/photos/17966146/pexels-photo-17966146/free-photo-of-trona-pinnacles-in-californian-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
// ];

// const variants = {
//   enter: (direction) => {
//     return {
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction) => {
//     return {
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
// };

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset, velocity) => {
//   return Math.abs(offset) * velocity;
// };

// const Slideshow = () => {
//   const [[page, direction], setPage] = useState([0, 0]);

//   const imageIndex = wrap(0, images.length, page);

//   const paginate = (newDirection) => {
//     setPage([page + newDirection, newDirection]);
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.img
//           key={page}
//           src={images[imageIndex]}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 0.2 },
//           }}
//           className="absolute w-full h-full object-cover"
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           dragElastic={1}
//           onDragEnd={(e, { offset, velocity }) => {
//             const swipe = swipePower(offset.x, velocity.x);

//             if (swipe < -swipeConfidenceThreshold) {
//               paginate(1);
//             } else if (swipe > swipeConfidenceThreshold) {
//               paginate(-1);
//             }
//           }}
//         />
//       </AnimatePresence>
//       <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-white" onClick={() => paginate(-1)}>
//         {"‣"}
//       </div>
//       <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-white" onClick={() => paginate(1)}>
//         {"‣"}
//       </div>
//     </div>
//   );
// };

// export default Slideshow;


import React, { useState } from 'react';
import { motion } from 'framer-motion';

const imageLinks = [
    'https://images.pexels.com/photos/23020607/pexels-photo-23020607/free-photo-of-a-sunset-with-birds-flying-over-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/25243802/pexels-photo-25243802/free-photo-of-coolangatta-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/17966146/pexels-photo-17966146/free-photo-of-trona-pinnacles-in-californian-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? imageLinks.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === imageLinks.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="relative w-full h-96">
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white rounded-full p-2 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white rounded-full p-2 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="w-full h-full overflow-hidden">
        <motion.img
          key={currentSlide}
          src={imageLinks[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default Slideshow;
