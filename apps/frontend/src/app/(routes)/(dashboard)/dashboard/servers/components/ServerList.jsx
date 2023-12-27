"use client"
import React from "react"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Chip, getKeyValue } from "@nextui-org/react"
import { Link } from "@nextui-org/react"
import { EditIcon } from "./EditIcon"
import { EyeIcon } from "./EyeIcon"
import { redirect } from "next/navigation"

const columns = [
	{ label: "NAME", key: "server_name" },
	{ label: "IP", key: "server_ip" },
	{ label: "PORT", key: "server_port" },
	{ label: "STATUS", key: "server_status" },
	{ label: "ACTIONS", key: "actions" },
]

const statusColorMap = {
	running: "success",
	stopped: "danger",
	starting: "warning",
}

export default function ServerList({ servers }) {
	// CUSTOM CELLS

	const renderCell = React.useCallback((server, columnKey) => {
		const cellValue = server[columnKey]

		// value of columnKey is the `key` property of columns[]
		switch (columnKey) {
			case "server_name":
				return (
					<Link href={`/dashboard/servers/${server.id}`} underline="always" color="primary">
						{cellValue}
					</Link>
				)
			case "server_status":
				return (
					<Chip className="capitalize" color={statusColorMap[server.server_status]} size="sm" variant="flat">
						{cellValue}
					</Chip>
				)
			case "actions":
				return (
					<div className="relative flex items-center gap-2 text-black">
						<Tooltip content="Details" className="text-black">
							<span className="cursor-pointer text-lg text-default-400 active:opacity-50">
								<EyeIcon />
							</span>
						</Tooltip>
						<Tooltip content="Edit server" className="text-black">
							<span className="cursor-pointer text-lg text-default-400 active:opacity-50">
								<EditIcon />
							</span>
						</Tooltip>
					</div>
				)
			default:
				return cellValue
		}
	}, [])

	return (
		<Table aria-label="Your owned CraftCore servers" className="text-black">
			<TableHeader columns={columns}>
				{(column) => (
					<TableColumn key={column.key} align={column.key === "actions" ? "center" : "start"}>
						{column.label}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody items={servers}>{(item) => <TableRow key={item.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}</TableBody>
		</Table>
	)
}
