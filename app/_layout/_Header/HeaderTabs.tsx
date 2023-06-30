import { Tabs, Tab, Card, CardBody } from "@nextui-org/react"
import { useEffect, useState } from "react";

export default function HeaderTabs({router}: {router:any}) {
    const [selected, setSelected] = useState("" as string)
    
    useEffect(() => {
        router.push(`/${selected}`);
    }, [selected]);

    let tabs = [
        {
            link: "",
            label: "Home",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            link: "projects",
            label: "Projects",
            description:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            link: "contact",
            label: "Contact",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ]

    return (
        <div className="flex w-full flex-col header-tabs">
            <Tabs aria-label="Pages" selectedKey={selected} onSelectionChange={(key: string | number) => setSelected(key.toString())} items={tabs}>
                {(item) => (
                    <Tab className={`tab-to-${item.link}`} key={item.link} title={item.label}>
                        <Card>
                            <CardBody>{item.description}</CardBody>
                        </Card>
                    </Tab>
                )}
            </Tabs>
        </div>
    )
}