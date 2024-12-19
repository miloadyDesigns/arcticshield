import React from 'react'

const AdvantageCard = ({ title, description, image }) => {
    return (
        <div className="p-2  rounded-lg xs:w-[100%] lg:w-[23%]  flex flex-col items-center pt-16 pb-10">
            <img src={image} alt="" className="w-[180px] h-[180px]" />
            <div className='flex flex-col items-center h-full mt-4'>
                <h1 className="p-2 text-2xl font-bold font-roboto text-white">{title}</h1>
                <p className="text-[15px] text-white font-semibold text-left px-1">{description}</p>
            </div>
        </div>
    )
}

export default AdvantageCard