# The Challenge: Shopping Cart 🛒

Build a simple shopping cart app using Reducer + Context — no prop drilling allowed.

## What It Should Do

- Display a list of products (at least 4, you pick what they sell)
- Let users add items to the cart
- Let users remove items from the cart
- Let users increase/decrease quantity of items in the cart
- Show a cart summary somewhere on the page (total items, total price)

## The Rules

- All state must live in a reducer — no standalone useState for cart data
- No prop drilling — components get what they need via Context only
- Must have a CartProvider component that wraps everything
- Must have custom hooks — at minimum useCart() and useCartDispatch()
- The App component should be nearly empty — just layout and <CartProvider>
  typescript should be used, no use of any
- use lighthouse in dev browsers, get all things green. implement a service worker as well

make use of this api for your data https://fakestoreapi.com/

## Use a component library

ui should look decent and. everything should be nicely aligned.
Remember mobile 1st, component libraries should help with this, tailwind is mobile 1st as well

DUE DATE: 04/03/26 10am
