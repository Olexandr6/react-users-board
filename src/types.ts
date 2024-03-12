export interface User {
  id: number;
  carColorId: number;
  name: string;
  carColor: Color;
}

export interface Color {
  id: number;
  name: string;
}
