import fetch from 'node-fetch'
import { getAgentUrl } from './commandUtils.js'

export const startServerCommand = async ({ node, serverId }) => {
    console.log(`Running Start Server command on node [${node.ip}] for server: [${serverId}]`)
    //     const response = await fetch(
    //         `${getAgentUrl(node)}/servers/${serverId}/start`,
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         },
    //     );
    //     return response.json();
};