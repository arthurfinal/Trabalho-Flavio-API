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

//Atividade 4
usersRouter.put('/:id', updateUserController);
export default usersRouter; 