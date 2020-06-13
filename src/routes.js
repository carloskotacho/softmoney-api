import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import CategoryController from './app/controllers/CategoryController';
import StateController from './app/controllers/StateController';
import CityController from './app/controllers/CityController';
import CustomerController from './app/controllers/CustomerController';

import validateUserStore from './app/validators/UserStore';
import validateUserUpdate from './app/validators/UserUpdate';
import validateSessionStore from './app/validators/SessionStore';
import validateCategoryStore from './app/validators/CategoryStore';
import validateCustomerStore from './app/validators/CustomerStore';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', validateUserStore, UserController.store);
routes.post('/sessions', validateSessionStore, SessionController.store);

routes.use(authMiddleware);

routes.put('/users', validateUserUpdate, UserController.update);

routes.get('/categories', CategoryController.index);
routes.get('/categories/:id', CategoryController.findById);
routes.post('/categories', validateCategoryStore, CategoryController.store);

routes.get('/states', StateController.index);
routes.get('/cities/:stateId', CityController.findByState);

routes.post('/customers', validateCustomerStore, CustomerController.store);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

export default routes;
