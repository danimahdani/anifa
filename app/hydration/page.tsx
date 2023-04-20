import { dehydrate } from '@tanstack/query-core'
import ListUsers from './list-users'
import getQueryClient from '../libs/utils/getQueryClient'
import Hydrate from '../libs/utils/hydrate.client'
import { User } from '../types/types'

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = (await res.json()) as User[]
  return users
}

export default async function Hydation() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['hydrate-users'], getUsers)
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ListUsers />
    </Hydrate>
  )
}
