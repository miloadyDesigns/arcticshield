import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaTiktok, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
const Footer = () => {
    return (
        <div className="w-screen bg-black pb-8">
            <div className="xs:w-[100%] lg:w-[80%] m-auto mt-4 flex xs:flex-col lg:flex-row justify-around">
                <div className="xs:w-[90%] lg:w-[25%] flex flex-col  pt-12 px-5">
                    <img src="/images/logo2.avif" alt="" className='w-[200px]' />
                    <p className="mt-4 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique sint harum, perspiciatis facilis dolore esse soluta eligendi? Repellat, quas dignissimos!</p>
                    <div className="flex gap-4 mt-4">
                        <FaInstagram size={30} color="white" />
                        <FaFacebook size={30} color="white" />
                        <FaTiktok size={30} color="white" />
                        <FaLinkedin size={30} color="white" />
                        <BsTwitterX size={30} color="white" />
                    </div>
                </div>
                <div className="xs:w-[90%] lg:w-[30%] pt-12 xs:px-5 lg:px-0">
                    <div className="flex xs:flex-col lg:flex-row justify-between">
                        <div>
                            <h1 className="text-white text-xl font-bold">Shop</h1>
                            <ul className="mt-4">
                                <li className="py-1 text-white">Wipers</li>
                                <li className="py-1 text-white">About Us</li>
                                <li className="py-1 text-white">Find Your Vehicle</li>
                                <li className="py-1 text-white">Our Product</li>
                                <li className="py-1 text-white">Merch</li>
                                <li className="py-1 text-white">Installation</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-white text-xl font-bold xs:mt-6 lg:mt-0">More</h1>
                            <ul className="mt-4">
                                <li className="py-1 text-white">Contact</li>
                                <li className="py-1 text-white">Return & Exchange</li>
                                <li className="py-1 text-white">Return Policy</li>
                                <li className="py-1 text-white">Privacy Policy</li>
                                <li className="py-1 text-white">Terms of Service</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xs:w-[90%] lg:w-[25%] pt-12 xs:px-5 lg:px-0">
                    <h1 className="text-white text-xl font-bold">Exclusive Benefits</h1>
                    <p className="mt-4 text-gray-400 text-[16px]">Sign up for exclusive offers, original stories, events and more.</p>
                    <div className="mt-4 w-[100%] flex items-center">
                        <input type="text" className="p-3 pl-4 w-[90%] rounded-lg" placeholder="Your Email" />
                        <div className="-ml-[40px]">
                            <IoMdSend size={30} color="black" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[80%] border border-gray-600 m-auto mt-8'></div>
            <div className='w-[80%]  m-auto py-3'>
                <h3 className='text-white'>© 2024 ClixAuto. Powered by MiloadyDesigns</h3>
            </div>
        </div>
    )
}

export default Footer