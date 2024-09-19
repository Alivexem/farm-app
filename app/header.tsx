import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-[full] h-[20vh] p-8 mt-[-25px]'>
       
      <div className='flex flex-row items-center gap-x-1.5'>
        <Image className='h-[90px] md:h-[70px] lg:h-[18vh] w-[80px] md:w-[115px]' src='newfarme.png' alt='image' />
        <h1 className='text-[2rem]'>FARMDELY</h1>
      </div>
    </div>
  )
}

export default Header
