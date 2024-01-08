import { getNodesPersistence } from '../../persistence/getNodesPersistence.js'
import { getServersOnNodePersistence } from '../../persistence/getServersOnNodePersistence.js'
import { setFreeMemoryOnNodePersistence } from '../../persistence/setFreeMemoryOnNodePersistence.js'
import { createServerPersistence } from '../../persistence/createServerPersistence.js'
import { startServerCommand } from '../../commands/startServerCommand.js'

export const createServerOnFreeNode = async ({
    userId,
    plan,
    version,
    req,
}) => {
    try {
        const nodes = await getNodesPersistence()

        const memory = plan.memory_size

        const desiredNode = nodes.find(node => node.free_memory > memory)

        if (!desiredNode) {
            throw new Error('No available nodes')
        }

        const servers = await getServersOnNodePersistence({
            nodeId: desiredNode.id,
        })

        let freePort = 25565
        if (servers.length) {
            const ports = servers.map(s => s.server_port).sort()
            freePort = ports[ports.length - 1] + 1
        }

        await setFreeMemoryOnNodePersistence({
            freeMemory: desiredNode.free_memory - memory,
            nodeId: desiredNode.id,
        })

        const server = {
            user_id: userId,
            plan_id: plan.id,
            node_id: desiredNode.id,
            server_name: plan.plan_name,
            server_hostname: "localhost", // TODO: figure this out
            server_port: freePort,
            server_status: "starting",
            version,
            // running: true,
            // runBackup: false,
        }

        const res = await createServerPersistence({
            req,
            server,
        })

        const serverId = res.id

        await startServerCommand({
            node: desiredNode,
            serverId
        })
    } catch (error) {
        throw error
    }
}