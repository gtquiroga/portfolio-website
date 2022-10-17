import React from 'react';
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { ThreeDots} from 'react-loader-spinner'
import { useState } from 'react';


type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}


type Props = {}

export default function Contact({}: Props) {
    const [isSending, setIsSending] = useState(false);
    const [sendError, setSendError] = useState(false);
    const [sendCorrectly, setSendCorrectly] = useState(false);
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        setIsSending(true)
        emailjs.send('service_di69', 'template_s0rv8fl', formData, 'fQfI7-1dl4KrLqnwl')
        .then((result: any) => {
            console.log(result.text);
            setIsSending(false)
            setSendCorrectly(true)
            setTimeout(() => setSendCorrectly(false), 2000)
        }, (error: any) => {
            setIsSending(false)
            setSendError(true)
            setTimeout(() => setSendError(false), 2000)
            console.log(error.text);
        });
    };


    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className='h-screen relative flex flex-col text-center md:text-left md:flex-row
                max-x-5xl px-10 justify-evenly max-auto items-center pt-36 min-h-fit'
        >
            <h3 className='absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
            <div className='flex flex-col space-y-10'>
                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                        <p className='text-2xl'>+447470184507</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                        <p className='text-2xl'>gquirogac1@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                        <p className='text-2xl'>28 Hans Place, London, UK</p>
                    </div>
                </div>

                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col space-y-2 w-fit mx-auto'
                >
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput'/>
                    <button
                        type='submit' 
                        className='flex flex-row justify-center bg-[#F7AB0A] py-5 px-10 rounded-md text-black
                            font-bold text-lg'
                    >
                        {isSending ? (
                            <ThreeDots
                                height="20"
                                width="20"
                                radius="9"
                                color="black"
                                ariaLabel="loading"
                            />
                        ) : (sendError ? (
                                <XCircleIcon className='text-red-700 h-10 w-10'/>
                            ) : (sendCorrectly ? (
                                <CheckCircleIcon className='text-green-700 h-10 w-10'/>
                            ) : ('Submit'))
                        )}
                    </button>
                </form>



                
            </div>

        </motion.div>
    )
}