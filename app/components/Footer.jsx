import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image alt='' src={isDarkMode ? assets.logo_dark:assets.logo} className='w-36 mx-auto' />
        <div className='w-max flex items-center gap-2 mx-auto'>
        <Image alt='' src={isDarkMode ?assets.mail_icon_dark : assets.mail_icon} className='w-6' />
        omaralalfy30@gmail.com
      </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p> © 2025 Omar alalfy. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-between mt-4 sm:mt-0'>
            <li><a target='blank' href="https://github.com/omar304050">GitHup</a></li>
            <li><a target='blank' href="https://www.instagram.com/omaralfy_?igsh=cXV5cGN1ZWtna2Nn&utm_source=qr">Instagram</a></li>
            <li><a target='blank' href="https://www.linkedin.com/in/omar-alalfy-b2463429b/">Linkedin</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
