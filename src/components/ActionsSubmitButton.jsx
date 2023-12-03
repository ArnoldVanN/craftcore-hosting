"use client"
import { useFormStatus } from "react-dom"
import { Spinner } from "@nextui-org/react"

export default function SubmitButton({ children }) {
	const { pending } = useFormStatus()

	return (
		<button type="submit" aria-disabled={pending}>
			{children} {pending && <Spinner size="sm" />}
		</button>
	)
}
