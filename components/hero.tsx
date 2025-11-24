import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/gym-athlete-training.jpg')] bg-cover bg-center opacity-10 transition-opacity duration-500" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="mb-6 inline-block rounded-full bg-accent px-4 py-2 transition-transform duration-300 hover:scale-105">
            <span className="text-sm font-semibold text-accent-foreground">
              Noutate: Gama de proteine premium
            </span>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance">
            Atinge-ți Obiectivele cu BoGFit
          </h1>
          
          <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl text-pretty leading-relaxed">
            Descoperă cele mai bune suplimente și echipamente sportive pentru antrenamentele tale. Calitate premium, rezultate garantate.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/produse">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105">
                Explorează Produsele
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
