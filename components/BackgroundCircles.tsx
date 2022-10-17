import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
        <div className='absolute mt-52 rounded-full border border-gray-700 h-[200px] w-[200px] animate-ping' />
        <div className='absolute mt-52 rounded-full border border-gray-700 h-[300px] w-[300px]' />
        <div className='absolute mt-52 rounded-full border border-gray-600 h-[600px] w-[600px] animate-pulse' />
        <div className='absolute mt-52 rounded-full border border-gray-600 h-[800px] w-[800px]' />
    </div>
  )
}