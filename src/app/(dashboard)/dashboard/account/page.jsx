import { auth } from "auth"

export const metadata = {
	title: "Account",
	description: "View or edit your GetFooked Hosting account information.",
}

export default async function Account() {
	const session = await auth()
	if (!session) {
		signIn()
	} else {
		return <div>{session.user.name}</div>
	}

	// return <pre>{JSON.stringify(session, null, 2)}</pre>
}
