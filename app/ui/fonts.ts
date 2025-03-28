import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";

export const inter = Inter({
    subsets: ['latin'],
    weight: ['400']
});
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'], // Specify the weights you want to use, e.g., '400' for regular and '700' for bold
});