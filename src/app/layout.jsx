import "@/styles/globals.css"
import Navbar from "@/components/Navbar"
import Providers from "@/app/providers"
import { createClient } from "@/utils/supabase/server"
import { cookies } from "next/headers"

export const metadata = {
	title: "Home",
	description: "GetFooked Hosting Home",
}

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: 0,
}

export default async function RootLayout({ children }) {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore)

	const {
		data: { user },
	} = await supabase.auth.getUser()
	console.log(user)
	return (
		<html lang="en">
			<body className="h-screen w-screen overflow-x-hidden">
				<Providers>
					<Navbar user={user} />
					<div className="pt-24">
						<main className="bg-black">{children}</main>
					</div>
				</Providers>
			</body>
		</html>
	)
}
