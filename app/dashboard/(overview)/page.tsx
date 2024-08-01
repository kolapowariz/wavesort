'use client';
import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image';


export default function Dashboard() {
  const { data: session } = useSession()
  return (
    <>
        <h1>Dashboard</h1>
      {
        session && (
          <div>
            <Image src={session.user?.image as string} className='rounded-full w-20 h-auto' alt="user image" width={100} height={100} />
            <p>Welcome {session.user?.name}</p>
            <p>{session.user?.email}</p>
          </div>
        ) 
      }
    </>
  )
}