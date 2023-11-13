import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import SignIn from "src/components/Auth/SignIn"

export default async function SignInPage() {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)
	const { data } = await supabase.auth.getSession()

	if (data?.session) {
		redirect("/")
	}

	return <SignIn />
}
