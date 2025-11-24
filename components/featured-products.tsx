'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { allProducts } from '@/lib/products-data'
import Link from 'next/link'

export function FeaturedProducts() {
  const { addToCart } = useCart()
  const featuredProducts = allProducts.slice(0, 6)

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
              Produse Recomandate
            </h2>
            <p className="text-lg text-muted-foreground">
              Cele mai populare produse din magazinul nostru
            </p>
          </div>
          <Link href="/produse">
            <Button variant="outline" className="hidden md:flex">
              Vezi Toate
            </Button>
          </Link>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-2 transition-all hover:border-accent hover:shadow-lg">
              <Link href={`/produse/${product.id}`}>
                <div className="relative aspect-square overflow-hidden bg-muted">
                  {product.badge && (
                    <div className="absolute left-4 top-4 z-10 rounded-full bg-accent px-3 py-1">
                      <span className="text-xs font-bold text-accent-foreground">
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </Link>
              
              <div className="p-6">
                <span className="text-xs font-medium text-muted-foreground">
                  {product.category}
                </span>
                <Link href={`/produse/${product.id}`}>
                  <h3 className="mb-2 mt-1 text-lg font-bold text-foreground hover:text-accent transition-colors cursor-pointer">
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
                    ({product.reviews} review-uri)
                  </span>
                </div>
                
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    {product.price.toFixed(2)} RON
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.oldPrice.toFixed(2)} RON
                    </span>
                  )}
                </div>
                
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Adaugă în Coș
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/produse">
            <Button variant="outline" className="w-full">
              Vezi Toate Produsele
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
