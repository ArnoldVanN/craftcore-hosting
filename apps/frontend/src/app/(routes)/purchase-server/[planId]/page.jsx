"use client"
import { createClient } from "@/utils/supabase/client"
import { Button, Link } from "@nextui-org/react"

export default async function page({ params }) {
	const supabase = await createClient()
	const { data } = await supabase.from("plans").select().eq("id", params.planId)
	return (
		<div className="container mx-auto">
			<p className="text-3xl"> {data[0].plan_name}</p>
			<Button href="" as={Link}>
				Purchase Server
			</Button>
		</div>
	)
}
