'use client';


import Image from 'next/image';
import Navigation from './components/navigation/navigation';
import MainBackground from '../public/MainBackground.jpg'
export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col relative  justify-between p-24  ">
     <Image src={MainBackground} fill placeholder='blur' className="absolute z-[-1] object-cover" alt='Roman Brittanica campaign background image'/>
    <Navigation/>
    


    </main>
  )
}
