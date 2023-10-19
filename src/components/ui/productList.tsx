import { ProductItem } from "@/components/ui/productItem";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full cursor-pointer gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div className="w-[156px] max-w-[170px]" key={product.id}>
          <ProductItem
            product={computeProductTotalPrice(product)}
            
          />
        </div>
      ))}
    </div>
  );
};
