"use client";

import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import CartPriceInfo from "./cart-price-info";

const Cart = () => {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex flex-col gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <>
              <CartItem
                product={computeProductTotalPrice(product as any) as any}
                key={product.id}
              />

              <CartPriceInfo />
            </>
          ))
        ) : (
          <p className="text-center font-semibold">
            Você ainda não adicionou items ao carrinho!
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
