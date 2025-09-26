import { users, posts, User, Post } from "../bd";

export class UserBusiness {
  // Exercício 1:
  getById = (id: number) => {
    if (!id || isNaN(id)) throw new Error("ID inválido");
    const user = users.find((u) => u.id === id);
    if (!user) throw new Error("Usuário não encontrado");
    return user;
  };
  //Exercício 2:
  getByAgeRange = (min: number, max: number) => {
    if (isNaN(min) || isNaN(max))
      throw new Error("Parâmetros min e max devem ser números");
    if (min > max)
      throw new Error("Idade mínima não pode ser maior que a máxima");
    return users.filter((u) => u.age >= min && u.age <= max);
  };
}
