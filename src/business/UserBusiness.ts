import { users, posts, User, Post } from "../bd";

export class UserBusiness {
  // Exercício 1:
  getById = (id: number) => {
    if (!id || isNaN(id)) throw new Error("ID inválido");
    const user = users.find((u) => u.id === id);
    if (!user) throw new Error("Usuário não encontrado");
    return user;
  };
}
