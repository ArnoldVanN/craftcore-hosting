export const createServerPersistence = async ({ req, server }) => {
    return await req.supabase.from("servers").insert(server).select()
        .then(({ data, error }) => {
            if (error) {
                throw error
            }
            return data[0]
        })
        .catch(error => {
            console.error(error)
            throw new Error(`Error in createServerPersistence: ${error.message}`)
        })
}