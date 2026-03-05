import { createContext, useContext, useReducer, useState } from "react";

interface Cart {}

interface CartContext {
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
}

interface CartItem {
  id: number;
  name: string;
  count: number;
  price: number;
  total?: number;
}

const CartContext = createContext<CartContext | null>(null);

const CartDispatchContext = createContext(null);

interface CartItemsState {
  cart: CartItem[];
}

type CartActions =
  | { type: "item_add"; payload: CartItem }
  | { type: "item_remove"; payload: number }
  | { type: "item_count_increase"; payload: number }
  | { type: "item_count_decrease"; payload: number };

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CartContext.Provider value={{}}>
      <CartDispatchContext.Provider value={}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error(
      "useCartContext has to be used within <CartContext.Provider>",
    );
  }

  return cartContext;
};

export { CartContextProvider };

// const cartReducer = (cartItems: CartItemsState, action: CartAction): CartState => {
//   switch (action.type) {
//     case "item_add"{

//     }
//     case "item_remove"{
//         return{
//             cart: cartItems.cart.filter(cartItems.id => )
//         }

//     }
//     case "item_count_increase"{

//     }
//     case "item_count_decrease"{

//     }
//     default:
//         return state;
//   }

//   const [cartItems, dispatch] = useReducer(
//     cartReducer,
//     initialCart);

//   const addToCart = (item: CartItem) =>
//     dispatch({ type: "item_add", payload: item });

//   const removeItem = (id: number) =>
//     dispatch({ type: "item_remove", payload: id });

//   const increaseItemCount = (id: number) =>
//     dispatch({ type: "item_count_increase", payload: id });

//   const decreaseItemCount = (id: number) =>
//     dispatch({ type: "item_count_decrease", payload: id });
