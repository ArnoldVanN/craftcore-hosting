import { startServerRoute } from './routes/startServerRoute.js';

export const setupRoutes = (app) => {
    app.post('/servers/:serverId/start', startServerRoute);
    // app.post('/existing-user-purchase', isAuthenticated, purchaseServerRoute);
};