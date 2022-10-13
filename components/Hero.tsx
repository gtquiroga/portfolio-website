import Link from 'next/link'
import React from 'react'
import { PageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'
import { urlFor }from '../sanity';

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <h1 className='text-6xl font-semibold mb-32 tracking-wider'><span className='text-red-500 underline decoration-red-500'>Hi</span>, I'm Gonzalo</h1>
        <img
            className='relative rounded-full h-36 w-36'
            src={urlFor(pageInfo?.heroImage).url()} 
            alt=""
        />
        <div className='z-20'>
            
            <h2 className='text-lg uppercase tracking-[15px] text-gray-400'>{pageInfo?.role}</h2>

            <div className='mt-20'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#proyects">
                    <button className='heroButton'>Proyects</button>
                </Link>
            </div>
        </div>
        
        
    </div>
  )
}