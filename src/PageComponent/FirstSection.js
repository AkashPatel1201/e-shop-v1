import React from 'react'
import SectionHomeImage from "../Image/FirstHeader.png"

const FirstSection = () => {
    return (
        <section className="flex bg-[#f9f9f9]">
            <div className="w-6/12 flex justify-center">
                <img src={SectionHomeImage} alt="Home" className='w-[65%] h-fit' />
            </div>
            <div className="w-6/12  ">
                <h5 className='font-semibold text-base tracking-widest text-violet-600 mt-11 '>NEW RELEASE</h5>
                <h1 className='font-medium text-6xl mt-16 leading-normal mb-9 font-serif'>ARRIVALS SALES</h1>
                <p className='text-gray-600 text-base font-normal uppercase tracking-wider font-serif'>E-shop Project Comming soon </p>
                <figure className='mt-11'>
                    <button className='border border-1 border-violet-600 rounded text-white bg-violet-600 px-4 py-3 me-5'>Shop Now</button>
                    <button className='border border-1 border-violet-600 rounded px-4 py-3 text-violet-600 hover:bg-violet-600 hover:text-white'>Read More</button>
                </figure>
            </div>
        </section>
    )
}

export default FirstSection