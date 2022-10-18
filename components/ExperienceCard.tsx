import React from 'react';
import { motion } from "framer-motion";
import { Experience } from '../typings';
import { urlFor } from '../sanity';


type Props = {
    experience: Experience
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-4 sm:space-y-7 flex-shrink-0
        sm:w-[500px] w-[380px] md:w-[600px] xl:w-[800px] snap-center bg-gray-700 p-8 sm:p-10
        hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                y:0,
                opacity: 1
            }}
            viewport={{
                once: true
            }}
            className='w-18 h-18 sm:w-32 sm:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src={urlFor(experience?.companyImage).url()}
            alt=""
        />
        <div className='px-0 md:px-10'>
            <h4 className='font-light text-lg sm:text-4xl uppercase'>{experience.jobTitle}</h4>
            <p className='font-bold text-xl sm:text-2xl '>{experience.company}</p>
            <div className='flex space-x-2 sm:my-2'>
                {experience?.technologies?.map((technology) => (
                    <img
                        key={technology._id}
                        className='w-8 h-8 sm:h-10 sm:w-10 rounded-full'
                        src={urlFor(technology.image).url()}
                        alt=''
                    />
                ))}
            </div>
            <p className='uppercase text-sm sm:text-base py-2 sm:py-5 text-gray-300'>
                {new Date(experience?.dateStarted).toLocaleDateString("en-US", {year: 'numeric', month: 'short'})} -{" "}
                {experience?.isCurrentlyWorkingHere ? "Present" :
                new Date(experience?.dateEnded).toLocaleDateString("en-US", {year: 'numeric', month: 'short'})
                }
            </p>
            <ul className='list-disc space-y-1 sm:space-y-4 ml-5 text-sm sm:text-lg'>
                {experience.points?.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}