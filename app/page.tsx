import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { FeaturedProducts } from '@/components/featured-products'
import { Categories } from '@/components/categories'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </main>
  )
}
