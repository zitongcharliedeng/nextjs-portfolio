import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react"
import Link from "next/link"

export default function HeaderTabs() {
    let tabs = [
        {
            link: "home",
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
        <div className="flex w-full flex-col">
            <Tabs aria-label="Dynamic tabs" items={tabs}>
                {(item) => (
                    <Tab key={`link-${item.link}`} title={<Link href={`/${item.link}`}>{item.label}</Link>}>
                        <Card>
                            <CardBody>{item.description}</CardBody>
                        </Card>
                    </Tab>
                )}
            </Tabs>
        </div>
    )
}
