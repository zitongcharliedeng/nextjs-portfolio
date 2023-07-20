import React from "react"
import { Button } from "@nextui-org/button"
import HeaderTabs from "./_Header/HeaderTabs"
import Image from "next/image"
import ThemeSwitch from "./_Header/ThemeSwitch"

export default function Header({ router, }: { router: any, }) {
    return (
        <header>
            <nav className="flex flex-row align-middle justify-between bg-gray-800 text-white px-4 py-2 rounded-t-lg starry-container">
                <HeaderTabs router={router} />
                <div className="flex flex-col items-center">
                    <ThemeSwitch />
                    <Image className="mt-auto py-1" width={90} height={90} alt="LinkedIn Image" src="linkedin.svg" />
                </div>
            </nav>
        </header>
    )
}
