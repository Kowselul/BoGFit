import Link from 'next/link'
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <span className="text-xl font-bold text-accent-foreground">BG</span>
              </div>
              <span className="text-2xl font-bold text-secondary-foreground">BoGFit</span>
            </Link>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Magazinul tău de încredere pentru suplimente și echipament sportiv de calitate premium.
            </p>
            <div className="mt-4 flex gap-3">
              <Link href="#" className="rounded-full bg-accent p-2 text-accent-foreground transition-colors hover:bg-accent/80">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="https://www.instagram.com/bogfit1/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-accent p-2 text-accent-foreground transition-colors hover:bg-accent/80">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="rounded-full bg-accent p-2 text-accent-foreground transition-colors hover:bg-accent/80">
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Produse
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors">
                  Proteine
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors">
                  Creatină
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors">
                  Pre-Workout
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors">
                  Echipament
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors">
                  Accesorii
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Info */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Informații
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors">
                  Livrare
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors">
                  Returnări
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors">
                  Termeni și Condiții
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-secondary-foreground/80">
              Abonează-te pentru oferte exclusive și noutăți.
            </p>
            <div className="flex gap-2">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Email-ul tău"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <button className="rounded-md bg-accent p-2 text-accent-foreground transition-colors hover:bg-accent/90">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © 2025 BoGFit. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  )
}
