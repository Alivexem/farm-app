import React from 'react'
import Image from 'next/image'

const Product = () => {
  return (
    <div>
        <div className='mt-10 flex justify-center items-center gap-x-4 p-2'>
            <Image className='h-[90px] w-[180px] rounded-md' src='img3.avif' alt='image'/>

            <div>
                <h3>ODINAKA</h3>
                <h3>CALABAR, NIGERIA</h3>
            </div>
        </div>
        <h2 className='text-center m-5'>PRODUCTS</h2>

        <div className='flex flex-col p-5 gap-y-3'>
        <h2 className='text-center m-5'>CONTACT INFO</h2>
        <p><span className='font-bold'>Phone:</span> +2348021260918</p>
        <p><span className='font-bold'>Facebook:</span> https://facebook.com/alivexem</p>
        <p><span className='font-bold'>Website:</span> https://alivexemtech.vercel.app</p>
        <p><span className='font-bold'>Whatsapp:</span> +2348021260918</p>
        <p><span className='font-bold'>Email:</span> athkinstestimony@gmail.com</p>
        </div>
        
      
    </div>
  )
}

export default Product
