import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <header class="antialiased">
            <nav class="bg-white flex items-center justify-between border-b-2 border-gray-300 px-4 lg:px-6 py-2.5 ">
                <div class="flex flex-wrap justify-between items-center">
                    <div class="flex justify-start items-center pl-10">
                        <a href="/" class="flex ">
                            <img src={logo} class="h-24 w-24" alt="FlowBite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap font-poppins dark:text-white">Provision Store</span>
                        </a>
                    </div>

                </div>

                <div className='mr-40'>
                    <a href="/about">
                        <button className='bg-blue-700  text-white font-poppins px-5 py-2 rounded-md'>About</button>
                    </a>
                </div>

            </nav>
        </header>



    )
}

export default Navbar