'use client'

import Image from 'next/image'
import banner1 from '../../../public/banner-1.png'
import { Categories } from './components/categories'

export default function Home() {

  return (
    <div className="p-5">
      <Image 
        src={banner1}
        alt="Até 55% de desconto esse mês"
        height={0}
        width={0}
        sizes="100vw"
        className="h-auto w-full"
      />

      <div className="mt-8">
        <Categories />
      </div>
    </div>
  )
}
