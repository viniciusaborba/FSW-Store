import { computeProductTotalPrice } from "@/helpers/product";
import { Prisma } from "@prisma/client";
import Image from "next/image";

interface OrderProductItemProps {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: {
      product: true;
    };
  }>;
}

const OrderProductItem = ({ orderProduct }: OrderProductItemProps) => {
  const productsWithTotalPrice = computeProductTotalPrice(orderProduct.product);

  return (
    <div className="flex items-center gap-4">
      <div className="flex h-[77px] w-[100px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={orderProduct.product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
          alt={orderProduct.product.name}
        />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <div className="flex rounded-md bg-accent px-3 py-1 w-fit">
          <p className="text-[12px]">
            Vendido e entregue por <span className="font-bold">FSW Store</span>
          </p>
        </div>
        <p className="text-xs">{orderProduct.product.name}</p>

        <div className="flex w-full items-center justify-between gap-1">
          <div className="flex items-center gap-1">
            <p className="text-sm font-bold">
              R${" "}
              {productsWithTotalPrice.totalPrice.toFixed(2).replace(".", ",")}
            </p>

            {productsWithTotalPrice.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-60">
                R${" "}
                {Number(productsWithTotalPrice.basePrice)
                  .toFixed(2)
                  .replace(".", ",")}
              </p>
            )}
          </div>

          <p className="ext-xs opacity-60">Qtd: {orderProduct.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderProductItem;
