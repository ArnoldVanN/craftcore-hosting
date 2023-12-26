import React from "react"
import { createSupabaseServerClient } from "@/utils/supabase/server"

export default async function page({ params }) {
	const supabase = await createSupabaseServerClient()
	const { data } = await supabase.from("servers").select().eq("id", params.id)
	console.log(data)
	return (
		<div className="container">
			<p>Server: {params.id}</p>
		</div>
	)
}
