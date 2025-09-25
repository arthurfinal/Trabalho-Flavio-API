import { posts, Post } from './database';
//Atividade 3
export const addPostToDatabase = (newPost: Post): Post => {
  posts.push(newPost);
  return newPost;
};

