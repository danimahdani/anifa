import { UseQueryResult, useQuery } from '@tanstack/react-query'

const fetchData = async (link: string): Promise<unknown> => {
  const response: Response = await fetch(`https://api.jikan.moe/v4${link}`)
  const data = await response.json()

  return data.data
}

export const useFetch = (link: string): UseQueryResult<unknown, unknown> => {
  return useQuery(['fetch data', link], () => fetchData(link), {
    keepPreviousData: true,
    refetchOnWindowFocus: false
  })
}
