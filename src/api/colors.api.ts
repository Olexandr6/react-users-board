import { client } from './fetchClient';
import { Color } from '../types';

export const getColors = () => {
  return client.get<Color[]>('/colors');
};
