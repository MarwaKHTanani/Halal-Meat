import type { Metadata } from "next";
import { Geist, Geist_Mono ,Livvic ,Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Halal Meat",
  description: "Fresh and Premium Halal Meats Delivered to Your Doorstep",
};

export const livvic = Livvic({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const Mistral = Dancing_Script({
  subsets: ['latin'],
  weight: [ '700'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
