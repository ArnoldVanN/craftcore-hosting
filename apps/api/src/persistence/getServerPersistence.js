export const getServerPersistence = async ({ req, serverId }) => {
    return await req.supabase.from("servers").select().eq("id", serverId)
        .then(({ data, error }) => {
            if (error) {
                throw error
            }
            return data[0]
        })
        .catch(error => {
            console.error(error)
            throw new Error(`Error in getServerPersistence: ${error.message}`)
        })
}