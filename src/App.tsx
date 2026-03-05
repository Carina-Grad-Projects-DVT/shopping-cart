import { useEffect, useState } from "react";
import "./App.css";
import { ProductCard } from "./components/ProductCard";
import Cart from "./components/Cart";

const apiUrl = import.meta.env.VITE_API_URL;

// TODO : Change layout for mobile first
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
    <div>
      <h1 className="text-center text-4xl font-extrabold text-balance py-10">
        Storefront
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center md:items-start">
        <div className="flex flex-col md:grid md:grid-rows-3 grid-cols-3 gap-4 w-3/4">
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
        <div className="w-1/4">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
