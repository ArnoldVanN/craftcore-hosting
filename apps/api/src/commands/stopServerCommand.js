import fetch from 'node-fetch'
import { getAgentUrl } from './commandUtils.js'

export const stopServerCommand = async ({ node, serverId }) => {
    console.log(`Running Stop Server command on node [${node.ip}] for server: [${serverId}]`)
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