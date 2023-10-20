import Image from "next/image";
import banner1 from "../../../public/banner-1.png";
import banner2 from "../../../public/banner-mouses-1.png";
import banner3 from "../../../public/banner-fones.png";
import { Categories } from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import { ProductList } from "../../components/ui/productList";
import { SectionTitle } from "../../components/ui/section-title";
import { PromoBanner } from "./components/PromoBanner";
import Link from "next/link";

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
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner src={banner1} alt="Até 55% de desconto esse mês" />

      <div className=" px-5">
        <Categories />
      </div>

      <div>
        <Link href={"/offers"}>
          <SectionTitle>Ofertas</SectionTitle>
        </Link>
        <ProductList products={offers} />
      </div>

      <PromoBanner src={banner2} alt="Até 55% de desconto em mouses" />

      <div>
        <Link href={"/category/keyboards"}>
          <SectionTitle>Teclados</SectionTitle>
        </Link>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner src={banner3} alt="Até 20% de desconto em fones" />

      <div>
        <Link href={"/category/mouses"}>
          <SectionTitle>Mouses</SectionTitle>
        </Link>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
