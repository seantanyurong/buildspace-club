import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './css/globals.css';

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
