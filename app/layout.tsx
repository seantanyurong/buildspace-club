import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './css/globals.css';

const gabrielSans = localFont({
  variable: '--font-gabriel-sans',
  src: [
    {
      path: '../fonts/GabrielSans-Trial-Black.woff2',
      weight: '900',
      style: 'black',
    },
  ],
});

const gilroy = localFont({
  variable: '--font-gilroy',
  src: [
    {
      path: '../fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
  ],
});

export const metadata: Metadata = {
  title: 'The Buildspace Club',
  description: 'We match buildspace founders for 1:1 chats every month - to grow networks and learn from others.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${gabrielSans.variable} ${gilroy.variable} font-body`}>{children}</body>
    </html>
  );
}
