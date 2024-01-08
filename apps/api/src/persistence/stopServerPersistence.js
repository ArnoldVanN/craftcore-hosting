export const stopServerPersistence = async ({ req, serverId }) => {
    await req.supabase.from("servers").update({ server_status: "stopped" }).eq("id", serverId)
        .then(({ data, error }) => {
            if (error) {
                throw error
            }
        })
        .catch(error => {
            console.error(error)
            throw new Error(`Error in stopServerPersistence: ${error.message}`)
        })
}