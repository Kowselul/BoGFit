'use client'

import { useState, useMemo, useEffect, Suspense } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, ShoppingCart, Search, Filter } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { allProducts } from '@/lib/products-data'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

function ProduseContent() {
  const { addToCart } = useCart()
  const searchParams = useSearchParams()
  const categoryFromUrl = searchParams.get('category')
  
  const [selectedCategory, setSelectedCategory] = useState<string>('Toate')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'rating'>('popular')

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl)
    }
  }, [categoryFromUrl])

  const categories = ['Toate', ...Array.from(new Set(allProducts.map(p => p.category)))]

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts

    // Filter by category
    if (selectedCategory !== 'Toate') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Sort
    const sorted = [...filtered]
    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating)
        break
      case 'popular':
      default:
        sorted.sort((a, b) => b.reviews - a.reviews)
        break
    }

    return sorted
  }, [selectedCategory, searchQuery, sortBy])

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="bg-primary py-12 transition-all duration-500">
        <div className="container mx-auto px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="mb-2 text-4xl font-bold text-primary-foreground md:text-5xl">
            Toate Produsele
          </h1>
          <p className="text-lg text-primary-foreground/80">
            Descoperă gama completă de suplimente și echipament sportiv
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors duration-200" />
            <Input
              type="text"
              placeholder="Caută produse..."
              className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-accent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-200 hover:scale-105 ${selectedCategory === category ? 'bg-accent text-accent-foreground' : ''}`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Sortează:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={sortBy === 'popular' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSortBy('popular')}
                className={`transition-all duration-200 hover:scale-105 ${sortBy === 'popular' ? 'bg-accent text-accent-foreground' : ''}`}
              >
                Popular
              </Button>
              <Button
                variant={sortBy === 'price-asc' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSortBy('price-asc')}
                className={`transition-all duration-200 hover:scale-105 ${sortBy === 'price-asc' ? 'bg-accent text-accent-foreground' : ''}`}
              >
                Preț Crescător
              </Button>
              <Button
                variant={sortBy === 'price-desc' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSortBy('price-desc')}
                className={`transition-all duration-200 hover:scale-105 ${sortBy === 'price-desc' ? 'bg-accent text-accent-foreground' : ''}`}
              >
                Preț Descrescător
              </Button>
              <Button
                variant={sortBy === 'rating' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSortBy('rating')}
                className={`transition-all duration-200 hover:scale-105 ${sortBy === 'rating' ? 'bg-accent text-accent-foreground' : ''}`}
              >
                Rating
              </Button>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            {filteredAndSortedProducts.length} produse găsite
          </div>
        </div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">
              Nu au fost găsite produse pentru criteriile selectate.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredAndSortedProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-2 transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1">
                <Link href={`/produse/${product.id}`}>
                  <div className="relative aspect-square overflow-hidden bg-muted cursor-pointer">
                    {product.badge && (
                      <div className="absolute left-4 top-4 z-10 rounded-full bg-accent px-3 py-1 animate-in zoom-in-50 duration-300">
                        <span className="text-xs font-bold text-accent-foreground">
                          {product.badge}
                        </span>
                      </div>
                    )}
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </Link>
                
                <div className="p-4">
                  <span className="text-xs font-medium text-muted-foreground">
                    {product.category}
                  </span>
                  <Link href={`/produse/${product.id}`}>
                    <h3 className="mb-2 mt-1 line-clamp-2 text-base font-bold text-foreground hover:text-accent transition-colors duration-200 cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="ml-1 text-sm font-semibold text-foreground">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-xl font-bold text-foreground">
                      {product.price.toFixed(2)} RON
                    </span>
                    {product.oldPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        {product.oldPrice.toFixed(2)} RON
                      </span>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                    onClick={() => addToCart(product)}
                    size="sm"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Adaugă în Coș
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  )
}

export default function ProdusePage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="animate-spin h-8 w-8 border-4 border-accent border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground">Se încarcă produsele...</p>
        </div>
        <Footer />
      </main>
    }>
      <ProduseContent />
    </Suspense>
  )
}
