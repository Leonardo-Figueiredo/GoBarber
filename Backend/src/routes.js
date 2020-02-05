import { Router } from 'express';
import UserController from './app/controllers/UserController';
import sessionController from './app/controllers/SessionControler';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', sessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

module.exports = routes;
