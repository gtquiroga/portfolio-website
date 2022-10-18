import React from 'react'
import { motion } from "framer-motion";
import { Project } from '../typings';
import { urlFor } from '../sanity';


type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {
    projects = projects?.sort((a,b) => a.index - b.index)
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}} 
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
            max-w-full justify-start mx-auto items-center z-0'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
                snap-mandatory mt-20 z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar'
            >
                {projects?.map((project) => (
                    <div 
                        key={project?._id}
                        className='w-screen flex-shrink-0 snap-center flex flex-col space-y-2 sm:space-y-5 items-center
                        justify-center p-6 sm:p-20 md:p-44 h-screen'
                    >
                        <motion.img 
                            initial={{
                                y: -300,
                                opacity: 0,
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true}}
                            src={urlFor(project?.image).url()}
                            alt=""
                            className='max-h-18 sm:max-h-40 md:max-h-56'
                        />
                        <div className='space-y-4 sm:space-y-6 px-2 md:px-10 max-w-6xl'>
                            <h4 className='text-2xl sm:text-4xl font-semibold text-center'>{project?.title}</h4>
                            <div className='flex items-center space-x-2 justify-center'>
                                {project?.technologies?.map(technology => (
                                    <img 
                                        key={technology?._id}
                                        src={urlFor(technology?.image).url()}
                                        alt=""
                                        className='w-6 h-6 sm:h-10 sm:w-10'
                                    />
                                ))}
                            </div>
                            {project.linkToBuild && (
                                <div className='flex flex-row justify-center items-center'>
                                    <a 
                                        className='px-8 py-1 sm:px-8 sm:py-2 text-base flex items-center bg-[#F7AB0A] hover:bg-[#F7AB0A]/80 rounded-lg text-black'
                                        href={project.linkToBuild}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Visit project
                                    </a>
                                </div>
                            )}
                            <p className='text-base sm:text-lg text-center md:text-left'>{project?.summary}</p>
                        </div>
                    </div>
                ))}
                

            </div>
            <div className='w-full absolute top-[30%] bg-gray-900/50 left-0 h-[400px] -skew-y-12 '></div>
        </motion.div>
    )
}