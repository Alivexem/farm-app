import React from 'react'

const Genfoot = () => {
  return (
    <div className='flex flex-row justify-center mt-10 items-center h-[200px] bg-slate-900 p3 gap-x-10'>
      <div className='flex flex-col justify-center items-center p-4'>
        <div>
        <div className='flex flex-row items-center gap-x-2'>
            <img src='farmlogo.png' className='h-[70px] w-[80px]' />
            <h2 className='text-white'>FarmDely</h2>
          </div>
            <p className='text-white text-[0.7rem] text-center mt-3'>&copy; Alivexem 2024, All rights reserved.</p>
            </div>
        </div>
      
      <div className='flex flex-col gap-y-4 text-white text-[0.7rem] p-4'>
        
        <p> https://alivexemtech.vervel.app</p>
        <p>+2348021260918</p>
        <p>13, king solomon street, Akesan Lagos Nigeria.</p>
      </div>
    </div>
  )
}

export default Genfoot
