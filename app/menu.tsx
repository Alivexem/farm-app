import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className='absolute theText left-2 top-[42vh] bg-gradient-to-t from-gray-400 to-gray-600 t0 gap-y-5 py-16 text-white hidden md:flex flex-col justify-center items-center p-3 w-[25vw]'>
        <div className='flex flex-col justify-center items-center gap-y-2'>
            <Image src='treadmill.webp' className='w-[100px] h-[100px] rounded-lg border-solid border-white border-[2px]' alt='image' />
            <p className='font-bold mb-5'>Welcome Joshua Emmanuel</p>
        </div>
        <Link href='/buyer'><p className='cursor-pointer'>Home</p></Link>
        <Link href='/profile'><p className='cursor-pointer'>Profile</p></Link>       
        <Link href='/favourite'><p className='cursor-pointer'>Favourites</p></Link>     
        <Link href='/recently'><p className='cursor-pointer'>Recently checked</p></Link>
        <p>Report an issue</p>  
        <Link href='/'><p className='cursor-pointer'>Logout</p></Link>  
    </div>
  )
}

export default Menu
