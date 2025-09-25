import { Router } from 'express';
import {
  createPostController,
  patchPostController,
  deletePostController
} from '../controller/postController';

const postsRouter = Router();
//Atividade 3
postsRouter.post('/', createPostController);
export default postsRouter;