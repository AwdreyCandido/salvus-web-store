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
  category?: string;
  department?: string;
  tags?: string;
}
