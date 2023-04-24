import { dehydrate } from '@tanstack/query-core'
import getQueryClient from '../libs/utils/getQueryClient'
import Hydrate from '../libs/utils/hydrate.client'
import ListAnime from '../components/ListAnime'

async function getAnimes() {
  const res = await fetch('https://api.jikan.moe/v4/top/anime?page=1')
  const animes = await res.json()
  return animes
}

export default async function AnimeAiring() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['hydrate-anime'], getAnimes)
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ListAnime />
    </Hydrate>
  )
}
