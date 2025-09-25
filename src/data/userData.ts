import { users, posts, User } from './database';

//Atividade 1
export const findUserById = (id: number): User | undefined => {
  return users.find(u => u.id === id);
};

//Atividade 2
export const findUsersByAgeRange = (minAge: number, maxAge: number): User[] => {
  return users.filter(user => user.age >= minAge && user.age <= maxAge);
};

//Atividade 4
export const updateUserInDatabase = (userToUpdate: User): User | null => {
  const userIndex = users.findIndex(u => u.id === userToUpdate.id);
  if (userIndex !== -1) {
    users[userIndex] = userToUpdate;
    return users[userIndex];
  }
  return null;
};

export const findUserByEmail = (email: string): User | undefined => {
  return users.find(user => user.email === email);
};


