import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import MovieGallary from '../components/MovieGallary'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer'

export default function Home() {
  const [search, setsearch] = useState("")
  return (
    <div>
      <Navbar search={search} setsearch={setsearch}></Navbar>
      <ImageSlider></ImageSlider>
      
      <main>
        <MovieGallary search={search}></MovieGallary>
        <Toaster position='top-right'></Toaster>
        <Footer></Footer>
      </main>
    </div>
  )
}
