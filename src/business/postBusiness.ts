import {
  addPostToDatabase,
  updatePostInDatabase,
  removePostFromDatabase,
  findPostById
} from '../data/postData';
import { findUserById } from '../data/userData';
import { Post, User, posts } from '../data/database'; 

//Atividade 3
export const createPost = (title: string, content: string, authorId: number): Post => {
  const newPost: Post = {
    id: posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1,
    title,
    content,
    authorId,
    createdAt: new Date(),
    published: false
  };
  return addPostToDatabase(newPost);
};