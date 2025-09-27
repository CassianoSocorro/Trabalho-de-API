import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();
const userController = new UserController();

//Exercício 2:
userRouter.get("/age-range", userController.getByAgeRange);
//Exercíio 1:
userRouter.get("/:id", userController.getById);
//Exercício 4:
userRouter.put("/:id", userController.putUpdate);
//Exercício 7:
userRouter.delete("/cleanup-inactive", userController.cleanupInactive);
