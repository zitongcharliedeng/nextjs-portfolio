"use client"

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
            <body>
                <Providers>
                    <div className="floppy-disk-1 flex flex-col bg-gradient-radial from-black to-white shadow-lg border-2 border-gray-300 rounded-lg">
                        <Header router={router} darkMode={darkMode} setDarkMode={setDarkMode} />
                        <main className="flex-grow overflow-y-auto">{children}</main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    )
}
