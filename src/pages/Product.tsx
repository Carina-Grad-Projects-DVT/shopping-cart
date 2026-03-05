import React, { useContext } from "react";
import Cart from "../components/Cart";
import { ProductCard } from "../components/ProductCard";
import { ProductContext } from "../context/ProductContext";

function Product() {
  // Todo : Fix type issues
  const { products } = useContext(ProductContext);
  return (
    <div>
      <h1 className="text-center text-4xl font-extrabold text-balance py-10">
        Storefront
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-2 items-center md:items-start">
        <div className="flex flex-col md:grid md:grid-rows-3 grid-cols-3 gap-4 w-2/3">
          {/* TODO: Safety setup incase products are empty */}
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
        <div className="w-1/3">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default Product;
