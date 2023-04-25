import ListAnime from "@/app/components/ListAnime"
import ContainerLayout from "@/app/components/parts/ContainerLayout"
import getQueryClient from "@/app/libs/utils/getQueryClient"
import Hydrate from "@/app/libs/utils/hydrate.client"
import { dehydrate } from "@tanstack/react-query"
import React from "react"

interface Filter {
  params: {
    filter: string
  }
}

async function getAnimes(filter: string) {
  const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=1&filter=${filter}}`)
  const animes = await res.json()
  return animes
}

const PaginationAnime = async ({ params }: Filter) => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({
    queryKey: ["hydrate-anime"],
    queryFn: () => getAnimes(params.filter)
  })
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ContainerLayout>
        <ListAnime filter={params.filter} />
      </ContainerLayout>
    </Hydrate>
  )
}

export default PaginationAnime
