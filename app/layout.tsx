import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/local";
import {Poppins} from 'next/font/google'
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const frnt = Poppins({
  weight :['100','200','300','400','500','600','700','800','900',],
  subsets:['latin']
})


// const geistSans = Geist({
//  variable: "--font-geist-sans",
//  subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//  variable: "--font-geist-mono",
// subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Travel for you | Next js 15",
  description: "Travel Landing Page using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${frnt.className } antialiased`}>
      <ResponsiveNav/>
      
        {children}
        <Footer/>
        <ScrollToTop/>
        
   
      </body>
    </html>
  );
}