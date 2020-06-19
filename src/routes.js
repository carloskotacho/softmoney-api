import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import CategoryController from './app/controllers/CategoryController';
import StateController from './app/controllers/StateController';
import CityController from './app/controllers/CityController';
import CustomerController from './app/controllers/CustomerController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import LaunchController from './app/controllers/LaunchController';

import validateUserStore from './app/validators/UserStore';
import validateUserUpdate from './app/validators/UserUpdate';
import validateSessionStore from './app/validators/SessionStore';
import validateCategoryStore from './app/validators/CategoryStore';
import validateCustomerStore from './app/validators/CustomerStore';
import validateCustomerUpdate from './app/validators/CustomerUpdate';

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
routes.put('/customers/:id', validateCustomerUpdate, CustomerController.update);
routes.delete('/customers/:id', CustomerController.delete);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/providers', ProviderController.index);

routes.get('/launches', LaunchController.index);
routes.get('/launches/:id', LaunchController.findById);

export default routes;
