import { startServerPersistence } from '../persistence/startServerPersistence.js';
import { getServerPersistence } from '../persistence/getServerPersistence.js';
import { getNodePersistence } from '../persistence/getNodePersistence.js';
import { startServerCommand } from '../commands/startServerCommand.js';

export const startServerInteractor = async ({
    serverId,
    req,
    res
}) => {
    try {
        const server = await getServerPersistence({ req, serverId });

        const node = await getNodePersistence({ nodeId: server.node_id, });

        await startServerCommand({ serverId: server.id, node });

        await startServerPersistence({ req, serverId });
    } catch (error) {
        console.error(error)
        throw new Error()
    }
};