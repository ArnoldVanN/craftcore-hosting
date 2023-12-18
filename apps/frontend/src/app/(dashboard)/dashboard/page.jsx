import { createSupabaseServerClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export default async function Dashboard() {
	const supabase = await createSupabaseServerClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		redirect("/login")
	}

	return <div>Welcome, {user.user_metadata.name}</div>
}
