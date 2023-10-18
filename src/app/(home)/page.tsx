import Image from "next/image";
import banner1 from "../../../public/banner-1.png";
import banner2 from "../../../public/banner-mouses-1.png";
import banner3 from "../../../public/banner-fones.png";
import { Categories } from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import { ProductList } from "./components/productList";
import { SectionTitle } from "./components/section-title";
import { PromoBanner } from "./components/PromoBanner";

export default async function Home() {
  const offers = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses'
      }
    }
  })

  return (
    <div className="">
      <PromoBanner
        src={banner1}
        alt="Até 55% de desconto esse mês"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={offers} />
      </div>

      <PromoBanner
        src={banner2}
        alt="Até 55% de desconto em mouses"
      />

      <div className="mt-8 mb-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src={banner3}
        alt="Até 20% de desconto em fones"
      />

      <div className="mt-8">
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
