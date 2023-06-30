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
                "The home page, a general about section/ summary of this site.",
        },
        {
            link: "projects",
            label: "Projects",
            description:
                "See my various coding projects. Maybe I'll add non-coding stuff too.",
        },
        {
            link: "contact",
            label: "Contact",
            description: "My contact details, please don't scam me!!!",
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