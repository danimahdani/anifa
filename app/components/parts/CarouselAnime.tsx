import React from "react"
import AnimeAiringComp from "../anime-airing"
import AnimeUpcomingComp from "../anime-upcoming"
const Layout = () => {
  return (
    <div className='flex flex-col gap-10'>
      <AnimeAiringComp />
      <AnimeUpcomingComp />
    </div>
  )
}

export default Layout
