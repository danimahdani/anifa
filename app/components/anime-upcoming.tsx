'use client'
import React from 'react'
import { useAxios } from '../helpers/useAxios'
import { Anime } from '../types/types'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Card from './card'

const AnimeUpcomingComp = () => {
  const { data, isLoading } = useAxios(`/top/anime?filter=upcoming`)
  const animeData = data as Anime[]

  if (isLoading) return <h3>Loading Anime Upcoming...</h3>

  return (
    <div>
      <div className='flex justify-between'>
        <h3 className='text-lg text-white font-bold mb-2'>Upcoming anime</h3>
        <h3 className='text-md text-white font-bold mb-2'>See More</h3>
      </div>
      <Swiper
        modules={[Navigation]}
        className='mySwiper'
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30
          }
        }}
      >
        {animeData?.map((e: Anime) => (
          <SwiperSlide key={e.mal_id}>
            <Card
              image={e.images.webp.large_image_url}
              title={e.title}
              title_english={e.title_english}
              year={e.year ?? e.aired.prop.from.year}
              mal_id={e.mal_id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default AnimeUpcomingComp
