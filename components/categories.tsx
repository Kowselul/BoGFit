'use client'

import { Card } from '@/components/ui/card'
import Link from 'next/link'

const categories = [
  {
    title: 'Suplimente',
    items: ['Proteine', 'Creatină', 'Pre-Workout', 'BCAA', 'Vitamine'],
    image: '/protein-powder-supplements.jpg',
    link: '/produse?category=Proteine',
  },
  {
    title: 'Echipament',
    items: ['Bandaje Genunchi', 'Bandaje Coate', 'Curele Spate', 'Mănuși', 'Benzi Încheieturi'],
    image: '/gym-equipment-knee-wraps.jpg',
    link: '/produse?category=Echipament',
  },
  {
    title: 'Accesorii',
    items: ['Shaker-e', 'Genți Sport', 'Prosop Fitness', 'Benzi Elastice', 'Saltea Yoga'],
    image: '/fitness-accessories-shaker.jpg',
    link: '/produse?category=Accesorii',
  },
]

export function Categories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Categorii Populare
          </h2>
          <p className="text-lg text-muted-foreground">
            Alege categoria potrivită pentru nevoile tale
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category, index) => (
            <Link key={index} href={category.link}>
              <Card 
                className="group cursor-pointer overflow-hidden border-2 transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-foreground transition-colors duration-200 group-hover:text-accent">
                    {category.title}
                  </h3>
                  <ul className="space-y-1">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
