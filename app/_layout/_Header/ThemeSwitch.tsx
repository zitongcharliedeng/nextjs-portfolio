import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react"

// interface ThemeMap {
//     [key: string]: string
// }

// // prettier-ignore
// const themeMap: ThemeMap = {
//     "system": "robot",
//     "dark": "🌑ee",
//     "light": "🌞ee"
//   };

export default function ThemeSwitch() {
    // dropdown ui logic
    const [selectedKey, setSelectedKey] = useState("system")
    useEffect(() => {
        setTheme(selectedKey)
    }, [selectedKey])

    // hydration for next-theme
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    //// useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) {
        return null
    }

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="bordered" className="capitalize">
                    {selectedKey}
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Single selection actions" variant="flat" disallowEmptySelection selectionMode="single" selectedKeys={new Set([selectedKey])} onSelectionChange={setSelectedKey}>
                <DropdownItem key="system">sys</DropdownItem>
                <DropdownItem key="light">🌞</DropdownItem>
                <DropdownItem key="dark">🌑</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
