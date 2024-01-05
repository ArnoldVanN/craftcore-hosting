export const getServerPersistence = async ({
    supabase,
    serverId
}) => {

    const { data } = await supabase.from("plans").select().eq("id", serverId)
    console.log("Request successful! " + data[0].plan_name)
};