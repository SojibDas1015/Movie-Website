import React, { useEffect, useState } from 'react'
import CatagoriesNav from './CatagoriesNav'
import toast from 'react-hot-toast'
import MovieCard from './MovieCard'
import MovieSlider from './MovieSlider'

export default function MovieGallary({search}) {
    const [movie, setMovie]= useState([])
    const [loading, setloading]= useState(true)
    const [selectcatagories, setselectcatagories]= useState("All")
    const [showAll, setshowAll]=useState(false)
    useEffect(()=>{
        fetch("/movie.json").then(res=> res.json()).then(data=>{ setMovie(data); toast.success('Successfully Data Loaded!')}).catch((error)=> toast.error("Fail Data Loading!")).finally(()=> setloading(false))
    },[])
    const Catagoriews = ["All",...new Set(movie.map(data=> data.category))];
    const filter = selectcatagories === "All" ? movie : movie.filter((m)=> m.category === selectcatagories);
    const visiblemovie = showAll ? filter : filter.slice(0,8);
    const ratings = movie.filter(movie=> movie.rating > 7)
    .filter((moviee)=>moviee.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className='w-11/12 mx-auto py-10'>
      <h1 className='text-md md:text-lg lg:text-2xl font-bold'>RECOMMENDED FOR YOU</h1>
      <CatagoriesNav Catagoriews={Catagoriews}
      selectcatagories={selectcatagories}
      setselectcatagories={setselectcatagories}
      ></CatagoriesNav>
      {
        loading? 
        (<div className='flex justify-center items-center h-screen'>
          <span className="loading loading-spinner loading-xl text-yellow-500"></span>
        </div>)
        : filter.length > 0 ?
        (
          <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
              visiblemovie.map((movie)=>
              <MovieCard key={movie.id} movie={movie}></MovieCard>
              )
            }
          </div>
          {
            filter.length > 8 && (

              <div className='flex justify-center mt-10'>
                <button className='bg-amber-500 py-2 px-3 rounded-full text-black font-bold'
                onClick={()=> setshowAll(!showAll)}
                >{showAll? "Show Less": "Show More"}</button>
              </div>
            )
          }
          </>
        ): (<p>No Movie Found</p>)
      }
      <h1 className='font-bold text-center mt-5 text-[35px]'>Top Ratings Movies</h1>
      <MovieSlider movies={ratings}></MovieSlider>
    </div>
  )
}
