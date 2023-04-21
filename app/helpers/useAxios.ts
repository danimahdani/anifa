import { UseQueryResult, useQuery } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'

const axiosData = async (link: string): Promise<unknown> => {
  const response: AxiosResponse = await axios.get(`https://api.jikan.moe/v4${link}`)
  const { data } = response

  return data
}

export const useAxios = (link: string): UseQueryResult<unknown, unknown> => {
  return useQuery(['fetch data', link], () => axiosData(link), {
    keepPreviousData: true,
    refetchOnWindowFocus: false
  })
}
