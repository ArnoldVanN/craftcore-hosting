import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const metadata = {
	title: "Servers",
	description: "View owned GetFooked Hosting server packages.",
}

export default async function Servers() {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		redirect("/login")
	}

	return <div>{user.user_metadata.name}'s Servers</div>
}
