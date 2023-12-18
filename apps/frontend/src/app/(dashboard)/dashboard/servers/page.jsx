import { createSupabaseServerClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

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

	return <div>{user.user_metadata.name}&apos;s Servers</div>
}
