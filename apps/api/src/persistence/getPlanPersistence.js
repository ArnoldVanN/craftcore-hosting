export const getPlanPersistence = async (req, planId) => {
    return await req.supabase.from("plans").select().eq("id", planId)
        .then(({ data }) => {
            return data[0]
        })
        .catch(error => {
            console.error(error)
            throw new Error(`Error in getPlanPersistence: ${error.message}`)
        })
}