import { createSupabaseServerClient } from "@/utils/supabase/server"
import LogIn from "@/app/(routes)/(auth)/login/components/LogIn"
import LogOut from "@/app/(routes)/(auth)/login/components/LogOut"
import { Card, CardHeader, CardBody } from "@nextui-org/react"
import Icon from "@/components/Icon"

export default async function LogInPage() {
	const supabase = await createSupabaseServerClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	return user ? (
		<div className="flex h-screen items-center justify-center">
			<Card className=" w-[75%] bg-gray-800 text-center text-white shadow-inner shadow-gray-900 sm:w-2/5 lg:w-1/4">
				<CardHeader className="justify-center">You are currently logged in as: {user.user_metadata.preferred_username}</CardHeader>
				<CardBody className="items-center">
					<LogOut className="justify-center rounded-lg px-4 py-2 hover:bg-gray-900" />
				</CardBody>
			</Card>
		</div>
	) : (
		<div className="h-full">
			<div className=" relative top-[40%] flex justify-center">
				<Card className="w-[75%] bg-gray-800 text-white shadow-inner shadow-gray-900 sm:w-2/5 lg:w-1/4">
					<CardHeader>
						<p className="text-sm lg:text-lg">Sign In Using:</p>
					</CardHeader>
					<CardBody className="items-center p-2">
						<LogIn className="rounded-xl p-4 hover:bg-gray-900">
							<div className="flex gap-2 text-sm lg:text-lg">
								<Icon name="github" /> GitHub OAuth
							</div>
						</LogIn>
					</CardBody>
				</Card>
			</div>
		</div>
	)
}
