"use client";

import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { ChevronLeft, ChevronRight, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductDetailsProps {
  product: ProductWithTotalPrice
}

const ProductInfo = ({
  product
}: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addProductToCart } = useContext(CartContext)

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddProductToCart = () => {
    addProductToCart({...product, quantity})
  }

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-1">
        <h1 className="gap-2 text-xl font-bold">
          R$ {product.totalPrice.toFixed(2).replace(".", ",")}
        </h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>
            {product.discountPercentage}
          </DiscountBadge>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {Number(product.basePrice).toFixed(2).replace(".", ",")}
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
        <p className="text-justify text-sm opacity-75">{product.description}</p>
      </div>

      <Button className="mt-8 font-bold uppercase" onClick={handleAddProductToCart}>
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
