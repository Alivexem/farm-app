import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
const Buybody = () => {
  return (
    <div className='md:mb-[20vw]'>
      
        <h2 className='text-center underline font-bold text-[1.4rem] my-10' style={{fontFamily:'revert'}}>
          Favourites
        </h2>

      <div className='flex justify-center items-center md:ml-[22vw]'>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-3 md:gap-x-8'>
          <div className='border-[1px] hover:bg-slate-50 hover:rounded-2xl border-black border-solid bg-white flex flex-col justify-center items-center p-2 h-[auto] w-[45vw] md:w-[15vw]'>
            <Image className='rounded-[10px] mt-2 mb-3 h-[50%] w-[100%]' src='img1.jpg' alt='image' />
            <div className='mt-2 space-y-1'>
              <div className='h-1 mt-1 mb-4 rounded-sm w-10 bg-green-900'></div>
              <p className='text-gray-500 text-left text-[0.7rem] font-bold'>NAME: Mike Agbani </p>
              <p className='text-gray-500 text-left text-[0.7rem] font-bold'>PRODUCT: Crops and veges </p>
              <p className='text-gray-500 text-left text-[0.7rem] font-bold'>LOCATION: Lagos, Nigeria </p>
            </div>
            <button className='p-4 mb-3 hover:bg-slate-500 mt-4 flex justify-center items-center rounded-md bg-customGreen text-white text-[0.8rem] w-[90%] h-3'>view product</button>
          </div>

          <div className='border-[1px] hover:bg-slate-50 hover:rounded-2xl border-black border-solid bg-white flex flex-col justify-center items-center p-2 h-[auto] w-[45vw] md:w-[15vw]'>
            <Image className='rounded-[10px] mt-2 mb-3 h-[50%] w-[100%]' src='img2.avif' alt='image' />
            <div className='mt-2 space-y-1'>
              <div className='h-1 mt-1 mb-4 rounded-sm w-10 bg-green-900'></div>
              <p className='text-gray-500 text-left text-[0.7rem] font-bold'>NAME: Joe Counsel </p>
              <p className='text-gray-500 text-left text-[0.7rem] font-bold'>PRODUCT: Dried fish </p>
              <p className='text-gray-500 text-left text-[0.7rem] font-bold'>LOCATION: Lagos, Nigeria </p>
            </div>
            <button className='p-4 mb-3 hover:bg-slate-500 mt-4 flex justify-center items-center rounded-md bg-customGreen text-white text-[0.8rem] w-[90%] h-3'>view product</button>
          </div>

          <div className='border-[1px] hover:bg-slate-50 hover:rounded-2xl border-black border-solid bg-white flex flex-col justify-center items-center p-2 h-[auto] w-[45vw] md:w-[15vw]'>
            <Image className='rounded-[10px] mt-2 mb-3 h-[50%] w-[100%]' src='img4.webp' alt='image' />
            <div className='mt-2 space-y-1'>
              <div className='h-1 mt-1 mb-4 rounded-sm w-10 bg-customGreen'></div>
              <p className='text-gray-500 text-left text-[0.7rem] font-bold'>NAME: Mary Njoku </p>
              <p className='text-gray-500 text-left text-[0.7rem] font-bold'>PRODUCT: Poultry </p>
              <p className='text-gray-500 text-left text-[0.7rem] font-bold'>LOCATION: Lagos, Nigeria </p>
            </div>
            <button className='p-4 mb-3 hover:bg-slate-500 mt-4 flex justify-center items-center rounded-md bg-customGreen text-white text-[0.8rem] w-[90%] h-3'>view product</button>
          </div>


          <div className='border-[1px] hover:bg-slate-50 hover:rounded-2xl border-black border-solid bg-white flex flex-col justify-center items-center p-2 h-[auto] w-[45vw] md:w-[15vw]'>
            <Image className='rounded-[10px] mt-2 mb-3 h-[50%] w-[100%]' src='img3.avif' alt='image' />
            <div className='mt-2 space-y-1'>
              <div className='h-1 mt-1 mb-4 rounded-sm w-10 bg-customGreen'></div>
              <p className='text-gray-500 text-left text-[0.7rem] font-bold'>NAME: Joshua Caleb </p>
              <p className='text-gray-500 text-left text-[0.7rem] font-bold'>PRODUCT: Crops and veges </p>
              <p className='text-gray-500 text-left text-[0.7rem] font-bold'>LOCATION: Lagos, Nigeria </p>
            </div>
            <button className='p-4 mb-3 hover:bg-slate-500 mt-4 flex justify-center items-center rounded-md bg-customGreen text-white text-[0.8rem] w-[90%] h-3'>view product</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Buybody
