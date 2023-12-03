import createSupabaseServerClient from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import SignIn from "@/components/Auth/SignIn"

export default async function SignInPage() {
	const supabase = await createSupabaseServerClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	const signOut = async () => {
		"use server"

		const supabase = await createSupabaseServerClient()
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
