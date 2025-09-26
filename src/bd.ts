export interface User {
  id: number;
  name: string;
  email: string;
  senha?: string;
  age: number;
  role: "user" | "admin";
}

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: string;
  published: boolean;
}

export const users: User[] = [
  {
    id: 1,
    name: "Flávio",
    email: "flavio@email.com",
    senha: "flavio",
    age: 30,
    role: "user",
  },
  {
    id: 2,
    name: "Cassiano",
    email: "mearrumeumestagiopfv@gmail.com",
    senha: "Cassiano123456",
    age: 19,
    role: "user",
  },
  {
    id: 3,
    name: "Dean Winchester",
    email: "deabWin15@gmail.com",
    senha: "Castiel12",
    age: 43,
    role: "admin",
  },
  {
    id: 4,
    name: "Sam Winchester",
    email: "SamWin15@gmail.com",
    senha: "Vessel0522",
    age: 39,
    role: "admin",
  },
];

export const posts: Post[] = [
  {
    id: 1,
    title: "Post: 1",
    content: "Conteúdo do primeiro post.",
    authorId: 1,
    createdAt: new Date().toISOString(),
    published: false,
  },
  {
    id: 2,
    title: "Post: 2",
    content: "Conteúdo do segundo post.",
    authorId: 1,
    createdAt: new Date().toISOString(),
    published: true,
  },
];
