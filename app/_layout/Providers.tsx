"use client"

import * as React from "react"
import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {    
    return <ThemeProvider><NextUIProvider>{children}</NextUIProvider></ThemeProvider>
}


