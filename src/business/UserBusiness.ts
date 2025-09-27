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

  // Exercício 4
  putUpdate = (id: number, payload: any) => {
    const required = ["name", "email", "role", "age"];

    for (const f of required) {
      if (!(f in payload)) throw new Error(`Campo ${f} é obrigatório para PUT`);
    }

    const idx = users.findIndex((u) => u.id === id);
    if (idx === -1) throw new Error("Usuário não encontrado");

    const conflict = users.find(
      (u) => u.email === payload.email && u.id !== id
    );
    if (conflict) throw new Error("Email já em uso por outro usuário");

    const updated: User = {
      id,
      name: String(payload.name),
      email: String(payload.email),
      role: payload.role === "admin" ? "admin" : "user",
      age: Number(payload.age),
    };
    users[idx] = updated;
    return updated;
  };
}
