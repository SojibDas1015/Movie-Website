import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaHeartCircleCheck } from 'react-icons/fa6';
import { IoStarHalf } from 'react-icons/io5';


export default function MovieCard({movie}) {
  return (
    <div>
      <img className='transition-transform duration-300 hover:scale-105 w-full h-[80%] object-cover rounded-2xl' src={movie.card_picture} alt={movie.title} />
      <div className='mt-2'>
        <div>
        <div className='flex justify-between items-center'>
            <h3 className='font-bold'>{movie.title}</h3>
            <div className='flex gap-2'>
                <FaEye  className='text-gray-500'/>
                <FaHeartCircleCheck className='text-rose-500' />
            </div>
        </div>
        <p>{movie.released_date}</p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='bg-yellow-500 font-bold text-black px-2 rounded-sm'>{movie.platform}</p>
        <div className='flex gap-2 items-center'>
            <IoStarHalf className='text-yellow-500' />
            <p>{movie.rating}</p>
        </div>
      </div>
      </div>
    </div>
  )
}
