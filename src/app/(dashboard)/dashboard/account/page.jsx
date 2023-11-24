import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const metadata = {
	title: "Account",
	description: "View or edit your GetFooked Hosting account information.",
}

export default async function Account() {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		redirect("/login")
	}

	return <div>{user.user_metadata.name}'s account settings</div>
}
