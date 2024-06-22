"use client"
import Navbar from "../src/components/Navbar/Navbar.jsx";
import "./globals.css";
import { Josefin_Sans } from 'next/font/google';
import { motion, useAnimation } from 'framer-motion';
import Footer from "../src/components/Footer/Footer.jsx";

export const metadata = {
  title: "Fifer Technologies",
  description: "A Digital Marketing Agency",
};

const Josef = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap'
})

export default function RootLayout({ children }) {
  const controls = useAnimation()

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </head>
      <body className={`${Josef.className}`}>
        <motion.div className="home" animate={controls}>
          <Navbar />
          {children}
          <Footer />
        </motion.div>
      </body>
    </html>
  );
}
