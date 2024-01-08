import { createSupabaseAdminClient } from "../lib/supabase.js";

export const getNodePersistence = async ({ nodeId }) => {
    const supabase = await createSupabaseAdminClient()
    return await supabase.from("nodes").select().eq("id", nodeId)
        .then(({ data, error }) => {
            if (error) {
                throw error
            }
            return data[0]
        })
        .catch(error => {
            console.error(error)
            throw new Error(`Error in getNodePersistence: ${error.message}`)
        })
};