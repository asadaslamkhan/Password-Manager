import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-[#2D2B55] text-white'>
            <div className="mycontainer flex justify-between items-center px-4  py-5 h-14">
                <div className="logo font-bold text-white text-xl flex items-center justify-center">
                    
                    PassworD
                    <span className="text-green-500"> Manager</span>
                </div>
                {/* <ul>
                    <li className="flex gap-4">
                        <a className="hover:font-bold" href="#">Home</a>
                        <a className="hover:font-bold" href="#">About</a>
                        <a className="hover:font-bold" href="#">Contact</a>
                    </li>
                </ul> */}
                <button className='text-white bg-green-500 my-5 rounded-2xl flex justify-center items-center'>
                    <img className="w-10 p-1" src="src/assets/github.png" alt="github" />
                    <a href="https://github.com/asadaslamkhan"> <span  className='font-bold px-2'>GitHub</span></a>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
