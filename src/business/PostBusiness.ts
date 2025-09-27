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

    // Gera um novo ID
    const newId = posts.length ? Math.max(...posts.map((p) => p.id)) + 1 : 1;

    // Post é criado como published: false
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
}
