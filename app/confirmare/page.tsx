'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Package, Mail, Home } from 'lucide-react'

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [orderNumber, setOrderNumber] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const order = searchParams.get('order')
    const emailParam = searchParams.get('email')
    if (!order) {
      router.push('/')
    } else {
      setOrderNumber(order)
      setEmail(emailParam)
    }
  }, [searchParams, router])

  if (!orderNumber) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg border border-border bg-card p-8 text-center animate-in fade-in zoom-in-95 duration-700">
            <div className="mb-6 flex justify-center animate-in zoom-in-50 duration-1000 delay-300">
              <div className="rounded-full bg-accent/10 p-4 transition-all duration-300 hover:scale-110">
                <CheckCircle2 className="h-16 w-16 text-accent" />
              </div>
            </div>
            
            <h1 className="mb-2 text-3xl font-bold text-foreground animate-in slide-in-from-bottom-4 duration-700 delay-500">
              Comandă Plasată cu Succes!
            </h1>
            
            <p className="mb-6 text-lg text-muted-foreground animate-in slide-in-from-bottom-4 duration-700 delay-700">
              Mulțumim pentru comanda ta!
            </p>
            
            <div className="mb-8 rounded-lg bg-muted/50 p-6 animate-in slide-in-from-bottom-4 duration-700 delay-1000">
              <p className="mb-2 text-sm text-muted-foreground">
                Numărul comenzii tale:
              </p>
              <p className="text-2xl font-bold text-accent">
                #{orderNumber}
              </p>
            </div>
            
            <div className="mb-8 space-y-4 text-left animate-in slide-in-from-bottom-4 duration-700 delay-[1200ms]">
              <div className="flex items-start gap-3 rounded-lg p-4 transition-all duration-300 hover:bg-muted/30">
                <Mail className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">
                    Confirmarea a fost trimisă
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {email ? `Vei primi un email la ${email} cu detaliile comenzii` : 'Vei primi un email cu detaliile comenzii'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 rounded-lg p-4 transition-all duration-300 hover:bg-muted/30">
                <Package className="mt-1 h-5 w-5 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">
                    Comanda este în procesare
                  </p>
                  <p className="text-sm text-muted-foreground">
                    O să primești un email când comanda va fi expediată
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center animate-in slide-in-from-bottom-4 duration-700 delay-[1400ms]">
              <Button
                onClick={() => router.push('/')}
                className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105"
              >
                <Home className="mr-2 h-4 w-4" />
                Înapoi la Pagina Principală
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push('/produse')}
                className="transition-all duration-300 hover:scale-105"
              >
                Continuă Cumpărăturile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
