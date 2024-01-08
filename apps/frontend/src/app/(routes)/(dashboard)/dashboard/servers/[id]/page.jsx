import React from "react"
import { createSupabaseServerClient } from "@/utils/supabase/server"
import { UnauthorizedRequestError } from "@/app/(routes)/(exceptions)/exceptions"

export default async function page({ params }) {
	const supabase = await createSupabaseServerClient()
	let server = []
	await supabase
		.from("servers")
		.select()
		.eq("id", params.id)
		.then(({ data, error }) => {
			if (error) {
				throw new Error(error)
			}

			if (!data[0]) {
				throw new UnauthorizedRequestError()
			}
			server = data[0]
		})

	return (
		<div className="container">
			<p>Server: {server.server_name}</p>
		</div>
	)
}
