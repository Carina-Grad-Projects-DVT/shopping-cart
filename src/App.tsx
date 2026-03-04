import { useState } from "react";
import "./App.css";

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    // TODO: Loading state
    try {
      const response = await fetch(`${apiUrl}/products`);
      const results = await response.json();
      return setProducts(results);
    } catch {
      // TODO: Add alert for error state
    }
  };
  console.log(products);
  return <>Hello</>;
}

export default App;
