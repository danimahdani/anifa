import Image from 'next/image'
import clsx from 'clsx'
import React from 'react'
import { AnimeType } from '../types/types'

const Card = ({ title, title_english, image, year }: AnimeType) => {
  return (
    <div className='w-full h-60 lg:h-80 lg:w-56 relative group overflow-hidden inline-block'>
      <Image
        priority={true}
        src={image}
        alt='Anime Image'
        className='object-cover h-full w-full absolute group-hover:scale-125 transition-all duration-500'
        width={800}
        height={800}
      />
      <div className='group-hover:bg-black/50 h-full w-full relative transition-all duration-500 p-3'>
        <p
          className={clsx(
            'text-white font-bold',
            'absolute bottom-0 translate-y-6 opacity-0',
            'transition-all duration-300 delay-100',
            'group-hover:-translate-y-16 group-hover:opacity-100'
          )}
        >
          {title_english ?? title}
        </p>
        <p
          className={clsx(
            'font-bold bg-white/80 px-2 py-1 rounded-md',
            'absolute bottom-0 translate-y-6 opacity-0',
            'transition-all duration-300 delay-75',
            'group-hover:-translate-y-6 group-hover:opacity-100'
          )}
        >
          {year}
        </p>
      </div>
    </div>
  )
}

export default Card
