'use client'

import { Star, ShoppingCart, Heart, Share2, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Product, useCart } from '@/lib/cart-context'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()
  const router = useRouter()
  const { toast } = useToast()
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    toast({
      title: "Produs adăugat în coș!",
      description: `${quantity}x ${product.name}`,
      duration: 3000,
    })
  }
  
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => router.back()}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Înapoi
        </Button>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {product.badge}
              </span>
            )}
          </div>
          
          {/* Product Info */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm text-muted-foreground">{product.category}</p>
              <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-accent text-accent'
                        : 'fill-muted text-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} recenzii)
              </span>
            </div>
            
            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-accent">
                {product.price.toFixed(2)} RON
              </span>
              {product.oldPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {product.oldPrice.toFixed(2)} RON
                </span>
              )}
            </div>
            
            {/* Description */}
            <div className="rounded-lg border border-border bg-muted/50 p-4">
              <h3 className="mb-2 font-semibold text-foreground">Descriere</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>
            
            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="font-semibold text-foreground">Cantitate:</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center font-semibold text-foreground">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex gap-3">
              <Button 
                className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                size="lg"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Adaugă în Coș
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Additional Info */}
            <div className="space-y-2 rounded-lg border border-border p-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Livrare:</span>
                <span className="font-semibold text-foreground">Gratuită peste 200 RON</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Stoc:</span>
                <span className="font-semibold text-accent">Disponibil</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Garanție:</span>
                <span className="font-semibold text-foreground">30 zile retur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
