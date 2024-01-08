export const startServerPersistence = async ({ req, serverId }) => {
    await req.supabase.from("servers").update({ server_status: "running" }).eq("id", serverId)
        .then(({ data, error }) => {
            if (error) {
                throw error
            }
        })
        .catch(error => {
            console.error(error)
            throw new Error(`Error in startServerPersistence: ${error.message}`)
        })
}