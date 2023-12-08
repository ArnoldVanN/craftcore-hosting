import logOut from "@/app/(auth)/login/_actions/log-out-action"
import ActionsSubmitButton from "@/components/ActionsSubmitButton"

export default function SignOut() {
	return (
		<form action={logOut}>
			<ActionsSubmitButton>Sign Out</ActionsSubmitButton>
		</form>
	)
}
