import type { Metadata } from "next";
import {Roboto} from 'next/font/google';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const roboto = Roboto({weight: ['100', '300', '400', '500', '700', '900'], variable: '--font-roboto', subsets: ['latin']})

export const metadata: Metadata = {
  title: "Blender",
  description: "Redesigning landing page of Blender website | 3d | b3d | blender | blender3d",
  keywords: ['blender', 'b3d', 'blender3d', '3d', 'redesign'],
  publisher: 'zsphinx',
  creator: 'zsphinx',
  openGraph: {
    title: 'Blender',
    description: 'Redesigning landing page of Blender website | 3d | b3d | blender | blender3d',
    images: [{
      url: 'https://b3d.vercel.app/thumbnail.jpg',
      alt: 'Blender 3d',
      width: 750,
      height: 500,
    }]
  },
  facebook: {
    appId: '1719215081802374',
  },

  twitter: {
    card: 'summary_large_image',
    creator: '@zsphinxyz'
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body
        className={`${roboto.className} antialiased overflow-y-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
