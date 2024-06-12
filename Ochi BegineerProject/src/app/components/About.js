"use client"

import React from 'react'

function About() {
  return (
    <div className='w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
        <h1 className='text-[4.5vw] leading-[4vw] tracking-tight '>Ochi is a strategic partner for fast-growing tech businesses that needOchi is a strategic partner for fast-growing tech businesses that need.</h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-10 border-[#a1b562] '>
            <div className='w-1/2'>
            <div className='text-5xl'>OUR APPROACH :</div>
            <button className='flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-md text-white'>Check</button></div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#9db251]'></div>
        </div>
    </div>
  )
}

export default About