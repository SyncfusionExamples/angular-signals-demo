export interface Product {
  id: number;
  title: string;
  images: string[];
  price: number;
}

export interface ProductResponse {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
}
