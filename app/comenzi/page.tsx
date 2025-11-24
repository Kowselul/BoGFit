'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Package } from 'lucide-react'

export default function OrdersPage() {
  const { user, orders } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) return null

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-foreground mb-8 animate-in fade-in slide-in-from-top duration-500">
            Comenzile Mele
          </h1>

          {orders.length === 0 ? (
            <div className="text-center py-16 animate-in fade-in duration-500">
              <Package className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Nu ai comenzi încă
              </h2>
              <p className="text-muted-foreground mb-6">
                Începe să cumperi produsele tale preferate!
              </p>
              <button
                onClick={() => router.push('/produse')}
                className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
              >
                Vezi Produsele
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order, index) => (
                <div
                  key={order.id}
                  className="bg-muted/30 rounded-lg border border-border p-6 animate-in fade-in slide-in-from-bottom duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">Comanda #{order.id}</h3>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'Livrat'
                          ? 'bg-green-500/20 text-green-600'
                          : order.status === 'În curs'
                          ? 'bg-blue-500/20 text-blue-600'
                          : 'bg-yellow-500/20 text-yellow-600'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Cantitate: {item.quantity}
                          </p>
                        </div>
                        <p className="font-semibold">{item.price.toFixed(2)} RON</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      <p>Livrare: {order.shippingMethod}</p>
                      <p>Plată: {order.paymentMethod}</p>
                    </div>
                    <p className="text-xl font-bold text-accent">{order.total.toFixed(2)} RON</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
