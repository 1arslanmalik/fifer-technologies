"use client"

import './page.css'
import "./globals.css"
import Hero from '../src/components/Hero/Hero.jsx';
import WhatWeDo from '../src/components/WhatWeDo/WhatWeDo.jsx';
import { useAnimation } from 'framer-motion';
import Testimonials from '../src/components/Testimonials/Testimonials.jsx';
import WhoAreWe from '../src/components/WhoAreWe/WhoAreWe.jsx';

export default function Home() {

  // const controls = useAnimation()

  return (
    <>
      <Hero />
      <WhoAreWe />
      <WhatWeDo />
      <Testimonials />
    </>
  );
}