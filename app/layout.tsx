"use client"

import "./globals.scss"
import Header from "./_layout/Header"
import Footer from "./_layout/Footer"
import { Providers } from "./_layout/providers"
import React from "react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = React.useState(true)
    return (
        <html lang="en" className={darkMode ? "dark" : "light"}>
            <head>
                <title>the zcd portfolio</title>
            </head>
            <Providers>
                <body className="bg-gradient-radial from-black to-white shadow-lg border-2 border-gray-300 rounded-lg">
                    <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                    {children}
                    <Footer />
                </body>
            </Providers>
        </html>
    )
}
