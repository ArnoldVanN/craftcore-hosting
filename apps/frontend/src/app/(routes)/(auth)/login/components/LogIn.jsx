import ActionsSubmitButton from "@/components/ActionsSubmitButton"
import { createSupabaseServerClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export default async function LogIn({ children, className }) {
	// This is the only way i could get sign in to work using server actions. Putting it in its own actions file doesnt work for some reason. Think its related to this https://github.com/supabase/auth-helpers/issues/580
	const signIn = async () => {
		"use server"
		const supabase = await createSupabaseServerClient()

		const { data } = await supabase.auth.signInWithOAuth({
			provider: "github",
			options: {
				redirectTo: `${process.env.NEXT_PUBLIC_LOCAL_URL}/auth/callback`,
			},
		})

		// Redirect to Supabase Auth with provider, redirect_to and code_challenge
		if (data.url) {
			redirect(data.url)
		}
	}

	return (
		<form action={signIn}>
			<ActionsSubmitButton className={`${className}`}>{children}</ActionsSubmitButton>
		</form>
	)
}
