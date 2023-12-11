"use client"
import { useFormStatus } from "react-dom"
import { Spinner } from "@nextui-org/react"

export default function SubmitButton({ children, className }) {
	const { pending } = useFormStatus()

	return (
		<button className={`${className}`} type="submit" aria-disabled={pending}>
			<div className="flex gap-4">
				{children} {pending && <Spinner size="sm" />}
			</div>
		</button>
	)
}
