import express from 'express';
import usersController from './users.controller.js';
import { usersPrefix } from '../../common/constants.js';

const usersRouter = express.Router({});

usersRouter.get(usersPrefix, usersController.getAll);
usersRouter.post(usersPrefix, usersController.create);
usersRouter.get(`${usersPrefix}/:id`, usersController.getUser);
usersRouter.patch(`${usersPrefix}/:id`, usersController.updateUser);
usersRouter.delete(`${usersPrefix}/:id`, usersController.deleteUser);

export default usersRouter;