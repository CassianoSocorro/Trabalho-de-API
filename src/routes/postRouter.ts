import express from "express";
import { PostController } from "../controller/PostController";

export const postRouter = express.Router();
const postController = new PostController();

// Exercício 3
postRouter.post("/", postController.createPost);
// Exercício 5
postRouter.patch("/:id", postController.patchPost);
// Exercício 6
postRouter.delete("/:id", postController.deletePost);
