import { createSupabaseServerClient } from "@/utils/supabase/server"
import ActionsSubmitButton from "@/components/ActionsSubmitButton"
import { purchaseServer } from "./actions"

export default async function page({ params }) {
	const supabase = await createSupabaseServerClient()
	const { data } = await supabase.from("plans").select().eq("id", params.planId)
	const purchaseServerWithPlanId = purchaseServer.bind(null, params.planId, "1.20.4")

	return (
		<div className="container mx-auto">
			<p className="text-3xl"> {data[0].plan_name}</p>
			<form action={purchaseServerWithPlanId}>
				{/* <input type="hidden" name="planId" value={params.planId} />
				<input type="hidden" name="version" value={"1.20.4"} /> */}
				<ActionsSubmitButton className="">Purchase server</ActionsSubmitButton>
			</form>
		</div>
	)
}
