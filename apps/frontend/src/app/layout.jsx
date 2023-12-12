import "@/styles/globals.css"
import Navbar from "@/components/Navbar"
import Providers from "@/app/providers"
import { createSupabaseServerClient } from "@/utils/supabase/server"

export const metadata = {
	title: "Home",
	description: "CraftCore Hosting Home",
}

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: 0,
}

export default async function RootLayout({ children }) {
	const supabase = await createSupabaseServerClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (user) {
		console.log("User: " + user.user_metadata.user_name + " has successfully logged in.")
	}

	return (
		<html lang="en">
			<body className="h-screen w-screen overflow-x-hidden">
				<Providers>
					<Navbar user={user} />
					<div className="h-screen pt-24">
						<main className="h-full bg-black">{children}</main>
					</div>
				</Providers>
			</body>
		</html>
	)
}
