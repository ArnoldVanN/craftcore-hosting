import logOut from "@/app/(auth)/login/_actions/log-out-action"
import ActionsSubmitButton from "@/components/ActionsSubmitButton"

export default function SignOut({ className }) {
	return (
		<form action={logOut}>
			<ActionsSubmitButton className={`${className}`}>Sign Out</ActionsSubmitButton>
		</form>
	)
}
