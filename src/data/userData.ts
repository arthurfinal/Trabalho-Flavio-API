import { users, posts, User } from './database';

//exercício 1
export const findUserById = (id: number): User | undefined => {
  return users.find(u => u.id === id);
};

//exercício 2
export const findUsersByAgeRange = (minAge: number, maxAge: number): User[] => {
  return users.filter(user => user.age >= minAge && user.age <= maxAge);
};

//exercício 4
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

//exercício 7
export const findUsersWithPosts = (): Set<number> => {
  const usersWithPosts = new Set<number>();
  posts.forEach(post => usersWithPosts.add(post.authorId));
  return usersWithPosts;
};

export const removeInactiveUsers = (userIdsWithPosts: Set<number>): User[] => {
  const removedUsers: User[] = [];
  for (let i = users.length - 1; i >= 0; i--) {
    const user = users[i];
    if (user && user.role !== 'admin' && !userIdsWithPosts.has(user.id)) {
      removedUsers.push(...users.splice(i, 1));
    }
  }
  return removedUsers;
};