import {
  findUserById,
  findUsersByAgeRange,
  findUserByEmail,
  updateUserInDatabase,
  findUsersWithPosts,
  removeInactiveUsers
} from '../data/userData';
import { User } from '../data/database';

//Atividade 1
export const getUserById = (id: number): User | undefined => {
  return findUserById(id);
};

//Atividade 2
export const getUsersInAgeRange = (min: number, max: number): User[] => {
  return findUsersByAgeRange(min, max);
};
