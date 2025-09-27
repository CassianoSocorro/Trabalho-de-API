import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
  postBusiness = new PostBusiness();

  // Exercício 3
  createPost = (req: Request, res: Response) => {
    try {
      const { title, content, authorId } = req.body;
      const post = this.postBusiness.createPost({ title, content, authorId });
      res.status(201).json({ success: true, data: post });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
  // Exercício 5

  patchPost = (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const payload = req.body;
      const updated = this.postBusiness.patchPost(id, payload);
      res.status(200).json({ success: true, data: updated });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
}
