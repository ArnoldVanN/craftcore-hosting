"use client"

import { useState } from "react"
import { createClient } from "@/utils/supabase/client"
import Link from "next/link"

export default function SignIn() {
	const supabase = createClient()
	const [errorMsg, setErrorMsg] = useState(null)

	async function signIn() {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "github",
			options: {
				redirectTo: `${process.env.LOCAL_URL}/welcome`,
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
