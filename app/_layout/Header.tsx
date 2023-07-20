import React from "react"
import HeaderTabs from "./_Header/HeaderTabs"
import Image from "next/image"
import ThemeSwitch from "./_Header/ThemeSwitch"
import Link from "next/link"

export default function Header({ router, }: { router: any, }) {
    return (
        <header>
            <nav className="flex flex-row align-middle justify-between bg-gray-800 text-white px-4 py-2 rounded-t-lg starry-container">
                <HeaderTabs router={router} />
                <div className="flex flex-col align-middle justify-between py-3 px-3">
                    <ThemeSwitch />
                    <div className="rounded-lg bg-gray-800 hover:bg-gray-800/50 transition-opacity duration-300">
                        <Link href="https://www.linkedin.com/in/zitongcharliedeng" target="_blank">
                            <Image className="mt-auto py-1" width={60} height={60} alt="LinkedIn Logo" src="linkedin.svg" />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
