'use client'
import React, { useState } from 'react'
 
const Body = () => {
  const [forms,setForms] = useState([false,false,false,false])
  
  const buy = () => {
    setForms([true,false,false,false])
  }
  const sell = () => {
    setForms([false,false,true,false])
  }
  const buyLogin = () => {
    setForms([false,true,false,false])
  }
  const sellLogin = () => {
    setForms([false,false,false,true])
  }
  return (
    <main>
      <div className='flex items-center justify-center'>
        <div className='bg-customGreen rounded-md h-[60vh] mt-5 w-[80vw] md:w-[100vw] lg:w-[100vw] p-7 flex flex-col items-center justify-center'>
          <h2 className='text-center text-[2rem] text-white'>FARM PRODUCE AT YOUR DOORSTEP</h2>
          <img src='fruits.png' className='h-[25vh] mt-2 w-[45vw] lg:h-[45vh] md:w-[50vw] lg:w-[30vw]' />
        </div>
      </div>


      <div className='flex flex-col items-center justify-center mt-5 gap-y-5'>
       <a href='#buycheck'> <button onClick={buy} className='h-[6vh] w-[60vw] bg-slate-800 border-none rounded-md text-white'>Buy farm produce</button> </a>
        <a href='#sellcheck'><button onClick={sell} className='h-[6vh] w-[60vw] bg-slate-800 border-none rounded-md text-white mb-7'>Sell your harvest</button> </a>
      </div>
    
      <div id='buycheck' className={`${forms[0] ? 'flex' : 'hidden'} mt-5 items-center justify-center flex-col p-5 border-2 border-solid border-black rounded-sm`}>
   
          <h2 className='text-center font-bold text-[1.5rem] mb-7'>Buyer signup</h2>
        <form className='flex flex-col'>
          <label htmlFor='name'>Name:</label>
          <input id='name' className='w-[70vw] h-[2vh] rounded-md p-5 border-[1px] border-solid border-gray-900' type='text' placeholder='name' name='name' />
          <label className='mt-3' htmlFor='email'>Email:</label>
          <input id='email' className='w-[70vw] h-[2vh] rounded-md p-5 border-[1px] border-solid border-gray-900' type='text' placeholder='email' name='email' />
          <label className='mt-3' htmlFor='password'>Password:</label>
          <input id='password' className='w-[70vw] h-[2vh] rounded-md p-5 border-[1px] border-solid border-gray-900' type='text' placeholder='password' name='password' />
          <label className='mt-3' htmlFor='confirm'>Confirm Password:</label>
          <input id='confirm' className='w-[70vw] h-[2vh] rounded-md p-5 border-[1px] border-solid border-gray-900' type='text' placeholder='confirm password' name='confirm' />
          <button className='h-[6vh] w-[60vw] mt-5 bg-customGreen border-none rounded-md text-white'>Signup</button>
        </form>
        <p className='mt-7 text-center'>Already have an account as a buyer? <span onClick={buyLogin} className='text-orange-600 font-bold'>login</span></p>
        </div>

        <div className={`${forms[1] ? 'flex' : 'hidden'} mt-5 items-center justify-center flex-col p-5 border-2 border-solid border-black rounded-sm`}>
 
          <h2 className='text-center font-bold text-[1.5rem] mb-7'>Buyer Login</h2>
        <form className='flex flex-col'>
          <label className='mt-3' htmlFor='name'>Email:</label>
          <input className='w-[70vw] h-[2vh] rounded-md p-5 border-[1px] border-solid border-gray-900' type='text' placeholder='email' name='email' />
          <label className='mt-3' htmlFor='password'>Password:</label>
          <input className='w-[70vw] h-[2vh] rounded-md p-5 border-[1px] border-solid border-gray-900' type='text' placeholder='password' name='password' />
          <button className='h-[6vh] w-[60vw] mt-5 bg-customGreen border-none rounded-md text-white'>Login</button>
        </form>
        <p className='mt-7 text-center'>Don't have an account as a buyer? <span onClick={buy} className='text-orange-600 font-bold'>signup</span></p>
        <p className='mt-6 text-center text-blue-700 font-bold'>forgot password</p>
        </div>


        <div id='sellcheck' className={`${forms[2] ? 'flex' : 'hidden'} mt-5 items-center justify-center flex-col p-5 border-2 border-solid border-black rounded-sm`}>
  
          <h2 className='text-center font-bold text-[1.5rem] mb-7'>Seller signup</h2>
        <form className='flex flex-col'>
          <label htmlFor='name'>Business Name/Fullname:</label>
          <input className='w-[70vw] h-[2vh] rounded-md p-5 border-[1px] border-solid border-gray-900' type='text' placeholder='name' name='name' />
         
          <label className='mt-3' htmlFor='name'>State of residence:</label>
          <input className='w-[70vw] h-[2vh] rounded-md p-5 border-[1px] border-solid border-gray-900' type='text' placeholder='state of residence' name='state' />
        
          <label className='mt-3' htmlFor='name'>Email:</label>
          <input className='w-[70vw] h-[2vh] rounded-md p-5 border-[1px] border-solid border-gray-900' type='text' placeholder='email' name='email' />
          <label className='mt-3' htmlFor='password'>Password:</label>
          <input className='w-[70vw] h-[2vh] rounded-md p-5 border-[1px] border-solid border-gray-900' type='text' placeholder='password' name='password' />
          <label className='mt-3' htmlFor='confirm'>Confirm Password:</label>
          <input className='w-[70vw] h-[2vh] rounded-md p-5 border-[1px] border-solid border-gray-900' type='text' placeholder='confirm password' name='confirm' />
          <button className='h-[6vh] w-[60vw] mt-5 bg-customGreen border-none rounded-md text-white'>Signup</button>
        </form>
        <p className='mt-7 text-center'>Already have an account as a seller? <span onClick={sellLogin} className='text-orange-600 font-bold'>login</span></p>
        </div>


        <div className={`${forms[3] ? 'flex' : 'hidden'} mt-5 items-center justify-center flex-col p-5 border-2 border-solid border-black rounded-sm`}>
  
          <h2 className='text-center font-bold text-[1.5rem] mb-7'>Seller Login</h2>
        <form className='flex flex-col'>
        <label htmlFor='name'>Business Name/Fullname:</label>
          <input className='w-[70vw] h-[2vh] rounded-md p-5 border-[1px] border-solid border-gray-900' type='text' placeholder='name' name='name' />
         
          <label className='mt-3' htmlFor='name'>Email:</label>
          <input className='w-[70vw] h-[2vh] rounded-md p-5 border-[1px] border-solid border-gray-900' type='text' placeholder='email' name='email' />
          <label className='mt-3' htmlFor='password'>Password:</label>
          <input className='w-[70vw] h-[2vh] rounded-md p-5 border-[1px] border-solid border-gray-900' type='text' placeholder='password' name='password' />
          <button className='h-[6vh] w-[60vw] mt-5 bg-customGreen border-none rounded-md text-white'>Login</button>
        </form>
        <p className='mt-7 text-center'>Don't have an account as a seller? <span onClick={sell} className='text-orange-600 font-bold'>signup</span></p>
        <p className='mt-6 text-center text-blue-700 font-bold'>forgot password</p>
        </div>
    
      <div>

      </div>
    </main>
  )
}

export default Body
