'use client';

import { useRouter } from 'next/navigation'
import Navigation from './components/navigation/navigation';
export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col relative border justify-between p-24 bg-[#e6dbce]/20 ">
     
    <Navigation/>
    


    </main>
  )
}
