import { Router } from 'express';
import {
  createPostController,
  patchPostController,
  deletePostController
} from '../controller/postController';

const postsRouter = Router();

//exercício 3
postsRouter.post('/', createPostController);
//exercício 5
postsRouter.patch('/:id', patchPostController);
//exercício 6
postsRouter.delete('/:id', deletePostController);

export default postsRouter;