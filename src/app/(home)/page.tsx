import Image from 'next/image'
import banner1 from '../../../public/banner-1.png'
import { Categories } from './components/categories'
import { prismaClient } from '@/lib/prisma'
import { ProductList } from './components/productList'

export default async function Home() {
  const offers = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      }
    }
  })

  return (
    <div className="">
      <Image 
        src={banner1}
        alt="Até 55% de desconto esse mês"
        height={0}
        width={0}
        sizes="100vw"
        className="h-auto w-full px-5"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <ProductList products={offers} />
      </div>
    </div>
  )
}
