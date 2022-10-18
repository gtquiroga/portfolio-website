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
    <div className='h-screen flex flex-col space-y-8 items-center justify-start text-center overflow-hidden pt-36 min-h-fit'>
        <h1 className='text-4xl sm:text-6xl font-semibold mb-8 sm:mb-32 tracking-wider'><span className='text-red-500 underline decoration-red-500'>Hi</span>, I'm Gonzalo</h1>
        <img
            className='relative rounded-full h-36 w-36'
            src={urlFor(pageInfo?.heroImage).url()} 
            alt=""
        />
        <div className='z-20'>
            <h2 className='text-base sm:text-lg uppercase tracking-[15px] text-gray-400'>{pageInfo?.role}</h2>
            <div className='mt-20 space-x-1'>
                <Link href="#about">
                    <button className="sm:heroButton heroButton">About</button>
                </Link>
                <Link href="#experience">
                    <button className="sm:heroButton heroButton">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="sm:heroButton heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="sm:heroButton heroButton">Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}