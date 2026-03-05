import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "../../ShadCN/button";
import { AspectRatio } from "radix-ui";
import { Separator } from "../../ShadCN/separator";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

// Base component by Shadcn. Install by running "npx shadcn add @shadcnblocks/shopping-cart1"
function Cart() {
  const [items, setItems] = useState([]);

  //   const removeItem = (id: string) => {
  //     setItems(items.filter((item) => item.id !== id));
  //   };

  //   const subtotal = items.reduce(
  //     (sum, item) => sum + item.price * item.quantity,
  //     0,
  //   );
  //   const quantityTotal = items.reduce((sum, item) => (sum += item.quantity));

  //   const formatPrice = (price: number) => {
  //     return new Intl.NumberFormat("en-ZA", {
  //       style: "currency",
  //       currency: "ZAR",
  //     }).format(price);
  //   };

  if (items.length === 0) {
    return (
      <section className="py-32 bg-card rounded-xl border">
        <div className="container max-w-lg text-center">
          <h1 className="mb-4 text-2xl font-semibold">Your cart is empty</h1>
          <p className="mb-8 text-muted-foreground">
            Looks like you haven't added anything yet.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32">
      <div className="container max-w-2xl">
        <h1 className="mb-8 text-3xl font-semibold">Shopping Cart</h1>

        <div className="space-y-4 py-32 bg-card rounded-xl border">
          {items.map((item) => (
            <div
              //   key={item.id}
              className="flex items-center gap-4 rounded-lg border p-4"
            >
              <div className="w-20 shrink-0">
                <AspectRatio ratio={1} className="overflow-hidden rounded-md">
                  <img
                    // src={item.image}
                    // alt={item.name}
                    className="size-full object-cover"
                  />
                </AspectRatio>
              </div>

              <div className="flex-1">
                {/* <h3 className="font-medium">{item.name}</h3> */}
                <h3 className="font-medium">name</h3>
                <Button> + </Button>
                <p className="text-sm text-muted-foreground">
                  {/* Qty: {item.quantity} */} Quantity
                </p>
                <Button> - </Button>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  {/* {formatPrice(item.price * item.quantity)} */}
                  price
                </p>
              </div>
              {/* TODO: Use unique styling for this button */}
              <Button
                className="shrink-0 !bg-purple-500 hover:!bg-sky-500 hover:!border-sky-500"
                // onClick={() => removeItem(item.id)}
              >
                <X className="size-4" />
              </Button>
            </div>
          ))}
        </div>

        <Separator className="my-6" />

        <div className="space-y-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total Price</span>
            {/* <span>{formatPrice(subtotal)}</span> */}
          </div>

          <div className="flex justify-between text-lg font-semibold">
            <span>Total Quantity</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;

// item name
// item price
// + and - buttons for increase and decrease
// remove from cart

// Total price
// Total cart items
