// types.ts
export interface Product {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  descriptions?: {
    size: string;
    description: string;
    appSupport: boolean;
  }[];
  alt?: string;
}

export interface ProductsState {
  products: Product[];
}
