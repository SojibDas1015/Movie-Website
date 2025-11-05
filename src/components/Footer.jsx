import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";


export default function Footer() {
  return (
    <div className='bg-[#181818]'>
      <div className='grid grid-cols-5  w-11/12 mx-auto py-10'>
        <div>
            <h1 className='mb-3 font-grrif text-yellow-500 text-2xl'>DRAMATIC</h1>
            <p className='cursor-pointer hover:underline'><a href="">Enjoy your Movie time</a></p>
        </div>
        <div>
            <p className='mb-3 font-bold text-gray-400'>NAVIGATION</p>
            <p className='cursor-pointer hover:underline'><a href="">HOME</a></p>
            <p className='cursor-pointer hover:underline'><a href="">TV SHOW</a></p>
            <p className='cursor-pointer hover:underline'><a href="">MOVIES</a></p>
            <p className='cursor-pointer hover:underline'><a href="">NEW</a></p>
        </div>
        <div>
            <p className='mb-3 font-bold text-gray-400'>LEGAL</p>
            <p className='cursor-pointer hover:underline'><a href="">Privacy Policy</a></p>
            <p className='cursor-pointer hover:underline'><a href="">Terms of Service</a></p>
            <p className='cursor-pointer hover:underline'><a href="">Cookie Preferences</a></p>
            <p className='cursor-pointer hover:underline'><a href="">Corporate Information</a></p>
        </div>
        <div>
            <p className='mb-3 font-bold text-gray-400 '>TALK TO US</p>
            <p className='cursor-pointer hover:underline'><a href="">support@ercom.com</a></p>
            <p className='cursor-pointer hover:underline'><a href="">+66 2399 1145</a></p>
        </div>
        <div>
            <p className='mb-3 font-bold text-gray-400'>FOLLOW US</p>
            <div className='flex gap-3 text-2xl'>
                <FaTwitter className='cursor-pointer '/>
                <FaYoutube className='cursor-pointer '/>
                <FaFacebookF className='cursor-pointer '/>
            </div>
        </div>
      </div>
    </div>
  )
}
