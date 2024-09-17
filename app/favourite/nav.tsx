import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
interface NavheadProps {
  clicked: boolean
}
const Navbuy: React.FC<NavheadProps> = ({clicked}) => {
  return (
    <div className='break-words text-white'>
    <div className='absolute top-[0] left-0 h-[100vh] p-5 w-[70vw] bg-blue-900 border-none break-words' style={{display: clicked? 'block' : 'none'}}>
      <div className='flex gap-x-5 mt-[25%]'>
        <Image src='img1.jpg' className='h-[75px] w-[80px] border-solid border-2 border-white rounded-[10px]' alt='image'/>
        <div className='text-white flex w-[40%] flex-col gap-y-2'>
          <p>Joshua Emmanuel</p>
          <p>Buyer account</p>
          <p className='break-words overflow-hidden'>Calabar, Nigeria</p>
        </div>
      </div>

      <div className='h-1 w-[90%] bg-white mt-[15%] mb-[15%]'></div>
      <div className='flex flex-col gap-y-5 font-bold'>
      <Link href='/buyer'><p>HOME</p></Link>
      <Link href='/recently'><p>RECENTLY CHECKED</p></Link>
      <Link href='/profile'><p>PROFILE</p></Link>
      <p>REPORT AN ISSUE</p>
      </div>

      <div className='h-1 w-[90%] bg-white mt-10 mb-10 '></div>
      <Link href='/'> <p className='mt-[20%]'>LOGOUT</p></Link>
    </div>
  </div>
  
  )
}

export default Navbuy
