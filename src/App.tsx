import { useContext, useEffect, useState } from "react";
import "./App.css";
import { ProductCard } from "./components/ProductCard";
import Cart from "./components/Cart";
import { ProductProvider } from "./context/ProductContext";
import Product from "./pages/Product";
import { CartProvider } from "./context/CartContext";

// TODO : Change layout for mobile first
function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Product />;
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
