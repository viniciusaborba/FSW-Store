import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";

interface ProductDetailsProps {
  params: {
    slug: string
  }
}

const ProductDetails = async ({params: { slug }} : ProductDetailsProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    }
  })

  if (!product) {
    return null
  }

  return ( 
    <div className="">
      <ProductImages imageUrls={product.imageUrls} name={product.name}/>
    </div>
   );
}
 
export default ProductDetails;