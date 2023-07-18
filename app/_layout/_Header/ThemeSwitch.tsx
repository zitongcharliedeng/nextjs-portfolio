import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import {Switch} from "@nextui-org/react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

const ThemeSwitch = () => {
    const { systemTheme, setTheme } = useTheme()
    const systemThemeIsDark = (systemTheme == "dark") ? true : false
    const [isSelected, setIsSelected] = useState(systemThemeIsDark)
    useEffect(() => {
        if (isSelected == true) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [isSelected])
    const [mounted, setMounted] = useState(false)
    

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    

    return (

        <Switch defaultSelected size="md" color="success" startContent={<SunIcon />} endContent={<MoonIcon /> } isSelected={isSelected} onValueChange={setIsSelected}>
        </Switch>

    )
}

export default ThemeSwitch
