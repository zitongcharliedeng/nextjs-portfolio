import React from "react"
import { Button } from "@nextui-org/button"
import HeaderTabs from "./_Header/HeaderTabs"
import Image from "next/image"

export default function Header({ router, darkMode, setDarkMode, }: { router: any, darkMode: boolean, setDarkMode: any }) {
    const handleThemeChange = () => {
        setDarkMode(!darkMode)
    }
    return (
        <header>
            <nav className="flex flex-row align-middle justify-between bg-gray-800 text-white px-4 py-2 rounded-t-lg">
                <HeaderTabs router={router} />
                <div className="flex flex-col items-center">
                    <Button onPress={handleThemeChange}>🌞/🌑</Button>
                    <Image className="mt-auto py-1" width={90} height={90} alt="LinkedIn Image" src="linkedin.svg" />
                </div>
            </nav>
        </header>
    )
}
