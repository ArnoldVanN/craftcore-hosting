"use client"
import { useState } from "react"
import { createClient } from "@/utils/supabase/client"

export default function SignIn() {
	const supabase = createClient()
	const [errorMsg, setErrorMsg] = useState(null)

	async function signIn() {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "github",
			options: {
				redirectTo: `${process.env.NEXT_PUBLIC_LOCAL_URL}/auth/callback`,
			},
		})

		if (error) {
			setErrorMsg(error.message)
		}
	}

	return (
		<div>
			<button onClick={signIn}>Sign In</button>

			<div className="card">{errorMsg && <div className="text-red-600">{errorMsg}</div>}</div>
		</div>
	)
}
