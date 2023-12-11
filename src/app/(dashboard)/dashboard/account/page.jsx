import createSupabaseServerClient from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export const metadata = {
	title: "Account",
	description: "View or edit your CraftCore Hosting account information.",
}

export default async function Account() {
	const supabase = await createSupabaseServerClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		redirect("/login")
	}

	return <div>{user.user_metadata.name}'s account settings</div>
}
