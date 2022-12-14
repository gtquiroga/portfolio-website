import React from 'react';
import { motion } from "framer-motion";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='h-screen relative flex flex-col text-center md:text-left md:flex-row
        mx-w-7xl px-8 md:px-28 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute uppercase top-24 tracking-[20px] text-gray-500 text-xl sm:text-2xl'>About</h3>
        <motion.img
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                x:0,
                opacity: 1
            }}
            viewport={{
                once: true
            }}
            src={urlFor(pageInfo?.profilePic).url()}
            className='-mb-44 sm:-mb-20 md:mb-0 w-32 h-32 flex-shrink-0 sm:w-56 sm:h-56 rounded-full object-cover
            md:rounded-md md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-3xl font-semibold'>Here is a little background</h4>
            <p className='text-sm sm:text-base'>{pageInfo?.backgroundInformation}</p>
        </div>

    </motion.div>
  )
}