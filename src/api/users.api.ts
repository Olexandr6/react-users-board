import { client } from './fetchClient';
import { User } from '../types';

export const getUsers = () => {
  return client.get<User[]>('/users');
};

export const createUser = (options: Omit<User, 'id'>) => {
  console.log(options);

  return client.post<User>('/users', options);
};
