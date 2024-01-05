import logOut from "@/app/(routes)/(auth)/login/_actions/log-out-action"
import ActionsSubmitButton from "@/components/ActionsSubmitButton"

export default function LogOut({ className }) {
	return (
		<form action={logOut}>
			<ActionsSubmitButton className={`${className}`}>Sign Out</ActionsSubmitButton>
		</form>
	)
}
