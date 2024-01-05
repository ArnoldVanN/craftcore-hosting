import { startServerPersistence } from '../persistence/startServerPersistence.js';
import { getServerPersistence } from '../persistence/getServerPersistence.js';
import { getNodePersistence } from '../persistence/getNodePersistence.js';
import { startServerCommand } from '../commands/startServerCommand.js';

import { createClient } from "../lib/supabase.js"

export const startServerInteractor = async ({
    serverId,
    req,
    res
}) => {
    const supabase = createClient(req, res)
    const server = await getServerPersistence({ supabase, serverId });
    // const node = await getNodePersistence({
    //     nodeId: server.nodeId,
    // });
    // await startServerPersistence({
    //     serverId,
    // });
    // await startServerCommand({ serverId: server.id, node });
};