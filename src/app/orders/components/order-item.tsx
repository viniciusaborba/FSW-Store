'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Prisma } from "@prisma/client";
import { format } from "date-fns";
import OrderProductItem from "./order-product-item";
import ProductTotalInfo from "./product-total-info";
import { getOrderStatus } from "../helpers/status";

export interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: {
          product: true;
        };
      };
    };
  }>;
}

const OrderItem = ({ order }: OrderItemProps) => {
  return (
    <Card className="px-5">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              <p className="uppercase font-bold">Pedido com {order.orderProducts.length} produto(s)</p>
              <span className="text-sm opacity-60">Feito em {format(order.createdAt, "dd/MM/yy 'às' HH:mm")}</span>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="font-bold">
                  <p>Status</p>
                  <p className="text-[#8162FF]">{getOrderStatus(order.status)}</p>
                </div>

                <div className="">
                  <p className="font-bold">Data</p>
                  <p className="opacity-60">
                    {format(order.createdAt, "dd/MM/yy")}
                  </p>
                </div>

                <div className="">
                  <p className="font-bold">Pagamento</p>
                  <p className="opacity-60">Cartão</p>
                </div>
              </div>

              {order.orderProducts.map((orderProduct) => (
                <OrderProductItem
                  key={orderProduct.id}
                  orderProduct={orderProduct}
                />
              ))}

              <ProductTotalInfo order={order}/>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default OrderItem;
