import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  userBusiness = new UserBusiness();

  // Exercício 1
  getById = (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const user = this.userBusiness.getById(id);
      res.status(200).json({ success: true, data: user });
    } catch (error: any) {
      if (error.message === "Usuário não encontrado") {
        res.status(404).json({ success: false, message: error.message });
      } else {
        res.status(400).json({ success: false, message: error.message });
      }
    }
  };
}
