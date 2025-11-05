import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import MovieGallary from '../components/MovieGallary'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <ImageSlider></ImageSlider>
      
      <main>
        <MovieGallary></MovieGallary>
        <Toaster position='top-right'></Toaster>
      </main>
    </div>
  )
}
