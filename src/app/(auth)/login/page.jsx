import createSupabaseServerClient from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import SignIn from "@/app/(auth)/login/components/SignIn"
import SignOut from "@/app/(auth)/login/components/SignOut"

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
			<SignOut />
		</div>
	) : (
		<SignIn />
	)
}
