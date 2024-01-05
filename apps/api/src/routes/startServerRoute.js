import { startServerInteractor } from '../interactors/startServerInteractor.js';

export const startServerRoute = async (req, res) => {
    const { serverId } = req.params;
    await startServerInteractor({
        serverId,
        req,
        res
    });
    return res.send('Server started');
};