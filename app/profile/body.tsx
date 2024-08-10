import React from 'react'

const ProfileBody = () => {
    return (
        <div>
            <div className='flex flex-col gap-y-2 justify-center items-center mt-[70px]'>
                <img src='img1.jpg' className='h-[110px] border-2 border-solid border-black w-[140px] rounded-[10px]' />
                <button className='p-2 bg-black text-white rounded-md h-auto border-none'>Edit picture</button>
            </div>
            <div className='flex flex-col justify-center items-center mt-5'>
                <h2 className='text-center m-2 font-bold'>BUYER ACCOUNT</h2>
                <input className='border-[1px] mt-3 w-[80vw] border-solid border-black p-2 pl-3' placeholder='name' type='text' value='Joshua Emmanuel' />
                <input className='border-[1px] mt-3 w-[80vw] border-solid border-black p-2 pl-3' placeholder='email' type='email' value='athkinstestimony@gmail.com' />
                <input className='border-[1px] mt-3 w-[80vw] border-solid border-black p-2 pl-3' placeholder='phone' type='phone' value='+2348021260918' />

                <input className='border-[1px] mt-3 w-[80vw] border-solid border-black p-2 pl-3' placeholder='location' type='text' value='Calabar,Nigeria' />
                <div className='flex flex-row mt-5 mb-7 gap-x-4'>
                    <input className='border-[1px] w-[30vw] border-solid border-black p-2 pl-3' placeholder='password' type='password' value='Calabar' />
                     <button className='p-2 bg-black text-white rounded-md h-auto border-none'>change password</button>
                </div>

                <button className='bg-customGreen text-white font-bold w-[70vw] h-[35px] rounded-md'>save</button>
            </div>
        </div>
    )
}

export default ProfileBody
