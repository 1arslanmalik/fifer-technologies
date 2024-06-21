"use client"

import './page.css'
import "./globals.css"
import Hero from '@/src/components/Hero/Hero';
import WhatWeDo from '@/src/components/WhatWeDo/WhatWeDo';
import { useAnimation } from 'framer-motion';
import Testimonials from '@/src/components/Testimonials/Testimonials';
import WhoAreWe from '@/src/components/WhoAreWe/WhoAreWe';

export default function Home() {

  const controls = useAnimation()

  return (
    <div classname="flex flex-col">
      <Hero />
      <WhoAreWe />
      <WhatWeDo />
      <Testimonials />
    </div>
  );
}