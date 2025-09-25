import { Router } from 'express';
import {
  createPostController,
  patchPostController,
  deletePostController
} from '../controller/postController';

const postsRouter = Router();
//Atividade 3
postsRouter.post('/', createPostController);

//Atividade 5
postsRouter.patch('/:id', patchPostController);

//Atividades 6
postsRouter.delete('/:id', deletePostController);
export default postsRouter;