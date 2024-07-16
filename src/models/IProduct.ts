export interface IProduct {
  id?: number;
  name: string;
  description: string;
  price: number;
  createdAt?: string;
  // EXTRA FIELDS
  quantity?: number;
  categoryId?: number;
  departmentId?: number;
  tags?: string;
}
