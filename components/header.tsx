import Link from "next/link"
import { Leaf } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl text-primary">Synaptix</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#producto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Producto
          </Link>
          <Link href="#beneficios" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Beneficios
          </Link>
          <Link href="#como-funciona" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Cómo funciona
          </Link>
        </nav>
        <a
          href="https://wa.me/573012914880"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Comprar
        </a>
      </div>
    </header>
  )
}
