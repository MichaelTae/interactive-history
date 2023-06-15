'use client';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
       <button type="button" className='border w-40 h-10' onClick={() => router.push('/cavalry')}>
      Dashboard
    </button>

    </main>
  )
}
