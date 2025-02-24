import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full h-15'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-green-500'></span>

                <span>Password</span><span className='text-green-500'>Manager</span>
                <div className='flex justify-center text-sm font-light items-center'> Created with <img className='w-7 mx-2' src="src/assets/heart.png" alt="" /> by Asadaslam </div>


            </div>
            {/* <div className='flex justify-center items-center'> Created with <img className='w-7 mx-2' src="src/assets/heart.png" alt="" /> by Asadaslam </div> */}
        </div>
    )
}

export default Footer
