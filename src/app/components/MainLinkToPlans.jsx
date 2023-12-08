"use client"
import Link from "next/link"
import { Button } from "@nextui-org/react"

export default function MainLinkToPlans() {
	return (
		<div className="pt-4">
			<Link href="/plans" className="block rounded-lg">
				<Button variant="solid" radius="md" size="lg" className="inline-block min-h-[auto] w-2/3 whitespace-normal text-sm font-semibold leading-4">
					CHECK OUT OUR MINECRAFT SERVER PLANS!
				</Button>
			</Link>
		</div>
	)
}
