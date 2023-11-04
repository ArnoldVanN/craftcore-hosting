import PlansList from "@/components/plans/PlansList"

async function getPlans() {
	const apiUrl = `${process.env.LOCAL_URL}/api/plans`
	const res = await fetch(apiUrl)
	return res.json()
}

export default async function Plans() {
	const data = await getPlans()

	return (
		<>
			<div className="p-4 text-center text-2xl">
				<p>MINECRAFT SERVER HOSTING PLANS</p>
				<p className="pt-4 text-medium">Looking to host a Minecraft server? Subscribe now and get a Minecraft server up and running within minutes!</p>
			</div>
			<PlansList plans={data.plans} />
		</>
	)
}
