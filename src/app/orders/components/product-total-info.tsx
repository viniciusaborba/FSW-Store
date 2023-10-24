"use client";

import { useMemo } from "react";
import { OrderItemProps } from "./order-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Separator } from "@/components/ui/separator";

const ProductTotalInfo = ({ order }: OrderItemProps) => {
  const subtotal = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity
      );
    }, 0);
  }, [order.orderProducts]);

  const total = useMemo(() => {
    return order.orderProducts.reduce((acc, product) => {
      const productWithTotalPrice = computeProductTotalPrice(product.product);

      return acc + productWithTotalPrice.totalPrice * product.quantity;
    }, 0);
  }, [order.orderProducts]);

  const totalDiscounts = subtotal - total;

  return (
    <div className="flex flex-col gap-1 text-sm">
      <Separator />

      <div className="flex w-full justify-between py-3">
        <p>Subtotal</p>
        <p>R$ {subtotal.toFixed(2).replace(".", ",")}</p>
      </div>

      <Separator />

      <div className="flex w-full justify-between py-3">
        <p>Entrega</p>
        <p>Grátis</p>
      </div>

      <Separator />

      <div className="flex w-full justify-between py-3">
        <p>Descontos</p>
        <p>- R$ {totalDiscounts.toFixed(2).replace(".", ",")}</p>
      </div>

      <Separator />

      <div className="text-md flex w-full justify-between py-3 font-bold">
        <p>Total</p>
        <p>R$ {total.toFixed(2).replace(".", ",")}</p>
      </div>
    </div>
  );
};

export default ProductTotalInfo;
