import React from 'react'
import { motion } from "framer-motion";
import { Project } from '../typings';
import { urlFor } from '../sanity';


type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {
    return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='h-screen relative flex flex-col overflow-hidden text-left
        md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

        <div className='relative w-full top-24 flex overflow-x-scroll overflow-y-hidden snap-x snap-proximity z-20'>
            {projects?.map((project) => (
                <div key={project?._id}className='w-screen flex-shrink-0 snap-center flex flex-col
                    space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                     <img
                        src={urlFor(project?.image).url()}
                        className='w-24 h-24'
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-5xl'>
                        <h4 className='text-4xl font-semibold text-center'>{project?.title}</h4>
                        <div className='flex items-center space-x-2 justify-center'>
                            {project?.technologies.map(technology => (
                                <img 
                                    key={technology?._id}
                                    src={urlFor(technology?.image).url()}
                                    alt=""
                                    className='h-10 w-10'
                                />
                            ))}
                        </div>
                        <p className='text-lg text-center md:text-left'>{project?.summary}</p>
                    </div>

                </div>
            ))}
        </div>
        
        <div className='w-full absolute top-[30%] bg-gray-900/50 left-0 h-[400px] -skew-y-12 '>

        </div>
    </motion.div>
    )
}