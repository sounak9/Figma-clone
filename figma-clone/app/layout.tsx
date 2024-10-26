import type { Metadata } from "next";
import {Work_Sans} from "next/font/google"
import "./globals.css";
import { Variable, Weight } from "lucide-react";
import { Room } from "./Room";

const workSans = Work_Sans({
  subsets: ["latin"],
  Variable: '--font-work-sans',
  Weight: ['400', '600', '700']
})


export const metadata: Metadata = {
  title: "Figma Clone",
  description: "A figma clone using fabrics.js and Liveblocks for real-time collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} bg-primary-grey-200 text-white`}
      >
        <Room>
          {children}
        </Room>
        
      </body>
    </html>
  );
}
