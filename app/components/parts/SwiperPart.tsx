"use client"
import React, { memo } from "react"
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { useAxios } from "@/app/helpers/useAxios"
import { Anime } from "@/app/types/types"
import Card from "./card"

const SwiperPart = ({ type }: { type: string }) => {
  const { data, isLoading } = useAxios(`/top/anime?filter=${type}`)
  const animeData = data as Anime[]

  if (isLoading) return <h3>Loading Anime...</h3>
  return (
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
          slidesPerView: 6,
          spaceBetween: 20
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
  )
}

export default memo(SwiperPart)
