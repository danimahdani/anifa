// ClientComponent.jsx
'use client'

import { useQuery } from '@tanstack/react-query'

export default function ClientComponent() {
  const { data } = useQuery({
    queryKey: ['1'],
    queryFn: () => 'Client',
    // Set staleTime to see that we get the "Server" output,
    // can later switch tabs to trigger revalidation and see we
    // get the "Client" output
    staleTime: 10000
  })

  return <div>{data}</div>
}
