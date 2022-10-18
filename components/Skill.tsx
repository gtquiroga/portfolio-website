import React from 'react';
import { motion } from "framer-motion";
import { Skill as SkillType } from '../typings';
import { urlFor } from '../sanity';


type Props = {
  skill: SkillType
}

export default function Skill({ skill }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <img 
            className='rounded-full aspect-square border border-gray-500 object-contain h-14 w-14 sm:h-24 sm:w-24 md:w-28 md:h-28
            xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            src={urlFor(skill.image).url()}
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-14 w-14 sm:h-24 sm:w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
            rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-lg sm:text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
            </div>
        </div>

    </div>
  )
}