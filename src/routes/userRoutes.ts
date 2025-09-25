import { Router } from 'express';
import {
  getUserByIdController,
  getUsersByAgeRangeController,
  updateUserController,
  cleanupInactiveUsersController
} from '../controller/userController';

const usersRouter = Router();
//Atividade 1
usersRouter.get('/:id', getUserByIdController);

export default usersRouter; 