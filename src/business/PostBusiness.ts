import { posts, users, Post } from "../bd";

export class PostBusiness {
  private validatePostCreation(payload: any) {
    const { title, content, authorId } = payload;

    if (!title || typeof title !== "string" || title.length < 3) {
      throw new Error("O título deve ter no mínimo 3 caracteres.");
    }

    if (!content || typeof content !== "string" || content.length < 10) {
      throw new Error("O conteúdo deve ter no mínimo 10 caracteres.");
    }

    const authorExists = users.find((user) => user.id === Number(authorId));
    if (!authorExists) {
      throw new Error("O autor com o ID fornecido não existe.");
    }
  }

  // Exercício 3
  createPost(payload: any) {
    this.validatePostCreation(payload);

    const { title, content, authorId } = payload;

    const newId = posts.length ? Math.max(...posts.map((p) => p.id)) + 1 : 1;

    const newPost: Post = {
      id: newId,
      title,
      content,
      authorId: Number(authorId),
      createdAt: new Date().toISOString(),
      published: false,
    };

    posts.push(newPost);
    return newPost;
  }

  //Exercício 5

  patchPost(id: number, payload: any) {
    const idx = posts.findIndex((p) => p.id === id);
    if (idx === -1) throw new Error("Post não encontrado");

    const allowed = ["title", "content", "published"];
    for (const k of Object.keys(payload)) {
      if (!allowed.includes(k)) throw new Error(`Campo ${k} não é permitido`);
    }

    const post = posts[idx];
    const updated = { ...post, ...payload };
    posts[idx] = updated;
    return updated;
  }

  // Exercício 6

  deletePost(id: number, userId: number) {
    if (!userId || isNaN(userId))
      throw new Error("User-Id header é obrigatório");

    const post = posts.find((p) => p.id === id);
    if (!post) throw new Error("Post não localizado");

    const user = users.find((u) => u.id === userId);
    if (!user) throw new Error("Usuário não existe");

    if (post.authorId !== userId && user.role !== "admin") {
      throw new Error("Apenas autor ou admin devem remover o post");
    }

    const i = posts.findIndex((p) => p.id === id);
    posts.splice(i, 1);
    return;
  }
}
