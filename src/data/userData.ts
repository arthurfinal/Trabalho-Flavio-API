import { users, posts, User } from './database';

//Atividade 1
export const findUserById = (id: number): User | undefined => {
  return users.find(u => u.id === id);
};



