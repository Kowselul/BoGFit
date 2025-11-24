import { notFound } from 'next/navigation'
import { allProducts } from '@/lib/products-data'
import { ProductDetails } from '@/components/product-details'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = allProducts.find((p) => p.id === parseInt(params.id))
  
  if (!product) {
    notFound()
  }
  
  return <ProductDetails product={product} />
}

export function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id.toString(),
  }))
}
