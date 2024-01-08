import { startServerInteractor } from '../interactors/startServerInteractor.js'

export const startServerRoute = async (req, res) => {
    const { serverId } = req.params
    try {
        await startServerInteractor({
            serverId,
            req,
            res
        })
        return res.send('Server started');
    } catch (error) {
        return res.status(500).send("Error starting server!")
    }
}