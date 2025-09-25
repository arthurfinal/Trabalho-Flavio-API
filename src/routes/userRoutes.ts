import { Router } from 'express';
import {
  getUserByIdController,
  getUsersByAgeRangeController,
  updateUserController,
  cleanupInactiveUsersController
} from '../controller/userController';

const usersRouter = Router();



export default usersRouter; 