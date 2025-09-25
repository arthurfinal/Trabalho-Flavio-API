import { posts, Post } from './database';
//Atividade 3
export const addPostToDatabase = (newPost: Post): Post => {
  posts.push(newPost);
  return newPost;
};

//Atividade 5
export const updatePostInDatabase = (postId: number, updates: Partial<Post>): Post | null => {
  const postIndex = posts.findIndex(p => p.id === postId);
  if (postIndex === -1) {
    return null;
  }
  Object.assign(posts[postIndex], updates);
  return posts[postIndex];
};
