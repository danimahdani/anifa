'use client'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import Loading from '../loading'
import { Anime } from '../types/types'
import ErrorPage from '../error_page'

async function getAnimes(page: number) {
  const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page.toString()}&limit=10`)
  const animes = await res.json()
  return animes
}

const ListAnime = () => {
  const [page, setPage] = useState(1)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['initial-animes', { page }],
    queryFn: () => getAnimes(page),
    keepPreviousData: true
  })

  if (isLoading) return <Loading />
  if (isError) return <ErrorPage />

  return (
    <div>
      <ul>
        {data.data.map((e: Anime) => (
          <li key={e.mal_id}>{e.title_english}</li>
        ))}
      </ul>
      {page > 1 && <button onClick={() => setPage((prev) => prev - 1)}>Previous</button>}{' '}
      {page < 756 && <button onClick={() => setPage((prev) => prev + 1)}>Next</button>}
    </div>
  )
}

export default ListAnime
