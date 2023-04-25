import Image from "next/image"
import React from "react"

const AnimePopular = () => {
  return (
    <div className='mb-10 relative'>
      <div className='h-14 w-full bg-rose-600/50 absolute z-10'></div>
      <div className='max-w-7xl mx-auto relative'>
        <div className='absolute inset-0 bg-gradient-to-r from-black'>
          <div className='absolute mt-40 w-3/4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, inventore consequatur dolor laboriosam
            necessitatibus consequuntur, id, molestias natus cum quam blanditiis eveniet! Inventore nesciunt vel facilis
            nihil optio deleniti quia!
          </div>
        </div>
        <Image
          className='w-full max-h-[80vh] object-contain'
          width={800}
          height={800}
          src='https://img.youtube.com/vi/VW_LxM4tt-o/maxresdefault.jpg'
          alt='Popular Anime'
        />
      </div>
    </div>
  )
}

export default AnimePopular
