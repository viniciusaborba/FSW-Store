"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDown, ChevronLeft, ChevronRight, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductDetailsProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "description" | "discountPercentage" | "totalPrice" | "name"
  >;
}

const ProductInfo = ({
  product: { basePrice, description, discountPercentage, totalPrice, name },
}: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{name}</h2>

      <div className="flex items-center gap-1">
        <h1 className="gap-2 text-xl font-bold">
          R$ {totalPrice.toFixed(2).replace(".", ",")}
        </h1>
        {discountPercentage > 0 && (
          <Badge className="left-3 top-3 px-2 py-[2px]">
            <ArrowDown size={14} />
            {discountPercentage}%
          </Badge>
        )}
      </div>

      {discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(basePrice).toFixed(2).replace(".", ",")}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button size="icon" variant="outline" onClick={handleDecreaseQuantity}>
          <ChevronLeft size={16} />
        </Button>

        <span>{quantity}</span>

        <Button size="icon" variant="outline" onClick={handleIncreaseQuantity}>
          <ChevronRight size={16} />
        </Button>
      </div>

      <div className="flex flex-col gap-3 mt-8">
        <h3 className="text-base font-bold">Descrição</h3>
        <p className="text-justify text-sm opacity-75">{description}</p>
      </div>

      <Button className="mt-8 font-bold uppercase">
        Adicionar ao carrinho
      </Button>

      <div className="flex items-center justify-between rounded-lg bg-accent px-5 py-2 mt-5">
        <div className="flex items-center gap-2">
          <TruckIcon />

          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">FSPacket®</span>
            </p>
            <p className="text-xs text-[#8162FF]">
              Envio para <span className="font-bold">todo o Brasil</span>
            </p>
          </div>
        </div>

        <p className="font-bold text-xs">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
