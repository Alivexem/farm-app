import React from 'react'
import Image from 'next/image'

const ProfileBody = () => {
    return (
        <div>
            <div className='flex flex-col gap-y-2 justify-center items-center mt-[70px]'>
                <Image src='img1.jpg' className='h-[110px] border-2 border-solid border-black w-[140px] rounded-[10px]' alt='image'/>
                <button className='p-2 bg-slate-900 text-white rounded-md h-auto border-none'>Edit picture</button>
            </div>
            <form>
                <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-start items-start mt-5'>
                <label className='float-left' htmlFor='fullname'>Fullname:</label>
                <input className='border-[1px] mt-3 w-[80vw] border-solid border-black p-2 pl-3' placeholder='John Doe' name='fullname' type='text' />
                <label className='mt-3' htmlFor='fullname'>Business Name:</label>
                <input className='border-[1px] mt-3 w-[80vw] border-solid border-black p-2 pl-3' placeholder='ABC Sales' name='Business' type='text' />
                <label className='mt-3' htmlFor='email'>Email Address:</label>
                <input className='border-[1px] mt-3 w-[80vw] border-solid border-black p-2 pl-3' placeholder='example@gmail.com' type='email' />
                <label className='mt-3' htmlFor='phone'>Phone number:</label>
                <input className='border-[1px] mt-3 w-[80vw] border-solid border-black p-2 pl-3' placeholder='+234-00-0000-0000' type='phone' />
                <label className='mt-3' htmlFor='location'>Location:</label>
                <input className='border-[1px] mt-3 w-[80vw] border-solid border-black p-2 pl-3' placeholder='location' type='text' />
                <div className='flex flex-row mt-5 mb-7 gap-x-4'>
                    <input className='border-[1px] w-[30vw] border-solid border-black p-2 pl-3' placeholder='password' type='password' />
                     <button className='p-2 bg-slate-900 text-white rounded-md h-auto border-none'>change password</button>
                </div>

                <button className='bg-customGreen text-white font-bold w-[40vw] h-[35px] rounded-md'>save</button>
               
            </div>
            </div>
            </form>
        </div>
    )
}

export default ProfileBody
