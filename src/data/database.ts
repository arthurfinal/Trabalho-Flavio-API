export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  role: 'user' | 'admin';
}

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: Date;
  published: boolean;
}

export const users: User[] = [
  { id: 1, name: 'Arthur', email: 'Arthur@email.com', age: 22, role: 'user' },
  { id: 2, name: 'Gilson', email: 'Gilson@email.com', age: 29, role: 'user' },
  { id: 3, name: 'José', email: 'jose@email.com', age: 18, role: 'user' },
  { id: 4, name: 'Erick', email: 'Erick@email.com', age: 18, role: 'admin' },
  { id: 5, name: 'Guilherme', email: 'Guilherme@email.com', age: 19, role: 'user' },
  { id: 6, name: 'Pedro', email: 'Pedro@email.com', age: 19, role: 'user' },
  { id: 7, name: 'Cassiano', email: 'Cassino@email.com', age: 33, role: 'admin' },
  { id: 8, name: 'João', email: 'Joao@email.com', age: 20, role: 'user' },
  { id: 9, name: 'Samuel', email: 'Samuel@email.com', age: 19, role: 'user' }
];

export const posts: Post[] = [
  { id: 1, title: 'Primeiro Post', content: 'Conteúdo do primeiro post...', authorId: 1, createdAt: new Date(), published: true },
  { id: 2, title: 'Receita de Bolo', content: 'Passo a passo para um bolo perfeito.', authorId: 5, createdAt: new Date(), published: true },
  { id: 3, title: 'Viagem ao Espaço', content: 'Minha experiência visitando a lua.', authorId: 4, createdAt: new Date(), published: false }
];