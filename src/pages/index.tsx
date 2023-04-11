import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import { useRef, useEffect, useState } from 'react'

import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isReached, setIsReached] = useState(false);

  const handleWindowScrollAndResize = (e: any) => {

    if (isReached) {
      setIsReached(false);
    }

    if (sectionRef.current != null) {
      if ((sectionRef.current.getBoundingClientRect().top - window.innerHeight) <= -800) {
        setIsReached(true);
      }
    }
  }

  const sectionRef = useRef<HTMLDivElement | any>();

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", handleWindowScrollAndResize);
      window.addEventListener("resize", handleWindowScrollAndResize);
    }

    return (() => {
      window.removeEventListener("scroll", handleWindowScrollAndResize);
      window.removeEventListener("resize", handleWindowScrollAndResize);
    })

  }, [handleWindowScrollAndResize])

  return (
    <>
      <Head>
        <title>Kevin Gavino || Portofolio Website</title>
        <meta name="description" content="My name is Kevin Gavino, currently a freshgraduate from Xi'an Jiaotong - The Liverpool University,
                that can be considered as fullstack developer. I love all kind about Business, Technology, Photography, and Videography. I am a hardworking, diligent, and honest person." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[100vh] bg-gray-600">
        <div className="h-full bg-gray-600 flex justify-center items-center">
          <h1 className='text-8xl font-bold text-white border-b-8'>Hi!</h1>
        </div>
        <div className="h-full bg-gray-600 flex justify-center items-center flex-col">
          <h1 className='text-7xl font-bold text-white'>My name is</h1>
          <h1 className='text-7xl font-bold text-white border-b-8'>Kevin Gavino!</h1>
        </div>
        <div ref={sectionRef} className="flex flex-col justify-center items-center h-full w-full bg-gray-600">
          {isReached ? <Navbar /> : ''}
          <div className='flex justify-center items-center grid grid-cols-2 gap-4 justify-between h-full w-full p-10'>
            <div className='h-[20%] w-[100%] p-2 flex flex-col'>
              <h2 className='text-4xl font-bold text-white text-left'>My Background</h2>
              <p className='text-xl text-white text-justify'>Currently a freshgraduate from Xi'an Jiaotong - The Liverpool University,
                that can be considered as fullstack developer. I love all kind about Business, Technology, Photography, and Videography. I am a hardworking, diligent, and honest person.</p>
            </div>

            <div className='h-[20%] w-[100%] p-2 flex flex-col text-white'>
              <h2 className='text-4xl font-bold text-left'>My Experiences</h2>
              <p className='text-xl text-justify'>I did some work and obtain some experiences when I joined some organization in my Highschool and in my College.</p>
              <p className='text-xl font-bold'>Working Experiences:</p>
              <ul>
                <li>1. Formulatrix - Software Engineer (Sept-Oct 2021)</li>
              </ul>
              <p className='text-xl font-bold'>Organization Experiences:</p>
              <ul>
                <li>1. Suzhou Indonesian Student Community - Band Leader and Videographer (2019-2020)</li>
                <li>2. Highschool Student Council - Journalism Team Leader (2017-2018)</li>
              </ul>
            </div>

            <div className='h-[20%] w-[100%] p-2 flex flex-col justify-center text-white'>
              <h2 className='text-4xl font-bold text-left'>Programming</h2>
              <p className='text-xl text-justify'>I faced my first programming language which is the PAWN language when I was in Elementary School. Since that, I went through many different programming language such as C, C#, Java, Javascript, Python, and Golang. I love to do programming, since it can create something with a text.</p>
              <Link href="/projects"><p className='underline italic'>More about my work...</p></Link>
            </div>

            <div className='h-[20%] w-[100%] p-2 flex flex-col justify-center text-white'>
              <h2 className='text-4xl font-bold text-left'>Photography and Videography</h2>
              <p className='text-xl text-justify'>Another thing that I love todo is Photography and Videography, this activity is another activity that can be considered as my hobby. I started to loving this activity since I was in Highschool, I have been choosen as the leader of Student Council Journalism Team Leader and I need to learn to take a pictures of moment.</p>
              <Link href="/pvgraphy"><p className='underline italic'>More about my work...</p></Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
