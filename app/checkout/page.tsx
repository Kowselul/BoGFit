'use client'

import { useState } from 'react'
import { useCart } from '@/lib/cart-context'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useRouter } from 'next/navigation'
import { ChevronLeft, Package, Truck, CreditCard } from 'lucide-react'

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  const { addOrder } = useAuth()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    county: '',
    zipCode: '',
    paymentMethod: 'card',
    deliveryMethod: 'standard',
  })

  const deliveryPrice = formData.deliveryMethod === 'express' ? 29.99 : 15.99
  const finalTotal = totalPrice + (totalPrice < 200 ? deliveryPrice : 0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const orderNumber = Math.floor(100000 + Math.random() * 900000).toString()
    
    addOrder({
      id: orderNumber,
      date: new Date().toLocaleDateString('ro-RO'),
      total: finalTotal,
      status: 'Procesare',
      items: items.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image,
      })),
      shippingMethod: formData.deliveryMethod === 'express' ? 'Livrare Express (1-2 zile)' : 'Livrare Standard (3-5 zile)',
      paymentMethod: formData.paymentMethod === 'card' ? 'Card Bancar' : 'Ramburs',
    })
    
    try {
      // Send confirmation email
      await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          orderNumber,
          customerName: `${formData.firstName} ${formData.lastName}`,
          items,
          totalPrice: finalTotal,
          deliveryAddress: `${formData.address}, ${formData.city}, ${formData.county}, ${formData.zipCode}`,
          deliveryMethod: formData.deliveryMethod,
          paymentMethod: formData.paymentMethod,
        }),
      })
    } catch (error) {
      console.error('Failed to send confirmation email:', error)
    }
    
    clearCart()
    router.push(`/confirmare?order=${orderNumber}&email=${encodeURIComponent(formData.email)}`)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-md text-center animate-in fade-in zoom-in-50 duration-500">
            <Package className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
            <h1 className="mb-2 text-2xl font-bold text-foreground">
              Coșul este gol
            </h1>
            <p className="mb-6 text-muted-foreground">
              Adaugă produse pentru a continua cu comanda
            </p>
            <Button onClick={() => router.push('/produse')} className="transition-all duration-300 hover:scale-105">
              Vezi Produsele
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 transition-all duration-200 hover:scale-105"
          onClick={() => router.back()}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Înapoi
        </Button>

        <h1 className="mb-8 text-3xl font-bold text-foreground animate-in fade-in slide-in-from-bottom-4 duration-500">
          Finalizare Comandă
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8 lg:col-span-2">
            {/* Personal Info */}
            <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                Informații Personale
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="firstName">Prenume *</Label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nume *</Label>
                  <Input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                Adresă de Livrare
              </h2>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="address">Adresă *</Label>
                  <Input
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <Label htmlFor="city">Oraș *</Label>
                    <Input
                      id="city"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <Label htmlFor="county">Județ *</Label>
                    <Input
                      id="county"
                      required
                      value={formData.county}
                      onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">Cod Poștal *</Label>
                    <Input
                      id="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className="transition-all duration-300 focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Method */}
            <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                Metodă de Livrare
              </h2>
              <RadioGroup 
                value={formData.deliveryMethod}
                onValueChange={(value) => setFormData({ ...formData, deliveryMethod: value })}
              >
                <div className="flex items-center space-x-3 rounded-lg border border-border p-4 transition-all duration-200 hover:border-accent">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard" className="flex flex-1 cursor-pointer items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Truck className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-semibold text-foreground">Livrare Standard</p>
                        <p className="text-sm text-muted-foreground">3-5 zile lucrătoare</p>
                      </div>
                    </div>
                    <span className="font-semibold text-foreground">15.99 RON</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 rounded-lg border border-border p-4 transition-all duration-200 hover:border-accent">
                  <RadioGroupItem value="express" id="express" />
                  <Label htmlFor="express" className="flex flex-1 cursor-pointer items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Truck className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-semibold text-foreground">Livrare Express</p>
                        <p className="text-sm text-muted-foreground">1-2 zile lucrătoare</p>
                      </div>
                    </div>
                    <span className="font-semibold text-foreground">29.99 RON</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Payment Method */}
            <div className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                Metodă de Plată
              </h2>
              <RadioGroup 
                value={formData.paymentMethod}
                onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
              >
                <div className="flex items-center space-x-3 rounded-lg border border-border p-4 transition-all duration-200 hover:border-accent">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex flex-1 cursor-pointer items-center gap-3">
                    <CreditCard className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Card Bancar</p>
                      <p className="text-sm text-muted-foreground">Visa, Mastercard</p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 rounded-lg border border-border p-4 transition-all duration-200 hover:border-accent">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="flex flex-1 cursor-pointer items-center gap-3">
                    <Package className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">Ramburs</p>
                      <p className="text-sm text-muted-foreground">Plată la livrare</p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105"
            >
              {isSubmitting ? 'Se procesează...' : 'Plasează Comanda'}
            </Button>
          </form>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg">
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                Sumar Comandă
              </h2>
              
              <div className="mb-4 space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-16 w-16 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground line-clamp-1">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.quantity} x {item.price.toFixed(2)} RON
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {(item.price * item.quantity).toFixed(2)} RON
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 border-t border-border pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="font-semibold text-foreground">
                    {totalPrice.toFixed(2)} RON
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Livrare:</span>
                  <span className="font-semibold text-foreground">
                    {totalPrice < 200 ? `${deliveryPrice.toFixed(2)} RON` : 'GRATUITĂ'}
                  </span>
                </div>
                {totalPrice < 200 && (
                  <p className="text-xs text-muted-foreground">
                    Mai adaugă {(200 - totalPrice).toFixed(2)} RON pentru livrare gratuită
                  </p>
                )}
              </div>
              
              <div className="mt-4 flex justify-between border-t border-border pt-4">
                <span className="text-lg font-semibold text-foreground">Total:</span>
                <span className="text-2xl font-bold text-accent">
                  {finalTotal.toFixed(2)} RON
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
