"use client"
// TODO: figure out why the individual server side table doesnt work and why i need to use client zzz
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Button } from "@nextui-org/react"
import { CameraIcon } from "./CameraIcon"
import AttachmentPopover from "./AttachmentPopover"
export default function CertificateTable() {
    return (
        <Table aria-label="A-level Grades 2022">
            <TableHeader>
                <TableColumn>Subject</TableColumn>
                <TableColumn>Grade</TableColumn>
                <TableColumn>Attachments</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Further Maths (+ Stats, Mech)</TableCell>
                    <TableCell>A (lost the * due to a misread DX)</TableCell>
                    <TableCell>
                        <AttachmentPopover
                            src="https://media.licdn.com/dms/image/C4E2DAQEj6rT553SOIA/profile-treasury-image-shrink_1280_1280/0/1677609079733?e=1690297200&v=beta&t=lrQdBHWCrEmd-ZIJUKDYLr0pPo8-Bi-JDScoVxdwO3I"
                            alt=""
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Maths (+ Stats, Mech)</TableCell>
                    <TableCell>A*</TableCell>
                    <TableCell>
                        <AttachmentPopover
                            src="https://media.licdn.com/dms/image/C4E2DAQEj6rT553SOIA/profile-treasury-image-shrink_1280_1280/0/1677609079733?e=1690297200&v=beta&t=lrQdBHWCrEmd-ZIJUKDYLr0pPo8-Bi-JDScoVxdwO3I"
                            alt=""
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Physics</TableCell>
                    <TableCell>A*</TableCell>
                    <TableCell>
                        <AttachmentPopover
                            src="https://media.licdn.com/dms/image/C4E2DAQEj6rT553SOIA/profile-treasury-image-shrink_1280_1280/0/1677609079733?e=1690297200&v=beta&t=lrQdBHWCrEmd-ZIJUKDYLr0pPo8-Bi-JDScoVxdwO3I"
                            alt=""
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Chemistry</TableCell>
                    <TableCell>A*</TableCell>
                    <TableCell>
                        <AttachmentPopover
                            src="https://media.licdn.com/dms/image/C4E2DAQHBTCvEXh87Yw/profile-treasury-image-shrink_1280_1280/0/1677609120971?e=1690534800&v=beta&t=Ufcw3RtL-fW2xhi-qe7aD4pV9tUa3EAsafbd8Po78Cs"
                            alt=""
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
