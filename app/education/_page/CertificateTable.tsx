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
                        <AttachmentPopover />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Maths (+ Stats, Mech)</TableCell>
                    <TableCell>A*</TableCell>
                    <TableCell>
                        <AttachmentPopover />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Physics</TableCell>
                    <TableCell>A*</TableCell>
                    <TableCell>
                        <AttachmentPopover />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Chemistry</TableCell>
                    <TableCell>A*</TableCell>
                    <TableCell>
                        <AttachmentPopover />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
