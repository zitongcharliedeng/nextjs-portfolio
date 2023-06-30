import React from "react"
import Link from "next/link"
import { Button } from "@nextui-org/button"
import HeaderTabs from "./_Header/HeaderTabs"

export default function Header({ router, darkMode, setDarkMode, }: { router: any, darkMode: boolean, setDarkMode: any }) {
    const handleThemeChange = () => {
        setDarkMode(!darkMode)
    }
    return (
        <header>
            <button onClick={() => console.log("h1")}>projects button test</button>
            <nav className="flex flex-row align-middle justify-between bg-gray-800 text-white px-4 py-2 rounded-t-lg">
                <HeaderTabs router={router} />
                <Button onPress={handleThemeChange}>🌞/🌑</Button>
            </nav>
        </header>
    )
}
