"use client"

import { motion } from 'framer-motion'
import React from 'react'

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 5}} className='text-[22vw] leading-none font-bold uppercase pt-10 '>WE ARE OCHI . </motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 5}} className='text-[22vw] leading-none font-bold uppercase pt-10 '>WE ARE OCHI . </motion.h1>
        </div>
    </div>
  )
}

export default Marque