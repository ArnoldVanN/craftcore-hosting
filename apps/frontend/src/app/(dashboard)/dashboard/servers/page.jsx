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

	return (
		<div className="container mx-auto">
			<div>{user.user_metadata.preferred_username}&apos;s Servers</div>
			<ServerList servers={data} />
		</div>
	)
}
