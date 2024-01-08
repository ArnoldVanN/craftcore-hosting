import { getServerPersistence } from '../persistence/getServerPersistence.js';
import { getNodePersistence } from '../persistence/getNodePersistence.js';
import { stopServerPersistence } from '../persistence/stopServerPersistence.js';
import { stopServerCommand } from '../commands/stopServerCommand.js';

export const stopServerInteractor = async ({
    serverId,
    req,
    res
}) => {
    try {
        const server = await getServerPersistence({ req, serverId });

        const node = await getNodePersistence({ nodeId: server.node_id, });

        await stopServerCommand({ serverId: server.id, node });

        await stopServerPersistence({ req, serverId });
    } catch (error) {
        console.error(error)
        throw new Error()
    }

};