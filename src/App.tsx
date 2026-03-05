import { useEffect, useState } from "react";
import "./App.css";
import { ProductCard } from "./components/productCard";

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`${apiUrl}/products/category/electronics`);
        const results = await response.json();
        setProducts(results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="grid md:grid-rows-3 grid-cols-3 gap-4">
      {products.map((product) => (
        // TODO: Fix typescript error for type never
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default App;
