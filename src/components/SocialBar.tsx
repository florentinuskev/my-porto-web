import React from 'react'

//Icons
import { BsInstagram, BsLinkedin, BsMailbox } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const SocialBar = () => {
    return (
        <div className='flex flex-row mt-2'>
            <a href="https://www.instagram.com/florentinuskev/" target="_blank" className='mr-2 p-2 rounded-full border hover:click-pointer'><BsInstagram size={30} /></a>
            <a href="https://www.linkedin.com/in/florentinuskev2410/" target="_blank" className='mx-2 p-2 rounded-full border hover:click-pointer'><BsLinkedin size={30} /></a>
            <a href="mailto:florentinus.keving@gmail.com" target="_blank" className='mx-2 p-2 rounded-full border hover:click-pointer'><SiGmail size={30} /></a>
        </div>
    )
}

export default SocialBar