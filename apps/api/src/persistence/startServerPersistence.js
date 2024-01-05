export const startServerPersistence = async ({
    supabase,
    serverId
}) => {
    const server = await supabase.from("servers").select().eq("id", serverId)
    console.log(server)
};