import { Request, Response } from 'express';
import * as postBusiness from '../business/postBusiness'; 
import { findUserById } from '../data/userData';

//exercício 3
export const createPostController = (req: Request, res: Response) => {
  const { title, content, authorId } = req.body;
  if (!title || !content || !authorId) {
    return res.status(400).json({ success: false, message: 'Título, conteúdo e ID do autor são obrigatórios.' });
  }
  const author = findUserById(authorId);
  if (!author) {
    return res.status(404).json({ success: false, message: 'Autor do post não encontrado.' });
  }
  const newPost = postBusiness.createPost(title, content, authorId);
  res.status(201).json({ success: true, message: 'Post criado com sucesso!', data: newPost });
};

//exercício 5
export const patchPostController = (req: Request, res: Response) => {
  const postId = parseInt(req.params.id as string);
  const updates = req.body;
  const allowedUpdates = ['title', 'content', 'published'];
  const isValidOperation = Object.keys(updates).every(update => allowedUpdates.includes(update));
  if (isNaN(postId) || !isValidOperation) {
    return res.status(400).json({ success: false, message: 'Atualização inválida. Campos permitidos: title, content, published.' });
  }
  const updatedPost = postBusiness.patchPost(postId, updates);
  if (!updatedPost) {
    return res.status(404).json({ success: false, message: 'Post não encontrado.' });
  }
  res.json({ success: true, message: 'Post atualizado com sucesso.', data: updatedPost });
};

//exercício 6
export const deletePostController = (req: Request, res: Response) => {
  const postId = parseInt(req.params.id as string);
  const userIdHeader = req.headers['user-id'];
  const userId = typeof userIdHeader === 'string' ? parseInt(userIdHeader) : NaN;
  if (isNaN(postId) || isNaN(userId)) {
    return res.status(400).json({ success: false, message: 'ID do post ou do usuário inválido.' });
  }
  const post = postBusiness.deletePost(postId, userId);
  if (!post) {
    return res.status(404).json({ success: false, message: 'Você não tem permissão para remover este post ou o post não foi encontrado.' });
  }
  res.json({ success: true, message: 'Post removido com sucesso.' });
};