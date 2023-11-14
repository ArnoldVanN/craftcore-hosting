import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"
import SignIn from "@/components/Auth/SignIn"

export default async function AuthButtons() {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

	const {
		data: { user },
	} = await supabase.auth.getUser()

	const signOut = async () => {
		"use server"

		const cookieStore = cookies()
		const supabase = createClient(cookieStore)
		await supabase.auth.signOut()
		return redirect("/login")
	}

	return user ? (
		<div className="flex items-center gap-4 bg-red-600">
			Hey, {user.email}!
			<form action={signOut}>
				<button className="bg-btn-background hover:bg-btn-background-hover rounded-md bg-red-800 px-4 py-2 no-underline">Logout</button>
			</form>
		</div>
	) : (
		<SignIn />
	)
}
