export interface IProduct {
  id?: number;
  name: string;
  description: string;
  price: number;
  createdAt?: string;
  // EXTRA FIELDS
  updatedAt?: string;
  quantity?: number;
  categoryId?: number;
  departmentId?: number;
  category?: string;
  department?: string;
  tags?: string;
}
