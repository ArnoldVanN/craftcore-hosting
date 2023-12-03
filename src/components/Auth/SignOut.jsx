import { Button } from "@nextui-org/react"
import logout from "@/components/Auth/actions"
import ActionsSubmitButton from "@/components/ActionsSubmitButton"

export default function SignOut() {
	return (
		<form action={logout}>
			<ActionsSubmitButton>Sign Out</ActionsSubmitButton>
			{/* <Button type="submit">SignOut</Button> */}
		</form>
	)
}
