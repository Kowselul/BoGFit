import { notFound } from 'next/navigation'
import { allProducts } from '@/lib/products-data'
import { ProductDetails } from '@/components/product-details'

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = allProducts.find((p) => p.id === parseInt(id))
  
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
