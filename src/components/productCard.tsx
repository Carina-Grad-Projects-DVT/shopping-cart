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
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-contain brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction></CardAction>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Add to cart</Button>
      </CardFooter>
    </Card>
  );
};
