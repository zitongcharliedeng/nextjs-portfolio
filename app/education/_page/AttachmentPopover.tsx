'use client'
import { Popover, PopoverTrigger, PopoverContent, Button, Image } from "@nextui-org/react"
import { CameraIcon } from "./CameraIcon"

export default function AttachmentPopover({src, alt}: {src: any, alt: any}) {
    return (
        <div className="flex flex-wrap gap-4">
            <Popover key={"blur"} showArrow offset={0} placement="left" backdrop={"blur"}>
                <PopoverTrigger>
                    <Button isIconOnly color="warning" variant="faded" className="photo-attachment-button">
                        <CameraIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="photo-attachment-tall-popover-content px-2 py-2">
                    <Image isZoomed alt={alt} src={src} />
                </PopoverContent>
            </Popover>
        </div>
    )
}
