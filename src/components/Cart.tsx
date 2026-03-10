import { X } from "lucide-react";
import { Button } from "../../ShadCN/button";

import { Separator } from "../../ShadCN/separator";
import { useCartContext } from "../context/CartContext";
import { AspectRatio } from "../../ShadCN/aspect-ratio";
import { Card } from "../../ShadCN/card";

// Base component by Shadcn. Install by running "npx shadcn add @shadcnblocks/shopping-cart1"
function Cart() {
  const { dispatch, state } = useCartContext();
  const cartItems = state.cart;
  console.log(cartItems);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const quantityTotal = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
    }).format(price);
  };

  if (cartItems.length === 0) {
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
    <Card className="py-10">
      <div className="container max-w-md">
        <h1 className="mb-8 text-3xl font-semibold">Shopping Cart</h1>

        <div className="space-y-4 bg-card rounded-xl border">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-4 rounded-lg border p-4"
            >
              <div className="w-20 shrink-0">
                <AspectRatio ratio={1} className="overflow-hidden rounded-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="size-full object-cover"
                  />
                </AspectRatio>
              </div>
              <h3 className="font-medium">{item.title}</h3>
              <div className="flex items-center justify-center gap-4">
                <div className="flex-1 flex-row">
                  <Button
                    onClick={() =>
                      dispatch({
                        type: "item_quantity_increase",
                        payload: item.id,
                      })
                    }
                  >
                    {" "}
                    +{" "}
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Quantity: {item.quantity}
                  </p>
                  <Button
                    onClick={() =>
                      dispatch({
                        type: "item_quantity_decrease",
                        payload: item.id,
                      })
                    }
                  >
                    {" "}
                    -{" "}
                  </Button>
                </div>

                <div className="text-right">
                  <p className="font-semibold">{formatPrice(item.price)}</p>
                </div>
                {/* TODO: Use unique styling for buttons */}
                <Button
                  className="shrink-0 !bg-purple-500 hover:!bg-sky-500 hover:!border-sky-500"
                  onClick={() =>
                    dispatch({
                      type: "item_remove",
                      payload: item.id,
                    })
                  }
                >
                  <X className="size-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Separator className="my-6" />
        <div className="space-y-4 px-16">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total Price</span>
            <span>{formatPrice(subtotal)}</span>
          </div>

          <div className="flex justify-between text-lg font-semibold">
            <span>Total Quantity</span>
            <span>{quantityTotal}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Cart;
