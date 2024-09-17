'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
 
const Body = () => {

  
  return (
    <main>
      <div className='flex items-center justify-center'>
        <div className='bg-customGreen rounded-md h-[60vh] mt-5 w-[80vw] md:w-[100vw] lg:w-[100vw] p-7 flex flex-col items-center justify-center'>
          <h2 className='text-center text-[2rem] text-white'>FARM PRODUCE AT YOUR DOORSTEP</h2>
          <Image src='fruitee.png' className='h-[25vh] mt-2 w-[45vw] lg:h-[45vh] md:w-[50vw] lg:w-[30vw]' alt='image' />
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <Link href='/buyer'>
      <div className='hover:bg-green-300 flex bg-white flex-row items-center gap-x-3 justify-center mt-12 border-solid border-slate-500 border-[1px] rounded-lg w-[250px] p-2 '>
        <Image src='google.jpg' className='h-5 w-5' alt='image' />
        <p className='text-[0.9rem]'>Continue with google</p>
      </div>
      </Link>
      </div>
    </main>
  )
}

export default Body
