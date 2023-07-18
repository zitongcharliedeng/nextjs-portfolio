'use client'
import { Popover, PopoverTrigger, PopoverContent, Button, Image } from "@nextui-org/react"
import { CameraIcon } from "./CameraIcon"

export default function AttachmentPopover() {
    return (
        <div className="flex flex-wrap gap-4">
            <Popover key={"blur"} showArrow offset={0} placement="left" backdrop={"blur"}>
                <PopoverTrigger>
                    <Button isIconOnly color="warning" variant="faded" className="photo-attachment">
                        <CameraIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="photo-attachment-tall-popover-content">
                    <div className="px-2 py-2">
                        <Image
                            isZoomed
                            alt="ocr-certificate-alevel"
                            src="https://media.licdn.com/dms/image/C4E2DAQEj6rT553SOIA/profile-treasury-image-shrink_1280_1280/0/1677609079733?e=1690297200&v=beta&t=lrQdBHWCrEmd-ZIJUKDYLr0pPo8-Bi-JDScoVxdwO3I"
                        />
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}
