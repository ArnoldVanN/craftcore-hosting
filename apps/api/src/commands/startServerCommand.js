import fetch from 'node-fetch'
import { getAgentUrl } from './commandUtils.js'

export const startServerCommand = async ({
    node,
    serverId,
}) => {
    const response = await fetch(
        `${getAgentUrl(node)}/servers/${serverId}/start`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
    return response.json();
};