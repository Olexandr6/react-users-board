import { client } from '../api/fetchClient';
import { Color } from '../types';

export function getColors() {
  return client.get<Color[]>('/colors');
}
