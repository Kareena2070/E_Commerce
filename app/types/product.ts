export type Product = {
  id: number;
  name: string;
  category: string;
  weight: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  inStock: boolean;
};