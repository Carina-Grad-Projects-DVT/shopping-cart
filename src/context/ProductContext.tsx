import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductContext {
  products: Product[];
}

export const ProductContext = createContext<ProductContext | []>([]);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [products, setProducts] = useState<Product[] | []>([]);
  console.count("ProductProvider render");
  // TODO: Rework without useEffect
  useEffect(() => {
    console.count("ProductProvider effect");
    const fetchProducts = async () => {
      // TODO: Loading state
      try {
        const response = await fetch(`${apiUrl}`);
        const results = await response.json();
        setProducts(results);
      } catch {
        // TODO: Add alert for error state
        console.log("Error");
      }
    };
    fetchProducts();
  }, [apiUrl]);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
