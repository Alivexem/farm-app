import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserCircle,
  faBarsStaggered
} from "@fortawesome/free-solid-svg-icons";
interface GenheadProps {
  toggleMenu: () => void;
  clicked: boolean;
}
const Genhead: React.FC<GenheadProps> = ({ toggleMenu }) => {
  return (
    <div className='w-[full] h-[20vh] p-4 pt-0 ml-0 mr-0 pl-0 pr-0 mt-0'>
      <div className='bg-orange-500 flex justify-center items-center h-[70px] p-4 mb-3'>
        <h3 className='text-center text-white font-bold'>YOUR ORDER GETS DELIVERED TO YOUR DOORSTEP!</h3>
      </div>
      <div className='flex flex-row items-center justify-evenly'>
        <Image className='h-[90px] md:h-[14vh] lg:h-[18vh] w-[80px] md:w-[11vw] lg:w-[12vw] ml-[-20px]' src='newfarme.png' alt='image' />
        <h1 className='text-[1.8rem]'>FARMDELY</h1>
      <Link href='/profile'><FontAwesomeIcon
          className='ml-4'
          icon={faUserCircle}
          size='1x'
        /></Link>
        <FontAwesomeIcon
        onClick={toggleMenu}
        className='ml-3'
          icon={faBarsStaggered}
          size='1x'
        />
      </div>
    </div>
  )
}

export default Genhead
