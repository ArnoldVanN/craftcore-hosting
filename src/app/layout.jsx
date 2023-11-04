import "@/styles/globals.css"
import Navbar from "@/components/Navbar"
import Providers from "@/app/providers"

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

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="h-screen w-screen overflow-x-hidden">
				<Providers>
					<Navbar />
					<div className="pt-24">
						<main className="bg-black">{children}</main>
					</div>
				</Providers>
			</body>
		</html>
	)
}
