import { createSupabaseAdminClient } from "../lib/supabase.js"

export const setFreeMemoryOnNodePersistence = async ({ freeMemory, nodeId }) => {
    const supabase = await createSupabaseAdminClient()
    await supabase.from("nodes").update({ free_memory: freeMemory }).eq("id", nodeId)
        .then(({ error }) => {
            if (error) {
                throw error
            }
        })
        .catch(error => {
            console.error(error)
            throw new Error(`Error in setFreeMemoryOnNodePersistence: ${error.message}`)
        })
}