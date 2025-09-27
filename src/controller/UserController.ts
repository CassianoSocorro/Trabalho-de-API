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

  // Exercício 2:
  getByAgeRange = (req: Request, res: Response) => {
    try {
      const min = Number(req.query.min);
      const max = Number(req.query.max);
      const users = this.userBusiness.getByAgeRange(min, max);
      res.status(200).json({ success: true, data: users });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  //Exercício 4
  putUpdate = (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const payload = req.body;
      const updated = this.userBusiness.putUpdate(id, payload);
      res.status(200).json({ success: true, data: updated });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
  //Exercício 7
  cleanupInactive = (req: Request, res: Response) => {
    try {
      const confirm = req.query.confirm === "true";

      if (!confirm) throw new Error("Parâmetro confirm=true é obrigatório");

      const removed = this.userBusiness.cleanupInactive();
      res.status(200).json({ success: true, removed });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  };
}
