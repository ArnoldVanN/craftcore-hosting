"use client"
import { useCallback } from "react"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip } from "@nextui-org/react"
import { EditIcon } from "./EditIcon"
import { EyeIcon } from "./EyeIcon"

const columns = [
	{ name: "NAME", uid: "server_name" },
	{ name: "IP", uid: "server_ip" },
	{ name: "PORT", uid: "server_port" },
	{ name: "STATUS", uid: "server_status" },
	{ name: "ACTIONS", uid: "actions" },
]

const statusColorMap = {
	running: "success",
	stopped: "danger",
	starting: "warning",
}

export default function ServerList({ servers }) {
	const renderCell = useCallback((server, columnKey) => {
		const cellValue = server[columnKey]

		switch (columnKey) {
			case "name":
				return <div>{cellValue}</div>
			case "status":
				return (
					<Chip className="capitalize" color={statusColorMap[server.server_status]} size="sm" variant="flat">
						{cellValue}
					</Chip>
				)
			case "actions":
				return (
					<div className="relative flex items-center gap-2">
						<Tooltip content="Details">
							<span className="cursor-pointer text-lg text-default-400 active:opacity-50">
								<EyeIcon />
							</span>
						</Tooltip>
						<Tooltip content="Edit user">
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
		<Table aria-label="Example table with custom cells" className="text-black">
			<TableHeader columns={columns}>
				{(column) => (
					<TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody items={servers}>{(item) => <TableRow key={item.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}</TableBody>
		</Table>
	)
}
