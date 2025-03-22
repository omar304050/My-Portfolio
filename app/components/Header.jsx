import React from 'react'
import Image from "next/image";
import { assets } from '@/assets/assets';

const Header = () => {
    return (
        <div  className='w-11/12 max-w-3xl text-center mx-auto flex flex-col justify-center items-center gap-4 h-screen '>
            <div>
                <Image src={assets.profile_img} alt='' className='rounded-full w-24' />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 fontOvo'> Hi Iam Omar Alalfy <Image src={assets.hand_icon} alt='' className='w-6' /></h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] fontOvo'>
               frontend web developer based in Egypt
            </h1>
            <p className='max-w-2xl ma-auto fontOvo'>
                Iam a frontend developer form Egypt,  with 1 year of experience  
            </p>

            <div className='flex flex-col sm:flex-row items-center  gap-4 mt-4'> 
                <a href="#contact" 
                className='px-10 py-3 border text-white border-white rounded-full bg-black flex items-center gap-2'
                >contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /> </a>
                <a href="/Omaralalfy.pdf" download
                className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'
                >my resume <Image src={assets.download_icon} alt='' className='w-4' /> </a>
            </div>
        </div>
    )
}

export default Header
