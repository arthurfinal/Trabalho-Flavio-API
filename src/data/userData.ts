import { users, posts, User } from './database';

//Atividade 1
export const findUserById = (id: number): User | undefined => {
  return users.find(u => u.id === id);
};

//Atividade 2
export const findUsersByAgeRange = (minAge: number, maxAge: number): User[] => {
  return users.filter(user => user.age >= minAge && user.age <= maxAge);
};



