'use client'

import "./globals.scss"
import Header from "./_layout/Header"
import Footer from "./_layout/Footer"
import { Providers } from "./_layout/providers"
import React from "react"
import { useRouter } from "next/navigation"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    
    const [darkMode, setDarkMode] = React.useState(true)
    return (
        <html lang="en" className={darkMode ? "dark" : "light"}>
            <head>
                <title>the zcd portfolio</title>
            </head>
            {/* The body kinda looks like a floppy disk, maybe commit to this "intentional" style later... */}
            <body className="bg-gradient-radial from-black to-white shadow-lg border-2 border-gray-300 rounded-lg">
                <Providers>
                    <Header router={router} darkMode={darkMode} setDarkMode={setDarkMode} />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
