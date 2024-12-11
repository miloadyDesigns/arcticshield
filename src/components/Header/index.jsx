'use client'
import React, { useEffect, useState } from 'react'

import CategoryMenu from '../Widgets/CategoryMenu';
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";


const Header = ({ }) => {

    return (
        <header className=' w-screen pt-6  bg-black'>
            <div className='w-[80%] m-auto h-full '>
                <div className='flex justify-evenly items-center h-full '>
                    <div className='w-[10%]'>
                        {/* <h1 className='text-[28px] font-bold'>Arctic Shield</h1> */}
                        <img src="/images/logo2.avif" alt="" className='w-[200px] ' />
                    </div>
                    <div className='w-[50%] border border-gray-400 flex  p-2 rounded-lg'>
                        <div className='pl-2'>
                            <CategoryMenu />
                        </div>
                        <input
                            type="text"
                            className="w-[75%] text-white bg-black pl-2 border border-t-0 border-r-0 border-b-0 border-l-2 border-gray-500"
                            placeholder={"Search product"}
                            style={{ outline: 'none' }}
                        />

                        <div className='flex justify-center items-center cursor-pointer'>
                            <CiSearch size={20} color='white' />
                        </div>
                    </div>
                    <div className='w-[10%] flex items-center gap-4'>
                        <div className='cursor-pointer'>
                            <BsPerson size={40} color='white' />
                        </div>
                        <div className='cursor-pointer'>
                            <CiHeart size={40} color='white' />
                        </div>
                        <div className='cursor-pointer'>
                            <CiShoppingCart size={40} color='white' />
                        </div>
                    </div>
                </div>
                <div className='p-4 h-full w-[88%] m-auto'>
                    <div className='p-2 flex justify-between'>
                        <ul className='flex gap-8'>
                            <li className='text-lg font-roboto cursor-pointer text-white'>Home</li>
                            <li className='text-lg font-roboto cursor-pointer text-white'>About Us</li>
                            <li className='text-lg font-roboto cursor-pointer text-white'>Our Products</li>
                            <li className='text-lg font-roboto cursor-pointer text-white'>Find Your Vehcile</li>
                            <li className='text-lg font-roboto cursor-pointer text-white'>Merch</li>
                            <li className='text-lg font-roboto cursor-pointer text-white'>Contact</li>
                        </ul>
                        <div className='flex gap-4 items-center justify-center cursor-pointer'>
                            <LuPhone size={20} color='white' />
                            <h2 className='text-lg text-white'>(3643) 1064 7572</h2>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header