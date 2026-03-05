import { Badge } from "lucide-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ShadCN/card";
import { Button } from "../../ShadCN/button";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

// TODO: Add price component
export const ProductCard = ({ id, title, price, image }: ProductCardProps) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={image}
        alt="Product" // Could use description for alt text
        className="relative z-20 aspect-video w-full object-contain"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {/* TODO: Figure out why I can't use justify-around or justify-between to align */}
      <CardFooter className="gap-4">
        <p>{price}</p>
        <CardAction>
          <Button className="">Add to cart</Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};
