import React from 'react'

const AdvantageCard = ({ title, description, image }) => {
    return (
        <div className="p-2 bg-white rounded-lg xs:w-[100%] lg:w-[23%]  flex flex-col items-center pt-16 pb-10">
            <img src={image} alt="" className="w-[80px] h-[80px]" />
            <div className='flex flex-col items-center h-full mt-4'>
                <h1 className="p-2 text-xl font-bold font-roboto text-black">{title}</h1>
                <p className="text-[15px] text-gray-800 font-semibold text-left px-1">{description}</p>
            </div>
        </div>
    )
}

export default AdvantageCard