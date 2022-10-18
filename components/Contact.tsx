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
        emailjs.send(
            process.env.NEXT_PUBLIC_MAILJS_SERVICE_ID || '',
            process.env.NEXT_PUBLIC_MAILJS_TEMPLATE_ID || '',
            formData,
            process.env.NEXT_PUBLIC_MAILJS_PUBLIC_KEY || ''
            )
        .then((result: any) => {
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
                max-x-5xl px-4 sm:px-10 justify-evenly mx-auto items-center pt-24 min-h-fit'
        >
            <h3 className='absolute uppercase top-24 tracking-[20px] text-gray-500 text-xl sm:text-2xl'>Contact</h3>
            <div className='flex flex-col space-y-10'>
                <div className='space-y-2 sm:space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-4 w-4 sm:h-7 sm:w-7 animate-pulse'/>
                        <p className='text-base sm:text-2xl'>+447470184507</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-4 w-4 sm:h-7 sm:w-7 animate-pulse'/>
                        <p className='text-base sm:text-2xl'>gquirogac1@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-4 w-4 sm:h-7 sm:w-7 animate-pulse'/>
                        <p className='text-base sm:text-2xl'>28 Hans Place, London, UK</p>
                    </div>
                </div>

                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col space-y-2 w-full sm:w-fit mx-1 sm:mx-auto'
                >
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput h-32 sm:h-36'/>
                    <button
                        type='submit' 
                        className='flex flex-row justify-center bg-[#F7AB0A] py-2 px-4 text-base sm:py-5 sm:px-10 rounded-md text-black
                            font-bold sm:text-lg'
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
                                <XCircleIcon className='text-red-700 h-8 w-8 sm:h-10 sm:w-10'/>
                            ) : (sendCorrectly ? (
                                <CheckCircleIcon className='text-green-700 h-8 w-8 sm:h-10 sm:w-10'/>
                            ) : ('Send'))
                        )}
                    </button>
                </form>



                
            </div>

        </motion.div>
    )
}