"use client"
import React from "react"
import SwiperPart from "./parts/SwiperPart"
import HeadersPart from "./parts/HeaderPart"

const AnimeAiringComp = () => {
  return (
    <div>
      {/* <button className="flash-button">Click me</button> */}
      <HeadersPart title='Airing Anime' url='/airing' />
      <div className=''>
        <SwiperPart type='airing' />
      </div>
    </div>
  )
}

export default AnimeAiringComp
