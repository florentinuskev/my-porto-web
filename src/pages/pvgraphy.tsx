import { useRef, useState } from "react"

import Navbar from "@/components/Navbar"

const pvgraphy = () => {
    return (
        <div className='h-[100%] w-[100%] bg-gray-600'>
            <Navbar isSticky={true} />
            <div className='h-[100vh] w-[100%] text-white p-10 text-center'>
                <h1 className='text-7xl font-bold'>Photography and Videography</h1>
                <p className='text-xl'>In the free time, I did some photo and videography works. Here are several Pictures and Videos of my work.</p>
            </div>
        </div>
    )
}

export default pvgraphy