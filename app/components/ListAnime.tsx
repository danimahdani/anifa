"use client"
import { useQuery } from "@tanstack/react-query"
import React, { memo, useState } from "react"
import Loading from "../loading"
import { AnimeTypeCompleted } from "../types/types"
import ErrorPage from "../error_page"
import Image from "next/image"
import { AiFillStar } from "react-icons/ai"
import ColorizedGendre from "./parts/ColorizedGendre"

async function getAnimes(page: number, filter: string) {
  const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page.toString()}&filter=${filter}&limit=10`)
  const animes = await res.json()
  return animes
}

const ListAnime = ({ filter }: { filter: string }) => {
  const [page, setPage] = useState(1)

  const { data, isLoading, isError } = useQuery({
    queryKey: ["initial-animes", { page }],
    queryFn: () => getAnimes(page, filter),
    keepPreviousData: true
  })

  if (isLoading) return <Loading />
  if (isError) return <ErrorPage />

  return (
    <>
      <h1 className='mx-auto text-3xl mb-5 text-white capitalize border-b-2 border-white pb-2 max-w-max'>
        Anime {filter}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10'>
        {data.data.map((e: AnimeTypeCompleted) => (
          <div key={e.mal_id} className=''>
            <Image
              className='object-fill w-full min-h-[500px]'
              src={e.images.jpg.large_image_url}
              width={400}
              height={500}
              alt='Poster Anime'
            />
            <div className='flex flex-col gap-2 mt-2'>
              <h5 className='text-white text-base'>
                {e.year ?? e.aired.prop.from.year} - {e.status}
              </h5>
              <h1 className='text-white text-1xl font-bold'>{e.title_english}</h1>
              <div className='flex items-center gap-x-1 '>
                <AiFillStar className='text-yellow-300 text-lg' />
                <h4 className='text-white'>Score : {e.score}/10</h4>
              </div>
              <div className='flex gap-2 flex-wrap'>
                {e.genres.map((e) => (
                  <ColorizedGendre key={e.mal_id} gendreId={e.mal_id} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-between mt-5'>
        {page > 1 && (
          <button className='bg-white px-2 py-1 text-lg rounded-lg' onClick={() => setPage((prev) => prev - 1)}>
            Previous
          </button>
        )}{" "}
        {page < 756 && (
          <button className='bg-white px-2 py-1 text-lg rounded-lg' onClick={() => setPage((prev) => prev + 1)}>
            Next
          </button>
        )}
      </div>
    </>
  )
}

export default memo(ListAnime)
