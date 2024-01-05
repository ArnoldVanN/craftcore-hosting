export const getNodePersistence = async ({ supabase, nodeId }) => {
    return await supabase.from("nodes").select().eq("id", nodeId)
};