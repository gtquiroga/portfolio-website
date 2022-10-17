import { SMTPClient } from 'emailjs';
import type { NextApiRequest, NextApiResponse } from "next";


const client = new SMTPClient({
    user: 'portfoliowebsite1996@gmail.com',
    password: 'Qewr1324-',
    host: 'smtp.portfoliowebsite1996@gmail.com',
    ssl:true
  });

type Data = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    console.log('jjjj')
    const { email, subject, message, name} = req.body
    try{
        const emailMessage = await client.sendAsync({
            text: 'ss',
            from: 'portfoliowebsite1324@gmail.com',
            to: email,
            subject: subject,
        })
        res.json({ message: 'Email has been sent' })
    }catch(error){
        res.status(500).json({ error: error })
        console.log(error)
    }
  
}