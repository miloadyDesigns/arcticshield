'use client'
import React, { useEffect, useState } from 'react'

import CategoryMenu from '../Widgets/CategoryMenu';
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";


const Header = ({ }) => {

    return (
        <>
            <div className='bg-[#0089da] w-screen p-3 xs:hidden lg:block'>
                <div className='w-[90%] m-auto flex justify-between '>
                    <h1 className='text-white font-bold text-lg pl-4'>100% Satisfaction Guarantee
                        <span className='underline'> Shop Now</span>
                    </h1>
                    <h1 className='text-white font-bold text-lg pr-4'>United State (USD $) |
                        <span > English</span>
                    </h1>
                </div>
            </div>
            <header className='w-screen xs:pt-0 lg:pt-6  bg-black xs:pb-4 lg:mb-0 '>

                <div className='w-[100%] m-auto h-full xs:hidden lg:block'>
                    <div className='flex justify-evenly items-center h-full '>
                        <div className='w-[10%]'>
                            <img src="/images/logo1.png" alt="" className='w-[200px] ' />
                        </div>
                        <div className='w-[55%] border border-gray-400 flex  p-2 rounded-lg '>
                            <div className='pl-2'>
                                <CategoryMenu />
                            </div>
                            <input
                                type="text"
                                className="w-[95%] text-white bg-black pl-2 border border-t-0 border-r-0 border-b-0 border-l-2 border-gray-500"
                                placeholder={"Search product"}
                                style={{ outline: 'none' }}
                            />

                            <div className='flex justify-center items-center cursor-pointer'>
                                <CiSearch size={30} color='white' />
                            </div>
                        </div>
                        <div className='w-[10%] flex items-center gap-4'>
                            <div className='cursor-pointer'>
                                <BsPerson size={28} color='white' />
                            </div>
                            <div className='cursor-pointer'>
                                <CiHeart size={30} color='white' />
                            </div>
                            <div className='cursor-pointer'>
                                <CiShoppingCart size={30} color='white' />
                            </div>
                        </div>
                    </div>
                    <div className='pl-4 h-full w-[90%] m-auto '>
                        <div className='pl-2 pt-4 flex justify-between'>
                            <ul className='flex gap-6'>
                                <li className='text-lg font-roboto cursor-pointer text-white'>Home</li>
                                <li className='text-lg font-roboto cursor-pointer text-white'>About Us</li>
                                <li className='text-lg font-roboto cursor-pointer text-white'>Our Products</li>
                                <li className='text-lg font-roboto cursor-pointer text-white'>Find Your Vehcile</li>
                                <li className='text-lg font-roboto cursor-pointer text-white'>Merch</li>
                                <li className='text-lg font-roboto cursor-pointer text-white'>Contact</li>
                            </ul>
                            <div className='flex gap-4 items-center justify-center cursor-pointer'>
                                {/* <LuPhone size={20} color='white' /> */}
                                {/* <h2 className='text-lg text-white'>(3643) 1064 7572</h2> */}
                            </div>
                        </div>

                    </div>
                </div>
                <div className='xs:block lg:hidden w-[100%]'>
                    <div className='flex justify-between -ml-6 w-full'>
                        <div className='p-2 '>
                            <img src="/images/logo1.png" alt="" className='w-[150px] ' />
                        </div>
                        <div className='flex items-center gap-2 '>
                            <div className='cursor-pointer'>
                                <BsPerson size={30} color='white' />
                            </div>
                            <div className='cursor-pointer'>
                                <CiShoppingCart size={30} color='white' />
                            </div>
                            <div className='cursor-pointer'>
                                <RxHamburgerMenu size={30} color='white' />
                            </div>
                        </div>
                    </div>
                    <div className='w-[100%] border border-gray-400 flex  p-1 rounded-lg -ml-6 mt-2'>
                        <div className='pl-1'>
                            <CategoryMenu />
                        </div>
                        <input
                            type="text"
                            className="w-[90%] text-white bg-black pl-2 border border-t-0 border-r-0 border-b-0 border-l-2 border-gray-500"
                            placeholder={"Search product"}
                            style={{ outline: 'none' }}
                        />

                        <div className='flex justify-center items-center cursor-pointer'>
                            <CiSearch size={25} color='white' />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header