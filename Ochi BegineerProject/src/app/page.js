"use client"

import React from 'react'
import Navbar from './components/navbar'
import Landing from './components/landing'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import LocomotiveScroll from 'locomotive-scroll';

function page() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen text-white bg-zinc-800'>
      <Navbar />
      <Landing />
      <Marque />
      <About />
      <Eyes />
    </div>
  )
}

export default page