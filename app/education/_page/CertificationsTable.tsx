"use client"
// TODO: figure out why the individual server side table doesnt work and why i need to use client zzz
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Chip } from "@nextui-org/react"
import AttachmentPopover from "./AttachmentPopover"

export default function CertificationsTable() {
    const certificationsData = [
        // A-level data
        {
            type: "A-level",
            subject: "Further Maths (+ Stats, Mech)",
            grade: "A (I MISREAD A QUESTION WHYY)",
            src: "https://media.licdn.com/dms/image/C4E2DAQEj6rT553SOIA/profile-treasury-image-shrink_1280_1280/0/1677609079733?e=1690297200&v=beta&t=lrQdBHWCrEmd-ZIJUKDYLr0pPo8-Bi-JDScoVxdwO3I",
            alt: "",
        },
        {
            type: "A-level",
            subject: "Maths (+ Stats, Mech)",
            grade: "A*",
            src: "https://media.licdn.com/dms/image/C4E2DAQEj6rT553SOIA/profile-treasury-image-shrink_1280_1280/0/1677609079733?e=1690297200&v=beta&t=lrQdBHWCrEmd-ZIJUKDYLr0pPo8-Bi-JDScoVxdwO3I",
            alt: "",
        },
        {
            type: "A-level",
            subject: "Physics",
            grade: "A*",
            src: "https://media.licdn.com/dms/image/C4E2DAQEj6rT553SOIA/profile-treasury-image-shrink_1280_1280/0/1677609079733?e=1690297200&v=beta&t=lrQdBHWCrEmd-ZIJUKDYLr0pPo8-Bi-JDScoVxdwO3I",
            alt: "",
        },
        {
            type: "A-level",
            subject: "Chemistry",
            grade: "A*",
            src: "https://media.licdn.com/dms/image/C4E2DAQHBTCvEXh87Yw/profile-treasury-image-shrink_1280_1280/0/1677609120971?e=1690534800&v=beta&t=Ufcw3RtL-fW2xhi-qe7aD4pV9tUa3EAsafbd8Po78Cs",
            alt: "",
        },
        // GCSE data
        { type: "GCSE", subject: "RE", grade: 9, src: "", alt: "" },
        { type: "GCSE", subject: "Chemistry", grade: 9, src: "", alt: "" },
        { type: "GCSE", subject: "Physics", grade: 9, src: "", alt: "" },
        { type: "GCSE", subject: "Maths", grade: 8, src: "", alt: "" },
        { type: "GCSE", subject: "Art", grade: 8, src: "", alt: "" },
        { type: "GCSE", subject: "Biology", grade: 8, src: "", alt: "" },
        { type: "GCSE", subject: "Geography", grade: 8, src: "", alt: "" },
        { type: "GCSE", subject: "German", grade: 8, src: "", alt: "" },
        { type: "GCSE", subject: "Music", grade: 7, src: "", alt: "" },
        { type: "GCSE", subject: "English Language", grade: 7, src: "", alt: "" },
        { type: "GCSE", subject: "English Literature", grade: 7, src: "", alt: "" },
    ]
    const typeToColor: any = {"A-level": 'danger', "GCSE": 'success', "External": 'warning'}
    const tableRowsArray: any = certificationsData.map((item, index) => (
        <TableRow key={index}>
            <TableCell>
                <Chip className="capitalize" color={typeToColor[item.type]} size="sm" variant="flat">
                    {item.type}
                </Chip>
            </TableCell>
            <TableCell>{item.subject}</TableCell>
            <TableCell>{item.grade}</TableCell>
            <TableCell>
                <AttachmentPopover src={item.src} alt={item.alt} />
            </TableCell>
        </TableRow>
    ))

    return (
        <Table aria-label="GCSE Grades 2019-2020">
            <TableHeader>
                <TableColumn>Type</TableColumn>
                <TableColumn>Subject</TableColumn>
                <TableColumn>Grade</TableColumn>
                <TableColumn>Attachments</TableColumn>
            </TableHeader>
            <TableBody>{tableRowsArray}</TableBody>
        </Table>
    )
}
