import { client } from '../api/fetchClient';
import { Color } from '../types';

export async function getColors() {
  const response = await client.get<Color[]>('/colors');

  return response.data;
}
