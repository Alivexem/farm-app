import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
const Buybody = () => {
  return (
    <div>
    
      <div className='left-3 relative pl-5 pr-4 mt-12 w-[200px] flex flex-row justify-center items-center border-[1px] h-[35px]  rounded-2xl border-solid border-customGreen'>
        <input className=' pl-3 w-[160px] bg-transparent' placeholder='search...' type='text' />
        <FontAwesomeIcon
        className='mr-3 ml-2'
          icon={faMagnifyingGlass}
          size='1x'
        />
      </div>
  

          <h2 className='text-center mb-6 mt-10 font-bold'>SELLERS NEAR YOU</h2>
        
        <div className='flex justify-center items-center w-[full]'>
        <div className='grid grid-cols-2 justify-evenly gap-4'>
          <div className='border-[1px] border-black border-solid bg-white flex flex-col justify-center items-center p-2 h-[auto] w-[45vw]'>
          <Image className='rounded-[10px] mt-2 mb-3 h-[50%] w-[100%]' src='img1.jpg' alt='image' />
          <div className='mt-2 space-y-1'>
          <div className='h-1 mt-1 mb-4 rounded-sm w-10 bg-green-900'></div>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>NAME: Mike Agbani </p>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>PRODUCT: Crops and veges </p>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>LOCATION: Lagos, Nigeria </p>
          </div>
          <button className='p-4 mb-3 mt-4 flex justify-center items-center rounded-md bg-customGreen text-white text-[0.8rem] w-[90%] h-3'>view product</button>
          </div>

          <div className='border-[1px] border-black border-solid bg-white flex flex-col justify-center items-center p-2 h-[auto] w-[45vw]'>
          <Image className='rounded-[10px] mt-2 mb-3 h-[50%] w-[100%]' src='img2.avif' alt='image' />
          <div className='mt-2 space-y-1'>
          <div className='h-1 mt-1 mb-4 rounded-sm w-10 bg-green-900'></div>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>NAME: Joe Counsel </p>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>PRODUCT: Dried fish </p>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>LOCATION: Lagos, Nigeria </p>
          </div>
          <button className='p-4 mb-3 mt-4 flex justify-center items-center rounded-md bg-customGreen text-white text-[0.8rem] w-[90%] h-3'>view product</button>
          </div>

          <div className='border-[1px] border-black border-solid bg-white flex flex-col justify-center items-center p-2 h-[auto] w-[45vw]'>
          <Image className='rounded-[10px] mt-2 mb-3 h-[50%] w-[100%]' src='img4.webp' alt='image' />
          <div className='mt-2 space-y-1'>
            <div className='h-1 mt-1 mb-4 rounded-sm w-10 bg-customGreen'></div>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>NAME: Mary Njoku </p>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>PRODUCT: Poultry </p>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>LOCATION: Lagos, Nigeria </p>
          </div>
          <button className='p-4 mb-3 mt-4 flex justify-center items-center rounded-md bg-customGreen text-white text-[0.8rem] w-[90%] h-3'>view product</button>
          </div>


          <div className='border-[1px] border-black border-solid bg-white flex flex-col justify-center items-center p-2 h-[auto] w-[45vw]'>
          <Image className='rounded-[10px] mt-2 mb-3 h-[50%] w-[100%]' src='img3.avif' alt='image' />
          <div className='mt-2 space-y-1'>
          <div className='h-1 mt-1 mb-4 rounded-sm w-10 bg-customGreen'></div>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>NAME: Joshua Caleb </p>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>PRODUCT: Crops and veges </p>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>LOCATION: Lagos, Nigeria </p>
          </div>
          <button className='p-4 mb-3 mt-4 flex justify-center items-center rounded-md bg-customGreen text-white text-[0.8rem] w-[90%] h-3'>view product</button>
          </div>
        </div>
       
        </div>
          <div className='flex justify-center items-center'>
          <div className='h-1 w-[200px] ml-6 bg-slate-500 mt-5'></div>
          </div>

          <h2 className='text-center m-3 font-bold'>SELLERS AROUND NIGERIA</h2>
          <div className='flex justify-center items-center'>
          <div className='h-1 w-[200px] ml-6 bg-slate-500 mt-0 mb-4'></div>
          </div>
          <div className='flex justify-center items-center w-[full]'>
        <div className='grid grid-cols-2 justify-evenly gap-4'>
          <div className='border-[1px] border-black border-solid bg-white flex flex-col justify-center items-center p-2 h-[auto] w-[45vw]'>
          <Image className='rounded-[10px] mt-2 mb-3 h-[50%] w-[100%]' src='img1.jpg' alt='image' />
          <div className='mt-2 space-y-1'>
          <div className='h-1 mt-1 mb-4 rounded-sm w-10 bg-customGreen'></div>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>NAME: Paul James </p>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>PRODUCT: Piggery </p>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>LOCATION: Benue, Nigeria </p>
          </div>
          <button className='p-4 mb-3 mt-4 flex justify-center items-center rounded-md bg-orange-600 text-white text-[0.8rem] w-[90%] h-3'>view product</button>
          </div>

          <div className='border-[1px] border-black border-solid bg-white flex flex-col justify-center items-center p-2 h-[auto] w-[45vw]'>
          <Image className='rounded-[10px] mt-2 mb-3 h-[50%] w-[100%]' src='img2.avif' alt='image' />
          <div className='mt-2 space-y-1'>
          <div className='h-1 mt-1 mb-4 rounded-sm w-10 bg-customGreen'></div>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>NAME: David Achilonu </p>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>PRODUCT: Snail farm </p>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>LOCATION: Ogun, Nigeria </p>
          </div>
          <button className='p-4 mb-3 mt-4 flex justify-center items-center rounded-md bg-orange-600 text-white text-[0.8rem] w-[90%] h-3'>view product</button>
          </div>

          <div className='border-[1px] border-black border-solid bg-white flex flex-col justify-center items-center p-2 h-[auto] w-[45vw]'>
          <Image className='rounded-[10px] mt-2 mb-3 h-[50%] w-[100%]' src='img4.webp' alt='image' />
          <div className='mt-2 space-y-1'>
            <div className='h-1 mt-1 mb-4 rounded-sm w-10 bg-customGreen'></div>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>NAME: Bisola Olayemi </p>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>PRODUCT: Catfish farm </p>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>LOCATION: Ogun, Nigeria </p>
          </div>
          <button className='p-4 mb-3 mt-4 flex justify-center items-center rounded-md bg-orange-600 text-white text-[0.8rem] w-[90%] h-3'>view product</button>
          </div>


          <div className='border-[1px] border-black border-solid bg-white flex flex-col justify-center items-center p-2 h-[auto] w-[45vw]'>
          <Image className='rounded-[10px] mt-2 mb-3 h-[50%] w-[100%]' src='img3.avif' alt='image' />
          <div className='mt-2 space-y-1'>
          <div className='h-1 mt-1 mb-4 rounded-sm w-10 bg-customGreen'></div>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>NAME: Azubike Ndukka </p>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>PRODUCT: Rice farm </p>
            <p className='text-gray-500 text-left text-[0.7rem] font-bold'>LOCATION: Kaduna, Nigeria </p>
          </div>
          <button className='p-4 mb-3 mt-4 flex justify-center items-center rounded-md bg-orange-600 text-white text-[0.8rem] w-[90%] h-3'>view product</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Buybody
