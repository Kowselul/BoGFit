'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { useToast } from '@/hooks/use-toast'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const { login, register } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isLogin) {
      const success = await login(email, password)
      if (success) {
        toast({
          title: "Autentificare reușită!",
          description: "Bun venit înapoi!",
        })
        router.push('/')
      }
    } else {
      const success = await register(name, email, password)
      if (success) {
        toast({
          title: "Cont creat cu succes!",
          description: "Bun venit la BoGFit!",
        })
        router.push('/')
      }
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-muted/30 rounded-lg border border-border p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {isLogin ? 'Autentificare' : 'Creare Cont'}
              </h1>
              <p className="text-muted-foreground">
                {isLogin ? 'Intră în contul tău BoGFit' : 'Creează-ți un cont nou'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Nume Complet</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ion Popescu"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@exemplu.ro"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Parolă</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                {isLogin ? 'Autentificare' : 'Creare Cont'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-accent hover:underline"
              >
                {isLogin ? 'Nu ai cont? Creează unul aici' : 'Ai deja cont? Autentifică-te'}
              </button>
            </div>

            <div className="mt-4 text-center">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Înapoi la pagina principală
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
