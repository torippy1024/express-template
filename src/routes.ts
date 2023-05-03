import express from 'express';
import userRoutes from './controllers/users';

const routes = express.Router();

routes.use('/users', userRoutes);

export default routes;
