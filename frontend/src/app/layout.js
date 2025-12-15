"use client"

import { SessionProvider } from "next-auth/react"
import { Montserrat } from "next/font/google"
import "./globals.css"

import Navbar from "./components/Navbar"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SessionProvider>
         
                    <Navbar />
          {children}
           
    
        </SessionProvider>
      </body>
    </html>
  )
}
