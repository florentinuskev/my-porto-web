import Head from 'next/head'

import { Inter } from 'next/font/google'
import Link from 'next/link'

import { useRef, useEffect, useState } from 'react'

import useScrollSnap from 'react-use-scroll-snap';

// Images
import Image from 'next/image'
import profilePic from '../images/my_img.jpg'
import backgroundPic from '../images/background.png';
import certiPic from '../images/certificate.png';
import workPic from '../images/working.png';

// Components
import Navbar from '@/components/Navbar';
import SocialBar from '@/components/SocialBar';

// Fonts
import { FcCamera, FcEngineering } from 'react-icons/fc';

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

  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 5, delay: 30 });

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

      <main ref={scrollRef} className="h-screen">
        <div className="flex flex-col w-full h-screen justify-center items-center">
          <h1 className='text-8xl font-bold'>Hi!</h1>
        </div>

        <div className="flex flex-row h-screen justify-center items-center">
          <Image src={profilePic} width={150} height={150} alt="Profile Picture" className='rounded-full' />
          <div className='ml-5'>
            <h1 className='text-3xl md:text-6xl'>My name is</h1>
            <h1 className='text-3xl md:text-6xl font-bold'>Kevin Gavino!</h1>
            <SocialBar />
          </div>
        </div>

        {isReached ? <Navbar /> : ''}

        <div ref={sectionRef} className='flex h-screen justify-center items-center'>
          <div className='flex flex-col md:flex-row justify-center items-center p-10 m-5 md:w-[80%] shadow rounded'>
            <Image src={backgroundPic} width={300} height={300} alt="Background Picture" className='rounded-full' />
            <div className='flex flex-col'>
              <h2 className='text-xl md:text-4xl font-bold'>My Background</h2>
              <p className='text-lg md:text-2xl'>Currently a freshgraduate from Xi&apos;an Jiaotong - The Liverpool University,
                that can be considered as fullstack developer. I love all kind about Business, Technology, Photography, and Videography. I am a hardworker, diligent, and honest person.</p>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center h-screen'>
          <div className='flex flex-col md:flex-row justify-center items-center p-10 m-5 md:w-[80%] shadow rounded'>
            <Image src={certiPic} width={270} height={270} alt="Certificate Picture" className='rounded-full' />
            <div className='flex flex-col'>
              <h2 className='text-xl md:text-4xl font-bold'>My Education</h2>
              <p className='text-lg md:text-2xl'>I did go to college after I graduated from Highscool, i was going to Xi&apos;an Jiaotong - The Liverpool University for my Bacherlor degree.</p>
              <p className='text-lg md:text-2xl'>Education:</p>
              <ul>
                <li className='text-lg md:text-2xl'>1. Information System and Computing Science - Bachelor of Science (Second Upper) (Sept 2018 - Jun 2022)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center h-screen'>
          <div className='flex flex-col md:flex-row justify-center items-center p-10 m-5 md:w-[80%] shadow rounded'>
            <Image src={workPic} width={400} height={400} alt="Working Picture" className='rounded-full' />
            <div className='flex flex-col'>
              <h2 className='text-xl md:text-4xl font-bold'>My Experiences</h2>
              <p className='text-lg md:text-2xl'>I did some work and obtain some experiences when I joined some organization in my Highschool and in my College.</p>
              <br />
              <p className='text-lg md:text-3xl font-bold'>Working Experiences:</p>
              <ul className='text-lg md:text-2xl'>
                <li >1. Formulatrix - Software Engineer (Sept-Oct 2021)</li>
              </ul>
              <br />
              <p className='text-lg md:text-3xl font-bold'>Organization Experiences:</p>
              <ul className='text-lg md:text-2xl'>
                <li>1. Suzhou Indonesian Student Community - Band Leader and Videographer (2019-2020)</li>
                <li>2. Highschool Student Council - Journalism Team Leader (2017-2018)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center h-screen'>
          <div className='flex flex-col justify-center items-center p-10 m-5 md:w-[80%] shadow rounded'>
            <div className='m-5'>
              <h2 className='flex flex-row items-center text-4xl font-bold'><FcEngineering size={30} className='' />Programming</h2>
              <p className=''>I faced my first programming language which is the PAWN language when I was in Elementary School. Since that, I went through many different programming language such as C, C#, Java, Javascript, Python, and Golang. I love to do programming, since it can create something with a text.</p>
              <Link href="/projects"><p className='underline text-blue'>More about my work...</p></Link>
            </div>

            <div className='m-5'>
              <h2 className='flex flex-row items-center text-4xl font-bold'><FcCamera size={30} className='' />Photography and Videography</h2>
              <p className=''>Another thing that I love todo is Photography and Videography, this activity is another activity that can be considered as my hobby. I started to loving this activity since I was in Highschool, I have been choosen as the leader of Student Council Journalism Team Leader and I need to learn to take a pictures of moment.</p>
              <Link href="/pvgraphy"><p className='underline text-blue'>More about my work...</p></Link>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
