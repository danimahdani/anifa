"use client"
import React from "react"
import SwiperPart from "./parts/SwiperPart"
import HeadersPart from "./parts/HeaderPart"

const AnimeUpcomingComp = () => {
  return (
    <div>
      <HeadersPart title='Upcoming Anime' url='/upcoming' />
      <div className=''>
        <SwiperPart type='upcoming' />
      </div>
    </div>
  )
}

export default AnimeUpcomingComp
