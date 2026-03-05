import { createContext, useContext, useReducer, type ReactNode } from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartActions>;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

type CartActions =
  | { type: "item_add"; payload: CartItem }
  | { type: "item_remove"; payload: number }
  | { type: "item_quantity_increase"; payload: number }
  | { type: "item_quantity_decrease"; payload: number };

function cartReducer(state: CartState, action: CartActions): CartState {
  switch (action.type) {
    case "item_add": {
      // Check using id if item is in cart already
      const productAlreadyInCart = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (productAlreadyInCart) {
        // If already in cart increase quantity by 1
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      // if not already in cart, add product in cart with quantity of 1
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
    // TODO: Check if quantity is set to 0
    case "item_remove": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case "item_quantity_increase": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    }
    case "item_quantity_decrease": {
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };
    }
    default:
      return state;
  }
}
const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("useCartContext has to be used within <CartProvider>");
  }

  return cartContext;
}
