import { Livvic ,Dancing_Script,Poppins,Sniglet,Ruthie } from "next/font/google";

export const livvic = Livvic({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const Mistral = Dancing_Script({
  subsets: ['latin'],
  weight: [ '700'],
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const sniglet = Sniglet({
  weight: '800',
  subsets: ['latin'],
});
export const ruthie = Ruthie({
  subsets: ['latin'],
  weight: ['400'],
});