'use client'

import Link from 'next/link'
import { ShoppingCart, Menu, Search, X, User, LogOut, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart-context'
import { useAuth } from '@/lib/auth-context'
import { useState } from 'react'
import { CartDrawer } from './cart-drawer'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { allProducts } from '@/lib/products-data'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Header() {
  const { totalItems } = useCart()
  const { user, logout } = useAuth()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()
  
  const searchResults = searchQuery.length > 0 
    ? allProducts.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : []

  const handleSearch = (productId: number) => {
    router.push(`/produse/${productId}`)
    setIsSearchOpen(false)
    setSearchQuery('')
  }
  
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary transition-transform duration-300 hover:scale-110">
                <span className="text-xl font-bold text-primary-foreground">BG</span>
              </div>
              <span className="text-2xl font-bold text-primary">BoGFit</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/produse" className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200">
                Produse
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex transition-transform duration-200 hover:scale-110"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative transition-transform duration-200 hover:scale-110"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground animate-in zoom-in-50 duration-200">
                  {totalItems}
                </span>
              )}
            </Button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="transition-transform duration-200 hover:scale-110">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5 text-sm font-semibold">{user.name}</div>
                  <div className="px-2 py-1.5 text-xs text-muted-foreground">{user.email}</div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push('/profil')}>
                    <User className="mr-2 h-4 w-4" />
                    Profilul Meu
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push('/comenzi')}>
                    <Package className="mr-2 h-4 w-4" />
                    Comenzile Mele
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Deconectare
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => router.push('/login')}
                className="transition-transform duration-200 hover:scale-105"
              >
                Autentificare
              </Button>
            )}
            
            <Button variant="ghost" size="icon" className="md:hidden transition-transform duration-200 hover:scale-110">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsSearchOpen(false)}>
          <div className="container mx-auto px-4 pt-20" onClick={(e) => e.stopPropagation()}>
            <div className="max-w-2xl mx-auto bg-background rounded-lg shadow-2xl animate-in slide-in-from-top duration-300">
              <div className="flex items-center gap-4 p-4 border-b border-border">
                <Search className="h-5 w-5 text-muted-foreground" />
                <Input 
                  type="text"
                  placeholder="Caută produse..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-0 focus-visible:ring-0"
                  autoFocus
                />
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {searchResults.length > 0 && (
                <div className="p-2 max-h-96 overflow-y-auto">
                  {searchResults.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleSearch(product.id)}
                      className="w-full flex items-center gap-4 p-3 hover:bg-muted rounded-lg transition-colors duration-200"
                    >
                      <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-12 h-12 object-cover rounded" />
                      <div className="flex-1 text-left">
                        <p className="font-medium text-sm">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.category}</p>
                      </div>
                      <p className="font-bold text-accent">{product.price} RON</p>
                    </button>
                  ))}
                </div>
              )}
              
              {searchQuery.length > 0 && searchResults.length === 0 && (
                <div className="p-8 text-center text-muted-foreground">
                  Nu au fost găsite produse pentru &quot;{searchQuery}&quot;
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
