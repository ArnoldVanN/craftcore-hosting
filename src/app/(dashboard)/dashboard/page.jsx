import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function Page() {
	const cookieStore = cookies()

	const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
		cookies: {
			get(name) {
				return cookieStore.get(name)?.value
			},
		},
	})
	// const { data, error } = await supabase.auth.getSession()

	const { data, error } = await supabase.from("public").select()
	console.log(data)
	if (!data) {
		redirect("/login")
	}

	return <div>DashboardPage</div>
}
