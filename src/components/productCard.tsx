import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ShadCN/card";
import { Button } from "../../ShadCN/button";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}
export const ProductCard = ({ title, price, image }: ProductCardProps) => {
  return (
    <Card className="relative pt-0">
      <img
        src={image}
        alt="Product" // Could use description for alt text
        className="relative z-20 aspect-video w-full object-contain p-3"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {/* TODO: Figure out why I can't use justify-around or justify-between to align */}
      <CardFooter className="gap-4 text-white">
        <p>R{price}</p>
        <CardAction>
          {/* TODO: Styling without important */}
          {/* TODO: Disable when item is in cart */}
          <Button className="!bg-purple-500 hover:!bg-sky-500 hover:!border-sky-500">
            Add to cart
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};
