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

//Atividade 2
usersRouter.get('/age-range', getUsersByAgeRangeController);

export default usersRouter; 