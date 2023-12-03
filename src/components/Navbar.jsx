"use client"
import "@/styles/globals.css"
import Link from "next/link"
import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import Conditional from "@/components/Conditional"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn } from "@nextui-org/react"
import SignOut from "@/components/Auth/SignOut"

const menuItems = [
	{ text: "Plans", href: "/plans" },
	{ text: "Servers", href: "/dashboard/servers" },
	{ text: "Support", href: "/support" },
	{ text: "Dashboard", href: "/dashboard" },
]

export default function Navbar({ user }) {
	const [nav, setNav] = useState(false)

	const handleNav = () => {
		setNav(!nav)
	}

	return (
		<>
			<div className=".top-0 fixed z-50 flex h-24 w-full items-center justify-between border-b-2 border-gray-900 bg-[#000712] bg-opacity-95 shadow-xl shadow-gray-900/50 backdrop-blur-sm lg:justify-normal">
				{/* Main Navbar */}
				<div className="flex h-1/2 items-center justify-center pl-8 sm:h-2/3">
					<Link href="/" className="flex h-full flex-1 items-center justify-center rounded-lg hover:bg-gray-700">
						<h1 className="text-md flex h-full items-center justify-center px-4 font-semibold md:text-lg">CraftCore Hosting</h1>
					</Link>
				</div>
				<ul className="hidden h-2/3 w-3/4 items-center justify-end lg:flex lg:flex-1">
					<div className="flex h-full justify-end gap-3 pr-12">
						{menuItems.map((item, index) => (
							<li key={index} className="flex h-full items-center justify-center sm:w-1/6 md:w-1/4">
								<Link href={item.href} className="flex h-12 w-32 items-center justify-center rounded-3xl p-2 text-lg hover:bg-gray-700">
									{item.text}
								</Link>
							</li>
						))}
						<Conditional showWhen={user}>
							<li className="flex h-full items-center justify-center sm:w-1/6 md:w-1/4">
								<Dropdown>
									<DropdownTrigger>
										<Button className="flex h-12 w-32 items-center justify-center rounded-3xl bg-[#000712] p-2 text-lg text-white hover:bg-gray-700">{user?.user_metadata.name}</Button>
									</DropdownTrigger>
									<DropdownMenu aria-label="Static Actions" closeOnSelect={false} className="text-black">
										<DropdownItem key="account">
											<Link href="/dashboard/account">{user?.user_metadata.name}'s Account</Link>
										</DropdownItem>
										<DropdownItem key="settings">
											<Link href="/dashboard/account">Settings</Link>
										</DropdownItem>
										<DropdownItem key="sign-out">
											<SignOut />
										</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</li>
						</Conditional>
					</div>
				</ul>
				{/* Mobile Button */}
				<div onClick={handleNav} className="z-10 block p-4 lg:hidden">
					{nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
				</div>
				{/* Mobile Navbar */}
				<div
					className={
						nav
							? "absolute right-0 top-0 flex h-screen w-2/5 items-center justify-center border-l-3 border-gray-800 bg-gray-900 shadow-[-1px_0px_10px_0px_rgba(50,60,77,1)] duration-300 ease-in lg:hidden"
							: "absolute right-[-50%] top-0 flex h-screen w-2/5 items-center justify-center border-l-3 border-gray-800 bg-gray-900 shadow-[-1px_0px_10px_0px_rgba(50,60,77,1)] duration-300 ease-in lg:hidden"
					}>
					<ul>
						{menuItems.map((item, index) => (
							<li key={index} className="pb-4">
								<Link href={item.href} className="flex h-12 w-32 items-center justify-center rounded-3xl border-2 border-gray-800 p-2 text-lg shadow-[0px_1px_10px_0px_rgba(31,41,55,1)] hover:bg-gray-700">
									{item.text}
								</Link>
							</li>
						))}
						<Conditional showWhen={user}>
							<li className="pb-4">
								<Link
									href="/dashboard/account"
									className="flex h-12 w-32 items-center justify-center rounded-3xl border-2 border-gray-800 p-2 text-lg shadow-[0px_1px_10px_0px_rgba(31,41,55,1)] hover:bg-gray-700">
									{user?.user_metadata.name}
								</Link>
							</li>
						</Conditional>
					</ul>
				</div>
			</div>
		</>
	)
}
