import { startServerRoute } from './routes/startServerRoute.js';
import { stopServerRoute } from './routes/stopServerRoute.js';
import { purchaseServerRoute } from './routes/purchaseServerRoute.js';

export const setupRoutes = (app) => {
    app.post('/servers/:serverId/start', startServerRoute);
    app.post('/servers/:serverId/stop', stopServerRoute);
    app.post('/purchase-server', purchaseServerRoute);
};