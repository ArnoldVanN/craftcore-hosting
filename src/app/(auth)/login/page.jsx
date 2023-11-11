"use client"
import React, { useState } from "react"
import { useSearchParams } from "next/navigation"
import { signIn, getProviders } from "next-auth/react"

import { Icons } from "@/components/icons"

export default function LoginPage() {
	const [isGitHubLoading, setIsGitHubLoading] = useState(false)
	const searchParams = useSearchParams()

	return (
		<button
			type="button"
			onClick={() => {
				setIsGitHubLoading(true)
				signIn("github", {
					callbackUrl: searchParams?.get("from") || "/dashboard",
				})
			}}
			disabled={isGitHubLoading}>
			{isGitHubLoading ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : <Icons.gitHub className="mr-2 h-4 w-4" />} Github
		</button>
	)
}
