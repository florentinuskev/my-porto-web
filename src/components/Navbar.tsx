import Link from 'next/link'

import { useState } from 'react';

import { HiMenu, HiOutlineX } from 'react-icons/hi';

const Navbar = ({ isSticky }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`w-full flex flex-1 flex-col md:flex-row top-0 z-[500] text-white p-5 items-center border-b-2 bg-gray-600 ${isSticky ? 'sticky' : 'fixed'
            }`}>
            <div className='flex items-center w-full justify-center bg-gray-600'>
                <h1 className='md:mr-auto md:ml-5 text-3xl items-center font-bold text-center md:text-left'>Kevin Gavino</h1>
                <div className='md:hidden border rounded p-1 ml-auto hover:click-pointer' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiOutlineX size={35} /> : <HiMenu size={35} />}
                </div>
            </div>
            {/* Primary Menu*/}
            <div className='hidden md:flex flex-row ml-auto mr-5 justify-between items-center'>
                <Link href='/' className='mx-2'><p>Home</p></Link>
                <Link href='/projects' className='mx-2'><p>Programming</p></Link>
                <Link href='/pvgraphy' className='mx-2'><p>Photo and Videography</p></Link>
            </div>
            {/* Mobile Menu*/}
            <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-center bg-gray-600`} >
                <Link href='/' className='mx-3'><p className='text-2xl'>Home</p></Link>
                <Link href='/projects' className='mx-2'><p className='text-2xl'>Programming</p></Link>
                <Link href='/pvgraphy' className='mx-2'><p className='text-2xl'>Photo and Videography</p></Link>
            </div>

        </div>
    )
}

export default Navbar