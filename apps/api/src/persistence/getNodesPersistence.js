import { createSupabaseAdminClient } from "../lib/supabase.js"

export const getNodesPersistence = async () => {
    const supabase = await createSupabaseAdminClient()
    return await supabase.from("node").select()
        .then(({ data, error }) => {
            if (error) {
                throw error
            }
            return data
        })
        .catch(error => {
            console.error(error)
            throw new Error(`Error in getNodesPersistence: ${error.message}`)
        })
}