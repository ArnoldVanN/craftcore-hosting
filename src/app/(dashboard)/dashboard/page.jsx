import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function Dashboard() {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

	const {
		data: { user },
	} = await supabase.auth.getUser()

	console.log(user)

	if (!user) {
		redirect("/login")
	}

	return <div>Welcome, {user.user_metadata.name}</div>
}
