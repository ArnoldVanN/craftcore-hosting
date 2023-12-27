import { createSupabaseServerClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import ServerList from "./components/ServerList"

export const metadata = {
	title: "Servers",
	description: "View owned CraftCore Hosting server packages.",
}

export default async function Servers() {
	const supabase = await createSupabaseServerClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		redirect("/login")
	}

	const { data } = await supabase.from("servers").select()
	// Sanitize data
	const sanitizedData = data.map(({ user_id, plan_id, ...rest }) => rest)

	return (
		<div className="h-full bg-cyan-900">
			<div className="container mx-auto h-full">
				<div>
					<p className="py-4 text-3xl">{user.user_metadata.preferred_username}&apos;s Servers</p>
				</div>
				<ServerList servers={sanitizedData} />
			</div>
		</div>
	)
}
