export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin?: boolean;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  rating: number;
  reviews: number;
}

export interface CartItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface CartState {
  items: CartItem[];
  total: number;
  loading: boolean;
}

export interface ProductsState {
  items: Product[];
  filteredItems: Product[];
  categories: string[];
  filters: {
    category: string;
    minPrice: number;
    maxPrice: number;
    search: string;
  };
  loading: boolean;
}