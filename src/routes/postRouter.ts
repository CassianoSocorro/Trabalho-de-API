import express from "express";
import { PostController } from "../controller/PostController";

export const postRouter = express.Router();
const postController = new PostController();

// Exercício 3
postRouter.post("/", postController.createPost);
