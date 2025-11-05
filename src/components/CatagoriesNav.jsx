import React from 'react'

export default function CatagoriesNav({Catagoriews, selectcatagories, setselectcatagories}) {
  return (
    <div className='flex flex-wrap justify-center sm:justify-start gap-3 md:gap-5 py-10'>
      {
        Catagoriews.map((catadata)=>
          (<button
            onClick={()=> setselectcatagories(catadata)}
            key={catadata} className={`px-3 py-2 rounded-full
              ${selectcatagories == catadata? "bg-amber-500 text-black" : "border border-yellow-500 hover:bg-amber-500 hover:text-black"}
              `}>{catadata}</button>)
            )
      }


    </div>
  )
}
