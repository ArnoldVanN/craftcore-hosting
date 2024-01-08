import { purchaseServerInteractor } from '../interactors/purchaseServerInteractor.js';

export const purchaseServerRoute = async (req, res) => {
    try {
        await purchaseServerInteractor(
            req
        );
        res.sendStatus(200)
    } catch (error) {
        return res.status(500).send("Error purchasing server!")
    }
};