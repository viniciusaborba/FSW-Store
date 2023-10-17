'use client'

import { useSession } from 'next-auth/react'

export default function Home() {
  const { data } = useSession()

  return (
    <div>
      <h1>name: {data?.user?.name}</h1>
    </div>
  )
}
