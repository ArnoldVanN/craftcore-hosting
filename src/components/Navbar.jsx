"use client"
import "@/styles/globals.css"
import { useSession } from "next-auth/react"
import Link from "next/link"
// import { Button } from "@nextui-org/react"
import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
// import { signIn } from "next-auth/react"
// import { useRouter } from "next/navigation"

const menuItems = [
	{ text: "Plans", href: "/plans" },
	{ text: "Servers", href: "/servers" },
	{ text: "Support", href: "/support" },
	{ text: "Dashboard", href: "/dashboard" },
]

export default function Navbar() {
	const [nav, setNav] = useState(false)
	const { data: session } = useSession()

	const handleNav = () => {
		setNav(!nav)
	}

	// const handleSignIn = () => {
	// 	signIn(undefined)
	// }

	return (
		<>
			<div className=".top-0 fixed z-50 flex h-24 w-full items-center justify-between border-b-2 border-gray-900 bg-[#000712] bg-opacity-95 shadow-xl shadow-gray-900/50 backdrop-blur-sm sm:justify-normal">
				{/* Main Link */}
				<div className="flex h-1/2 items-center justify-center pl-8 sm:h-2/3">
					<Link href="/" className="flex h-full flex-1 items-center justify-center rounded-lg hover:bg-gray-700">
						<h1 className="text-md flex h-full items-center justify-center px-4 font-semibold md:text-lg">GetFooked Hosting</h1>
					</Link>
				</div>
				<ul className="hidden h-2/3 w-3/4 flex-1 items-center justify-end sm:flex">
					<div className="flex h-full justify-end gap-3 pr-12">
						{menuItems.map((item, index) => (
							<li key={index} className="flex h-full items-center justify-center sm:w-1/6 md:w-1/4">
								<Link href={item.href} className="flex h-12 w-32 items-center justify-center rounded-lg p-2 text-lg hover:bg-gray-700">
									{item.text}
								</Link>
							</li>
						))}
						{/* <li className="flex h-full items-center justify-center whitespace-nowrap">
							{session ? (
								<Link href="/account" className="flex h-12 items-center justify-center rounded-lg p-2 text-lg hover:bg-gray-700">
									{session.user.name}'s Account
								</Link>
							) : (
								<Button variant="solid" radius="md" size="lg" onClick={handleSignIn} className="flex h-12 w-32 items-center justify-center rounded-lg p-2 text-lg hover:bg-gray-700">
									Sign In
								</Button>
							)}
						</li> */}
					</div>
				</ul>
				{/* Mobile Button */}
				<div onClick={handleNav} className="z-10 block p-4 sm:hidden">
					{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
				</div>
				{/* Mobile Menu */}
				<div
					className={
						nav
							? "absolute right-0 top-0 flex h-screen w-2/5 items-center justify-center border-l-3 border-gray-800 bg-gray-900 shadow-[-1px_0px_10px_0px_rgba(50,60,77,1)] duration-300 ease-in sm:hidden"
							: "absolute right-[-50%] top-0 flex h-screen w-2/5 items-center justify-center border-l-3 border-gray-800 bg-gray-900 shadow-[-1px_0px_10px_0px_rgba(50,60,77,1)] duration-300 ease-in sm:hidden"
					}>
					<ul>
						{menuItems.map((item, index) => (
							<li key={index} className="pb-4">
								<Link href={item.href} className="flex h-12 w-32 items-center justify-center rounded-lg border-2 border-gray-800 p-2 text-lg shadow-[0px_1px_10px_0px_rgba(31,41,55,1)] hover:bg-gray-700">
									{item.text}
								</Link>
							</li>
						))}
						{/* <li className="pb-4">
							{session ? (
								<Link href="/account" className="flex h-12 w-32 items-center justify-center rounded-lg border-2 border-gray-800 p-2 text-lg shadow-[0px_1px_10px_0px_rgba(31,41,55,1)] hover:bg-gray-700">
									{session.user.name}'s Account
								</Link>
							) : (
								<Button
									variant="solid"
									radius="md"
									size="lg"
									onClick={handleSignIn}
									className="flex h-12 w-32 items-center justify-center rounded-lg border-2 border-gray-800 p-2 text-lg shadow-[0px_1px_10px_0px_rgba(31,41,55,1)] hover:bg-gray-700">
									Sign In
								</Button>
							)}
						</li> */}
					</ul>
				</div>
			</div>
		</>
	)
}
