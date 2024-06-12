"use client"

import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";

function Landing() {
    
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-800 py-1 top-0'>
        <div className='textstructure mt-52 px-20'>
            <div className='masker'>
                <h1 className='text-7xl uppercase leading-[5.5vw] tracking-tighter font-semibold'>WE CREATE</h1>
            </div>
            <div className='masker flex items-center'>
                    <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}}
                     className='w-[7.5vw] h-[7vh] bg-green-500 relative rounded-md'></motion.div>
                <h1 className='text-7xl uppercase leading-[5.5vw] tracking-tighter font-semibold mr-2'>
                    EYE-OPENING</h1>
            </div>
            <div className='masker'>
                <h1 className='text-7xl uppercase leading-[5.5vw] tracking-tighter font-semibold'>PRESENTATIONS</h1>
            </div>
            <div className='border-t-[1px] border-zinc-900 mt-24 px-0'></div>
            <div className=' flex items-center justify-between py-5 px-5 capitalize'>
            {["For public and private companies", "from first to pitch"].map((item, index)=>(
                <p key={index} className='text-md font-light tracking-tight leading-none capitalize`'>{item}</p>
            ))}
            <div className='start flex item-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-md capitalize'>start the project</div>
                <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-500'><FaArrowTrendUp /></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Landing