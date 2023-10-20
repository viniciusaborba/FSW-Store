'use client'

import { useContext } from "react";
import { Separator } from "./separator";
import { CartContext } from "@/providers/cart";
import { Button } from "./button";

const CartPriceInfo = () => {
  const { subTotal, total, totalDiscount } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-3">
      <Separator />

      <div className="flex items-center justify-between text-xs">
        <p>Subtotal</p>
        <p>R$ {subTotal.toFixed(2)}</p>
      </div>

      <Separator />

      <div className="flex items-center justify-between text-xs">
        <p>Entrega</p>
        <p className="uppercase">grátis</p>
      </div>

      <Separator />

      <div className="flex items-center justify-between text-xs">
        <p>Descontos</p>
        <p>- R${totalDiscount.toFixed(2)}</p>
      </div>

      <Separator />

      <div className="flex items-center justify-between text-xs font-bold">
        <p>Total</p>
        <p>R${total.toFixed(2)}</p>
      </div>

      <Button className="font-bold uppercase mt-7">Finalizar compra</Button>
    </div>
  );
};

export default CartPriceInfo;
