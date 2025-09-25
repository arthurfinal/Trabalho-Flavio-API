import { Request, Response } from 'express';
import * as postBusiness from '../business/postBusiness'; 
import { findUserById } from '../data/userData';

//Atividade 3
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
