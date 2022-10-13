import React from 'react';
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}


type Props = {}

export default function Contact({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:gquirogac1@gmail.com?subject=${formData.subject}&
        body=Hi mi name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className='h-screen relative flex flex-col text-center md:text-left md:flex-row
                max-x-5xl px-10 justify-evenly max-auto items-center'
        >
            <h3 className='absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just wjat you need.<br/>
                    <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h7 w-7 animate-pulse'/>
                        <p className='text-2xl'>+447470184507</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h7 w-7 animate-pulse'/>
                        <p className='text-2xl'>gquirogac1@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h7 w-7 animate-pulse'/>
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
                        className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'
                    >
                        Submit
                    </button>
                </form>



                
            </div>

        </motion.div>
    )
}