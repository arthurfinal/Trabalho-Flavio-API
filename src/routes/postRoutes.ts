import { Router } from 'express';
import {
  createPostController,
  patchPostController,
  deletePostController
} from '../controller/postController';

const postsRouter = Router();



export default postsRouter;