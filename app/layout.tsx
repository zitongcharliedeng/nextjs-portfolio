"use client"

import "./globals.scss"
import Header from "./_layout/Header"
import Footer from "./_layout/Footer"
import { Providers } from "./_layout/Providers"
import React from "react"
import { useRouter } from "next/navigation"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    return (
        <html suppressHydrationWarning lang="en">
            <head>
                <title>the zcd portfolio</title>
            </head>
            {/* The body kinda looks like a floppy disk, maybe commit to this "intentional" style later... */}
            <body>
                <Providers>
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                    <div className="starry-text starry-container">
                        HHHHHHHHHHHHHHHHHHHHHHh
                    </div>
                    <div id="content">
                        <div className="floppy-disk-1 flex flex-col bg-gradient-radial from-black to-white shadow-lg border-2 border-gray-300 rounded-lg">
                            <Header router={router}/>
                            <main className="flex-grow overflow-y-auto p-notebook-line notebook-lines">{children}</main>
                            <Footer />
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    )
}
