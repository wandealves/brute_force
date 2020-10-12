import { Router } from 'express';

import UsersController from '../controllers/usersController';

const usersController = new UsersController();
const routes = Router();

routes.get('/users', usersController.show);

export default routes;