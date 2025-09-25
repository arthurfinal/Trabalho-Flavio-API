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

//Atividade 4
export const updateUser = (userId: number, updateData: Partial<User>): User | null => {
  const existingUser = findUserById(userId);
  if (!existingUser) {
    return null;
  }
  if (updateData.email && updateData.email !== existingUser.email) {
    const emailConflict = findUserByEmail(updateData.email);
    if (emailConflict && emailConflict.id !== userId) {
      throw new Error('Email already in use.');
    }
  }
  const updatedUser = { ...existingUser, ...updateData };
  return updateUserInDatabase(updatedUser as User);
};

//Atividade 7
export const cleanupInactiveUsers = (): User[] => {
  const usersWithPosts = findUsersWithPosts();
  return removeInactiveUsers(usersWithPosts);
};
