import { Router } from 'express';
import {
  getUserByIdController,
  getUsersByAgeRangeController,
  updateUserController,
  cleanupInactiveUsersController
} from '../controller/userController';

const usersRouter = Router();

//exercício 1
usersRouter.get('/:id', getUserByIdController);
//exercício 2
usersRouter.get('/age-range', getUsersByAgeRangeController);
//exercício 4
usersRouter.put('/:id', updateUserController);
//exercício 7
usersRouter.delete('/cleanup-inactive', cleanupInactiveUsersController);

export default usersRouter; 