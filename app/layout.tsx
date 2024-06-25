import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import './css/globals.css';

const inter = Inter({ subsets: ["latin"] });

const gabrielSans = localFont({
  variable: '--font-gabriel-sans',
  src: [
    {
      path: '../fonts/GabrielSans-Trial-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})

const gilroy = localFont({
  variable: '--font-gilroy',
  src: [
    {
      path: '../fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: "Teh Peng Club",
  description: "We help telegram communities engage members by matching them for 1:1 chats.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gabrielSans.variable} ${gilroy.variable} font-body`}>{children}</body>
    </html>
  );
}
