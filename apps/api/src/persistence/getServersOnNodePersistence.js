import { createSupabaseAdminClient } from "../lib/supabase.js"

export const getServersOnNodePersistence = async ({ nodeId }) => {
    const supabase = await createSupabaseAdminClient()
    return await supabase.from("servers").select().eq("node_id", nodeId)
        .then(({ data, error }) => {
            if (error) {
                throw error
            }
            return data
        })
        .catch(error => {
            console.error(error)
            throw new Error(`Error in getServersOnNodePersistence: ${error.message}`)
        })
}