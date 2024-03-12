import { client } from '../api/fetchClient';
import { User } from '../types';

export async function getUsers() {
  const response = await client.get<User[]>('/users');

  return response.data;
}

export async function getUser(id: number) {
  const response = await client.get<User>(`/users/${id}`);

  return response.data;
}

export async function updateUser(user: User) {
  const response = await client.put<User>('/users', user);

  return response.data;
}

export async function deleteUser(id: number) {
  const response = await client.delete<User>(`/users/${id}`);

  return response.data;
}

export async function addUser({ name, carColorId }: Pick<User, 'name' | 'carColorId'>) {
  const response = await client.post<User>('/users', { name, carColorId });

  return response.data;
}
