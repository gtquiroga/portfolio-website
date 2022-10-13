import { Social } from "../typings";

export const fetchSocials = async () => {
    const res: any = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocial`);
    
    const data = await res.json();
    const socials: Social[] = data.socials;

    return socials;
};