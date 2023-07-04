import { Card, CardBody } from "@nextui-org/card"
import { Spacer } from "@nextui-org/spacer"

export default function Home() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
                <Card className="border-none notebook-lines inline-block dark:bg-black dark:text-white">
                    <CardBody className="p-notebook-line">
                        <p>Welcome to my coding portfolio site.</p>
                        <br />
                        <p>Built in Next 13 and Tailwind.</p>
                        <p>Enjoy!</p>
                    </CardBody>
                </Card>
                <Card className="border-none notebook-lines inline-block">
                    <CardBody className="p-notebook-line">
                        Welcome.
                        <br />
                        This is my coding portfolio site.
                        <br />
                        Built in NextJS and Tailwind.
                        <br />
                        Enjoy!
                    </CardBody>
                </Card>
            </div>
            <div className="flex flex-row gap-4">
                <Card className="border-none notebook-lines inline-block">
                    <CardBody className="p-notebook-line">
                        <b>TABLE OF CONTENTS</b>
                        <br />
                        <br />
                        <ul>
                            <li>- Sike go look at the header tabs box for summaries of each section.</li>
                        </ul>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
