import { stopServerInteractor } from '../interactors/stopServerInteractor.js'

export const stopServerRoute = async (req, res) => {
    const { serverId } = req.params
    try {
        await stopServerInteractor({
            serverId,
            req,
            res
        })
        return res.send('Server stopped')
    } catch (error) {
        return res.status(500).send("Error stopping server!")
    }
}