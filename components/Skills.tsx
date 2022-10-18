import React from 'react';
import { motion } from "framer-motion";
import Skill from './Skill';
import { Skill as SkillType } from '../typings';



type Props = {
  skills: SkillType[]
}

export default function Skills({ skills }: Props) {
  skills = skills?.sort((a,b) => b.progress - a.progress)
  return (
    <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='h-screen relative flex flex-col text-center md:text-left md:flex-row
        max-w-[2000px] xl:px-10 justify-center mx-auto items-center xl:space-y-0 min-h-fit'
    >
        <h3 className='absolute uppercase top-24 tracking-[20px] text-gray-500 text-xl sm:text-2xl'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs sm:text-sm'>Hover over a skill for current proficiency</h3>

        <div className='grid grid-cols-4 gap-5'>
          {skills?.map(skill => (
            <Skill
              key={skill._id}
              skill={skill}
            />
          ))}
        </div>
    </motion.div>
  )
}