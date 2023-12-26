"use client"
import { Card, CardHeader, CardBody } from "@nextui-org/react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function PlansList({ plans }) {
	const router = useRouter()

	return (
		<div className="mx-[10%] py-4 xl:mx-[25%]">
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:grid-rows-2">
				{plans.map((plan, index) => (
					<Card key={index} isPressable onPress={() => router.push()} className="border-2 border-gray-700 bg-gray-800 text-white hover:shadow-[inset_0px_7px_10px_0px_rgba(15,20,28,1)]">
						<CardHeader className="justify-center">{plan.plan_name}</CardHeader>
						<CardBody className="items-center gap-2">
							<Image src={plan.icon_url} alt={plan.plan_name + "Icon"} width={66} height={66} />
							<p>{plan.price}&euro;</p>
							<p>{plan.memory_size}GB</p>
							<p>{plan.storage_size !== null || "" ? plan.storage_size + "GB" : "Unlimited Storage"}</p>
						</CardBody>
					</Card>
				))}
			</div>
		</div>
	)
}
