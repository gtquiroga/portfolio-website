import React from 'react';
import { motion } from "framer-motion";
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';


type Props = {
  experiences: Experience[]
}

export default function WorkExperience({ experiences }: Props) {
  experiences = experiences?.sort((a,b) => a.index - b.index)
  return (
    <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row
        max-w-full px-2 sm:px-10 justify-evenly mx-auto items-center min-h-fit'
    >
        <h3 className='absolute uppercase top-24 tracking-[20px] text-gray-500 text-xl sm:text-2xl'>Experience</h3>
        <div className='mt-36 w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory py-2
            scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin max-w-5xl'
        >
          {experiences?.map((experience) => (
            <ExperienceCard
              key={experience._id}
              experience={experience}
            />
          ))}
        </div>


    </motion.div>
  )
}