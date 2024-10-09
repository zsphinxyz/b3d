import type { Metadata } from "next";
import localFont from "next/font/local";
import {Roboto, Meow_Script} from 'next/font/google';
import "./globals.css";

const roboto = Roboto({weight: ['100', '300', '400', '500', '700', '900'], variable: '--font-roboto', subsets: ['latin']})

export const metadata: Metadata = {
  title: "Blender",
  description: "New Ui implementation of Blender 3d | b3d | blender",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
