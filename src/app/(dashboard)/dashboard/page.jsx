import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/session"
import { authOptions } from "@/lib/auth"

export const metadata = {
	title: "Dashboard",
}

export default async function DashboardPage() {
	const user = await getCurrentUser()

	if (!user) {
		redirect(authOptions?.pages?.signIn || "/login")
	}

	return <div>DashboardPage</div>
}
