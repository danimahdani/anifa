"use client"
import Image from "next/image"
import React from "react"
import ColorizedGendre from "./parts/ColorizedGendre"
import { useAxios } from "../helpers/useAxios"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import { Autoplay } from "swiper"
import { AnimeTypeCompleted } from "../intefaces"
import Loading from "../loading"

const AnimePopular = () => {
  const { data, isLoading } = useAxios(`/top/anime?filter=upcoming&limit=10`)
  const animeData = data as AnimeTypeCompleted[]

  if (isLoading) return <Loading />

  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      modules={[Autoplay]}
      className='mySwiper'
    >
      {animeData.map(
        (e: AnimeTypeCompleted) =>
          e.trailer.images.maximum_image_url && (
            <SwiperSlide key={e.mal_id}>
              <div className='mb-3'>
                {/* <div className='h-14 w-full bg-rose-600/50 absolute z-10'></div> */}
                <div className='flex w-full relative'>
                  <div className='bg-black-linear text-white absolute inset-0 p-10 overflow-hidden'>
                    <div className='max-h-28 overflow-hidden lg:overflow-visible lg:max-w-lg flex flex-col gap-y-5 '>
                      <h1 className='text-lg lg:text-5xl'>{e.title_english ?? e.title}</h1>
                      <span className='text-md lg:text-2xl'>Score: 8/10</span>
                      <span className='text-sm lg:text-md max-h-64'>
                        {e.synopsis && e.synopsis.replace(/\n+/g, "").replace(/\[Written by MAL Rewrite\]/g, "")}
                      </span>
                      <div className='flex gap-1 lg:gap-5 flex-wrap'>
                        <ColorizedGendre genreId={1} />
                        <ColorizedGendre genreId={2} />
                        <ColorizedGendre genreId={8} />
                        <ColorizedGendre genreId={10} />
                      </div>
                    </div>
                  </div>
                  <Image
                    className='object-cover ml-auto w-full h-full lg:max-h-[60vh] lg:max-w-6xl'
                    width={1500}
                    height={1500}
                    src={e.trailer.images.maximum_image_url ?? ""}
                    alt='Popular Anime'
                    priority
                  />
                </div>
              </div>
            </SwiperSlide>
          )
      )}
    </Swiper>
  )
}

export default AnimePopular
