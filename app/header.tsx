import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-[full] h-[20vh] p-8 mt-[-25px]'>
       
      <div className='flex flex-row items-center gap-x-1.5'>
        <Image className='h-[120px] md:h-[14vh] lg:h-[18vh] w-[120px] md:w-[11vw] lg:w-[12vw]' src='newfarme.png' alt='image' />
        <h1 className='text-[2rem]'>FARMDELY</h1>
      </div>
    </div>
  )
}

export default Header
